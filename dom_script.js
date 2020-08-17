function validate() {
    var firstName = document.getElementById("first");
    var lastName = document.getElementById("last");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var message = document.getElementById("message");
    var error = document.getElementById("error");

    error.style.padding = "10px";

    var text;
    if (firstName.value.length < 1) {
        text = "Enter a valid name!";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;
    }
    if (lastName.value.length < 1) {
        text = "Enter a valid name!";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;
    }
    if (male.checked == false && female.checked == false) {
        text = "Select a gender";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;

    }
    if (message.value.length < 1) {
        text = "Introduceti un mesaj";
        error.innerHTML = text;
        error.style.visibility = "visible";
        error.style.backgroundColor = "red";
        return false;
    }

    text = "Thank you for contacting us!";
    error.innerHTML = text;
    error.style.visibility = "visible";
    error.style.backgroundColor = "green";
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(male.checked == true ? 'Male' : 'Female');
    console.log(message.value);
    return false;
}