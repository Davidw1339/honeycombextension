$(function() {
    $( "#sortable" ).sortable(); // ({
    //     start: function(event, ui) {
    //         var start_pos = ui.item.index();
    //         ui.item.data('start_pos', start_pos);
    //     },
    //     change: function(event, ui) {
    //         var start_pos = ui.item.data('start_pos');
    //         var index = ui.placeholder.index();
    //         console.log(index);
    //         if (start_pos < index) {
    //             $('#sortable li:nth-child(' + index + ')').addClass('highlights');
    //         } else {
    //             $('#sortable li:eq(' + (index + 1) + ')').addClass('highlights');
    //         }
    //     },
    //     update: function(event, ui) {
    //         $('#sortable li').removeClass('highlights');
    //     }
    // });
    // $( "#sortable" ).disableSelection();
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