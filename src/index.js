/*
    The start page of the app.
*/

$(function() {
    // display the file name on button click
    $("#okButton").on('click', () => {
        var fileName = $("#databaseForm").find("input[name='filename']").val();
        console.log("selected file: ", fileName);
    })
});