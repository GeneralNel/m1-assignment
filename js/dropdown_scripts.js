var dropdownElement = document.getElementById("contactMethod");
var emailInput = document.getElementById("emailInput");
var phoneInput = document.getElementById("phoneInput");

dropdownElement.addEventListener("change", showContactInput);

function showContactInput(event) {
    var selectedValue = event.target.value;
    console.log(selectedValue);
    if (selectedValue == "email") {
        emailInput.style.display = "block";
        phoneInput.style.display = "none";
    } else if (selectedValue == "phone") {
        emailInput.style.display = "none";
        phoneInput.style.display = "block";
    } else {
        emailInput.style.display = "none";
        phoneInput.style.display = "none";
    }
}