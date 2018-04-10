$(function () {
    $(".hidebike").hide(1)
    $('#click1').click(function () {
        $("#bikeTwo, #bikeThree").hide(10);
    })
    $("#click1").click(function () {
        $('#bikeOne').show(800);
    })
    $("#click2").click(function () {
        $("#bikeOne, #bikeThree").hide(10);
    })
    $("#click2").click(function () {
        $('#bikeTwo').toggle(800);
    })
    $("#click3").click(function () {
        $("#bikeTwo, #bikeOne").hide(10);
    })
    $("#click3").click(function () {
        $('#bikeThree').toggle(800);
    })
})
