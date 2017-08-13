function check() {
    'use strict';
    var message = document.getElementById("message");

    if (this.value.length < 5) {
        message.textContent = "Username is less than 4 characters";
    } else {
        message.textContent = "Done";
    }
}

document.getElementById("Username").onblur = check;
