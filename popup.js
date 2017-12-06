$(function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
});

$( document ).ready(function() {
    $("#hitolo").click(toDisplayHTL);
    $("#lotohi").click(toDisplayLTH);
    $("#bese").click(toDisplayBS);
    $("#tora").click(toDisplayTR);
    $("#relevant").click(toDisplayREL);
    $("#nw").click(toDisplayNEW);
});

function toDisplayHTL() {
    var x = document.getElementById("htl");
    var y = document.getElementById("lth");
    if ($('input[type=checkbox]').prop('checked') && x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else if (!$('input[type=checkbox]').prop('checked')) {
        x.style.display = "none";
    }
}
function toDisplayLTH() {
    var x = document.getElementById("lth");
    var y = document.getElementById('htl');
    if ($('input[type=checkbox]').prop('checked') && x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else if (!$('input[type=checkbox]').prop('checked')) {
        x.style.display = "none";
    }
}
function toDisplayBS() {
    var x = document.getElementById("bs");
    if ($('input[type=checkbox]').prop('checked') && x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function toDisplayTR() {
    var x = document.getElementById("tr");
    if ($('input[type=checkbox]').prop('checked') && x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function toDisplayREL() {
    var x = document.getElementById("relevant");
    if ($('input[type=checkbox]').prop('checked') && x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function toDisplayNEW() {
    var x = document.getElementById("new");
    if ($('input[type=checkbox]').prop('checked') && x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//         console.log(response.farewell);
//     });
// });



// function clickHandler(e) {
//     chrome.runtime.sendMessage({directive: "popup-click"}, function(response) {
//         this.close(); // close the popup when the background finishes processing request
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('click-me').addEventListener('click', clickHandler);
// })