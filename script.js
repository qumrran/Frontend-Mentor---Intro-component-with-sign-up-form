const firstName = document.querySelector('#firstName');
const firstNameAlert = document.querySelector('.emptyFirstName');
const lastName = document.querySelector('#lastName');
const lastNameAlert = document.querySelector('.emptyLastName');
const emailAdress = document.querySelector('#email');
const password = document.querySelector('#password');
const emptyEmail = document.querySelector('.emptyEmailAddress');
const emptyPassword = document.querySelector('.emptyPassword');
const firstNameAlertIcon = document.querySelector('.FirstnameAlert');
const lastNameAlertIcon = document.querySelector('.LastnameAlert');
const emailNameAlertIcon = document.querySelector('.EmailAlert');
const passwordNameAlertIcon = document.querySelector('.passwordAlert');
const submitButton = document.querySelector('#button');

submitButton.addEventListener('click', function (event) {
	event.preventDefault();
	validateForm();
});

function validateForm() {
	validateField(firstName, firstNameAlert, firstNameAlertIcon);
	validateField(lastName, lastNameAlert, lastNameAlertIcon);
	validateEmail(emailAdress, emptyEmail, emailNameAlertIcon);
	validatePassword(password, emptyPassword, passwordNameAlertIcon);
}

function validateField(field, alert, alertIcon) {
	if (field.value.trim() === '') {
		alert.textContent = 'This field cannot be empty.';
		alertIcon.style.display = 'block';
		field.style.borderColor = 'var(--red)';
		alert.style.color = 'var(--red)';
		return;
	}

	const nameRegex = /^[A-Za-z]+$/;
	if (!nameRegex.test(field.value)) {
		alert.textContent = 'This field can only contain letters.';
		alertIcon.style.display = 'block';
		field.style.borderColor = 'var(--red)';
		alert.style.color = 'var(--red)';
		return;
	}

	if (field.value.length < 2) {
		alert.style.color = 'var(--red)';
		alertIcon.style.display = 'block';
		field.style.borderColor = 'var(--red)';
		alert.textContent = 'This field should have at least 2 letters.';
		return;
	}

	alert.style.color = 'var(--grayishBlue)';
	field.style.borderColor = '';
	alert.textContent = 'OK';
	alertIcon.style.display = 'none';
}

function validateEmail(email, emptyEmail, alertIcon) {
	if (email.value.trim() === '') {
		emptyEmail.textContent = 'Email cannot be empty.';
		emptyEmail.style.color = 'var(--red)';
		alertIcon.style.display = 'block';
		email.style.borderColor = 'var(--red)';
		alertIcon.style.color = 'var(--red)';
		return;
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email.value)) {
		emptyEmail.textContent = 'Invalid email address.';
		emptyEmail.style.color = 'var(--red)';
		alertIcon.style.display = 'block';
		email.style.borderColor = 'var(--red)';
		alertIcon.style.color = 'var(--red)';
		return;
	}

	emptyEmail.textContent = 'OK';
	emptyEmail.style.color = 'var(--grayishBlue)';
	alertIcon.style.display = 'none';
	alertIcon.style.color = 'var(--grayishBlue)';
	email.style.borderColor = 'var(--grayishBlue)';
}

function validatePassword(password, emptyPassword, alertIcon) {
	if (password.value.trim() === '') {
		emptyPassword.textContent = 'This field cannot be empty.';
		emptyPassword.style.color = 'var(--red)';
		alertIcon.style.display = 'block';
		password.style.borderColor = 'var(--red)';
		alertIcon.style.color = 'var(--red)';
		return;
	}

	if (password.value.length < 8) {
		emptyPassword.textContent = 'Password should have at least 8 characters.';
		emptyPassword.style.color = 'var(--red)';
		alertIcon.style.display = 'block';
		password.style.borderColor = 'var(--red)';
		alertIcon.style.color = 'var(--red)';
		return;
	}

	emptyPassword.textContent = 'OK';
	emptyPassword.style.color = 'var(--grayishBlue)';
	alertIcon.style.display = 'none';
	password.style.borderColor = 'var(--grayishBlue)';
}
