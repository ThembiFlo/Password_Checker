function password_is_valid(password) {
	let validPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.{9,}$)/;

	try {
		if (result == false) throw 'password must contain uppercase and lowercase letters and at least one number';
	} catch (error) {
		console.log('Please note ' + error);
	}
	return validPassword.test(password);
}

function password_is_ok(password) {
	let regEx1 = /[A-Za-z0-9]{9,}/;
	let regEx2 = /(?=.*[A-Z])[A-Z]+/;
	let regEx3 = /(?=.*[a-z])[a-z]+/;
	let regEx4 = /(?=.*[0-9])[0-9]+/;
	if (password !== null && regEx1.test(password) == true && regEx2.test(password) == true) {
		return true;
	}
	if (password !== null && regEx1.test(password) && regEx1.test(password) == true && regEx3.test(password) == true) {
		return true;
	}
	if (password !== null && regEx1.test(password) == true && regEx4.test(password) == true) {
		return true;
	} else {
		return false;
	}
}
