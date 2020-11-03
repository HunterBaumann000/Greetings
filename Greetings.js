$(document).ready(function() {

    $("#Submit").click(sayGreetings);

    function sayGreetings(event) {

        event.preventDefault();

        var fullName = $("#nameText").val();

        var checkedBox = $("#input[name=radioBox]:checked");

        var finalGreetings = " Welcome, " + checkedBox + " " + fullName + ". ";

        $("#greetingTxt").text(finalGreetings);

    }

});

