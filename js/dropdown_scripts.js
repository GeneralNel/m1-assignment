var dropdownElement = document.getElementById("contactMethod");
var emailInput = document.getElementById("emailInput");
var phoneInput = document.getElementById("phoneInput");

dropdownElement.addEventListener("change", showContactInput);

function showContactInput(event) {
    var selectedValue = event.target.value;
    console.log(selectedValue);
    if (selectedValue == "email") {
        emailInput.style.visibility = "visible";
        phoneInput.style.visibility = "hidden";
    } else if (selectedValue == "phone") {
        emailInput.style.visibility = "hidden";
        phoneInput.style.visibility = "visible";
    } else {
        emailInput.style.visibility = "hidden";
        phoneInput.style.visibility = "hidden";
    }
}