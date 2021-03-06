/**
->reorder the list with new rankings
->add parameters with weight on each option
->highLowPrices is to see which it is ordered by
---->RETURNS new reordered list with id's
*/


function reorderList(woPrice, woNumRatings, woRating, highLowPrices) {
     //using jquery to get specific items on the page
    var items = $('.s-result-item.s-result-card-for-container.a-declarative.celwidget');
    //rankings to sort array
    var orderRankings = []

    //ids for the array rankings
    var idsReordered = []
    //calling methods we made for highest num reviews and highest price for the items
    var highestNumReviews = getHighestNumReviews(items)
    var highestPrice = getHighestPrice(items)

    for (var i = 0; i < items.length; i++) {
        //console.log(items[i])

        var item = $(items[i])

        //<-----------get the title of the item----------->
        var title = item.find(".a-link-normal.s-access-detail-page.s-color-twister-title-link.a-text-normal")

        //<--------get the average of the whole prices--------->
        var wholePriceArray = item.find('.sx-price-whole')
        var sum = 0
        for (var q = 0; q < wholePriceArray.length; q++) {
            sum += parseInt(wholePriceArray[q].textContent)
        }

        if (wholePriceArray.length != 0) {
            sum /= wholePriceArray.length

            //wholeprice for the item
            var wholePrice = (Math.round(sum))
            sum = 0

            //<--------get the number of ratings per item--------->
            var numberOfRatings = parseInt(item.find('.a-size-small.a-link-normal.a-text-normal').text())

            //<--------get the average rating per item--------->
            var averageRatingBlock = item.find('.a-icon-alt')
            var averageRating = -1
            //if it doesn't have a rating, then set average and num ratings to 0
            if (averageRatingBlock.length >= 1) {
                if (!(typeof averageRatingBlock[1])) {
                    averageRating = 0
                    numberOfRatings = 0
                } else if (averageRatingBlock[1].textContent.indexOf(".") != -1) {
                    averageRating = averageRatingBlock[1].textContent.slice(0,3).valueOf()
                } else {
                    averageRating = averageRatingBlock[1].textContent.slice(0,1).valueOf()
                }
            }

            //just some safety here
            if (!(typeof averageRatingBlock[1])) {
                averageRating = 0
                numberOfRatings = 0
            }


            //create a ranking for the current item
            var rankingRating = 0

            //each ranking is based of a linear scale, taking the highest of the page and using that
            //as the 'base' number

            if (highLowPrices == "high") {
                rankingRating += (wholePrice/highestPrice) * 100 * woPrice
            } else {
                rankingRating += ((1 - (wholePrice/highestPrice)) * 100 * woPrice)
            }
            rankingRating += (numberOfRatings/highestNumReviews) * 100 * woNumRatings
            rankingRating += averageRating * 20 * woRating

            //adding elements to be sorted
            orderRankings.push(rankingRating)
            idsReordered.push(i)
    }
}
    //return sorted elements
    console.log(sortRankings(orderRankings,idsReordered))
    return sortRankings(orderRankings,idsReordered)
}

function getHighestPrice(items) {
    //highest price of the item list
    highest = 0
    for(var i = 0; i < items.length; i++) {
        var item = $(items[i])
        //getting the whole price for each item
        var wholePriceArray = item.find('.sx-price-whole')
        var sum = 0
        //if the website shows more than one price, takes the average of the prices
        for (var q = 0; q < wholePriceArray.length; q++) {
            sum += parseInt(wholePriceArray[q].textContent)
        }
        sum /= wholePriceArray.length
        var wholePrice = (Math.round(sum))
        if (wholePrice > highest) {
            highest = wholePrice
        }
        sum = 0
    }
    //returns highest price
    return highest
}

function getHighestNumReviews(items) {
    //highest numReviews of the item list
    highest = 0
    for(var i = 0; i < items.length; i++) {
        var item = $(items[i])
        //getting the number of reviews for each item
        var numberOfRatings = parseInt(item.find('.a-size-small.a-link-normal.a-text-normal').text())
        if (highest < numberOfRatings) {
            highest = numberOfRatings
        }
    }
    return highest
}

function sortRankings(rankings, resultIds) {
    //using a bubble sort
    //doesn't matter what type of sort we use as we are sorting a small number of elements
    for (var i = 0; i < rankings.length; i++) {
        for (var q = 1; q < rankings.length - i; q++) {
            if (rankings[q-1] < rankings[q]) {
                //sort rankings
                temp = rankings[q-1]
                rankings[q-1] = rankings[q]
                rankings[q] = temp

                //based off of rankings, reorder the result_ids
                temp2 = resultIds[q-1]
                resultIds[q-1] = resultIds[q]
                resultIds[q] = temp2
            }
        }
    }

    console.log(resultIds)
    return resultIds
}

function reorderHTML(parameter) {
     //we reorder the element's html on the page based off the rankings determined
     //by the first part of the script
    var result_a = "#result_" + parameter[0];
    $(result_a).insertBefore($("#result_0"));
    for (i = 1; i < parameter.length; i++) {
        var result_b = "#result_" + parameter[i];
        $(result_b).insertAfter($(result_a));
        result_a = result_b;
    }
}

//Change parameters based on popup
$(document).ready(function() {
     //connecting the front end to backend highestNumReviews
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        var tags = request.sorted_data;
        var weights = [0.0, 0.0, 0.0, "low"];
        //giving static weights to each of the 3 chosen options based off order
        var static_weights = [0.5, 0.25, 0.1];

        //checking for each of the tags that are selected and giving it a specific weight determined earlier
        for (var i = 0; i < tags.length; i++) {
            if (tags[i] == "htl" || tags[i] == "lth") {
                weights[0] = static_weights[i];
            }
            if (tags[i] == "bs") {
                weights[1] = static_weights[i];
            }
            if (tags[i] == "tr") {
                weights[2] = static_weights[i];
            }
        }

        //chosing high to low or low to high
        if (tags.includes('htl')) {
            weights[3] = "high";
        } else {
            weights[3] = "low";
        }
        
        console.log(weights);
        //reordering the html based off the determined weights
        reorderHTML(reorderList(weights[0], weights[1], weights[2], weights[3]));
    });
});
