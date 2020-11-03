$(document).ready(function() {

    $("#Submit").click(sayGreetings);

    function sayGreetings(event) {

        event.preventDefault();

        var fullName = $("#nameText").val();

        var checkedBox = $("#input[name=radioBox]:checked").val();

        $(this).css('#privateRank', 'light red');
        $(this).css('#sergeantRank', 'red');
        $(this).css('#specialistRank', 'dark red');

        var finalGreetings = " Welcome, " + checkedBox + " " + fullName + ". ";

        $("#greetingTxt").text(finalGreetings);

    }

});

