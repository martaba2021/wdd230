function validateForm() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    var isValid = true;

    var dateInput = document.getElementById('date');
    var currentDate = new Date();
    var selectedDate = new Date(dateInput.value);

    if (selectedDate <= currentDate) {
        document.getElementById('date-error').textContent = 'Please select a date in the future.';
        isValid = false;
    }

    var agreementCheckbox = document.getElementById('agreement');
    if (!agreementCheckbox.checked) {
        document.getElementById('agreement-error').textContent = 'Please agree to the rental services and agreements.';
        isValid = false;
    }

    if (!isValid) {
        return false;
    }
    return true;
}
