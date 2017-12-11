$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

$( document ).ready(function() {
	$("#hitolo").click(toDisplayHTL);
	$("#lotohi").click(toDisplayLTH);
	$("#bese").click(toDisplayBS);
	$("#tora").click(toDisplayTR);
	$("#rel").click(toDisplayREL);
	$("#nw").click(toDisplayNEW);
    $("#sort_button").click(toSort);
});

//high to low checkbox
function toDisplayHTL() {
    var a = document.getElementById("htl");
    var b = document.getElementById("lth");
    if ($('#hitolo').prop('checked')) {
        $(a).show();
        //prevents use of low to high filter simultaneously
        $('#lotohi').prop('checked', false);
        $(b).hide();
    } else if ($('#hitolo').prop('checked') == false) {
        $(a).hide();
    }
}

//low to high checkbox
function toDisplayLTH() {
    var c = document.getElementById("lth");
    var d = document.getElementById("htl");
    if ($('#lotohi').prop('checked')) {
        $(c).show();
        //prevents use of high to low filter simultaneously
        $('#hitolo').prop('checked', false);
        $(d).hide()
    } else if ($('#lotohi').prop('checked') == false) {
        $(c).hide();
    }
}

//best seller checkbox
function toDisplayBS() {
    var e = document.getElementById("bs");
    if ($('#bese').prop('checked')) {
        $(e).show();
    } else if ($('#bese').prop('checked') == false) {
        $(e).hide();
    }
}

//top rated checkbox
function toDisplayTR() {
    var f = document.getElementById("tr");
    if ($('#tora').prop('checked')) {
        $(f).show();
    } else if ($('#tora').prop('checked') == false) {
        $(f).hide();
    }
}

//relevancy checkbox
function toDisplayREL() {
    var g = document.getElementById("relevant");
    if ($('#rel').prop('checked')) {
        $(g).show();
    } else if ($('#rel').prop('checked') == false) {
        $(g).hide();
    }
}

//new checkbox
function toDisplayNEW() {
    var h = document.getElementById("new");
    if ($('#nw').prop('checked')) {
        $(h).show();
    } else if ($('#nw').prop('checked') == false) {
        $(h).hide();
    }
}

//sorts elements on page according to chosen filters
function toSort() {
    console.log("sorted");
    var tags = [];
    var children = $("#sortable").children().each(function(){
        if($($(this)[0]).css('display') != "none") {
            tags.push(this.id);
        }
    });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {sorted_data: tags}, function(response) {
            console.log(response.farewell);
        });
    });
}