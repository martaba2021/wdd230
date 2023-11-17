const password = document.querySelector("#password");
const passwordConfirmation =document.querySelector("#password-confirmation");
const alertMessage = document.querySelector("#alertMsg");

passwordConfirmation.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (password.value !== passwordConfirmation.value) {
		alertMessage.textContent = "❗Passwords DO NOT MATCH!";
		alertMessage.style.visibility = "visible";
        alertMessage.style.color= "red";
		passwordConfirmation.style.backgroundColor = "#fff0f3";
		passwordConfirmation.value = "";
		password.focus();
	} else {
		message.style.display = "hidden";
		passwordConfirmation.style.backgroundColor = "#fff";
		passwordConfirmation.style.color = "#000";
	}
}
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}