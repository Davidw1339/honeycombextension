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
});

function toDisplayHTL() {
    var a = document.getElementById("htl");
    var b = document.getElementById("lth");
    if ($('#hitolo').prop('checked')) {
        $(a).show();
        $('#lotohi').prop('checked', false);
        $(b).hide();
    } else if ($('#hitolo').prop('checked') == false) {
        $(a).hide();
    }
}
function toDisplayLTH() {
    var c = document.getElementById("lth");
    var d = document.getElementById("htl");
    if ($('#lotohi').prop('checked')) {
        $(c).show();
        $('#hitolo').prop('checked', false);
        $(d).hide()
    } else if ($('#lotohi').prop('checked') == false) {
        $(c).hide();
    }
}
function toDisplayBS() {
    var e = document.getElementById("bs");
    if ($('#bese').prop('checked')) {
        $(e).show();
    } else if ($('#bese').prop('checked') == false) {
        $(e).hide();
    }
}
function toDisplayTR() {
    var f = document.getElementById("tr");
    if ($('#tora').prop('checked')) {
        $(f).show();
    } else if ($('#tora').prop('checked') == false) {
        $(f).hide();
    }
}

function toDisplayREL() {
    var g = document.getElementById("relevant");
    if ($('#rel').prop('checked')) {
        $(g).show();
    } else if ($('#rel').prop('checked') == false) {
        $(g).hide();
    }
}
function toDisplayNEW() {
    var h = document.getElementById("new");
    if ($('#nw').prop('checked')) {
        $(h).show();
    } else if ($('#nw').prop('checked') == false) {
        $(h).hide();
    }
}
