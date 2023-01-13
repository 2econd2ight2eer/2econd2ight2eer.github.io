$(document).ready(function () {
    $("#send").on("click", function (event) {
        event.preventDefault()
        var usernameElement = $('#txtUsername')
        var usernameErrorElement = $('#usernameError')
        var usernameValue = usernameElement.val()

        var emailElement = $('#txtEmail')
        var emailErrorElement = $('#emailError')
        var emailValue = emailElement.val()

        var messageElement = $('#txtMessage')
        var messageErrorElement = $('#messageError')
        var messageValue = messageElement.val()

        var formSuccess = 3

        if (usernameValue == '') {
            usernameErrorElement.html("don't leave this blank!")
            formSuccess --
        } else {
            usernameErrorElement.html('')
        }

        if (emailValue == '') {
            emailErrorElement.html("don't leave this blank!")
            formSuccess --
        } else {
            emailErrorElement.html('')
        }

        if (messageValue == '') {
            messageErrorElement.html("at least say something!")
            formSuccess --
        } else {
            messageErrorElement.html('')
        }

        if (messageValue, emailValue, usernameValue != '') {

            divHistory.style.height = "auto"


            $("#history").html(
                "Name: " + usernameElement.val() + "<br>" + "<br>" +
                "Email: " + emailElement.val() + "<br>" + "<br>" +
                "You said: " + messageElement.val()
            )
            usernameElement.val('')
            emailElement.val('')
            messageElement.val('')
        }

        if (formSuccess === 3){

            var successPlay = false;
            var success = document.getElementById("success");
            success.play();
            successPlay ? success.pause() : success.play();

            overlay.style.display = "block"
        }else{
            var errorPlay = false;
            var error = document.getElementById("error");
            error.play();
            errorPlay ? error.pause() : error.play();
        }

    })
})
function off(){
    var dropPlay = false;
    var drop = document.getElementById("drop");
    drop.play();
    dropPlay ? drop.pause() : drop.play();

    document.getElementById("overlay").style.display = "none";
}