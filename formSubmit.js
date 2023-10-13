function submitForm(name, form) {
	formGood = true
	formErr = ''
	switch (name) {
	case 'contactInfo':
			formErr = 'All fields must be filled. Please check:';
			if (form.firstName.value == '') { formGood = false; formErr += ' First Name;'; }
			if (form.lastName.value == '') { formGood = false; formErr += ' Last Name;'; }
			if (form.email.value == '') { formGood = false; formErr += ' Email Address;'; }
			if (form.phone.value == '') { formGood = false; formErr += ' Phone Number;'; }
			if (formGood) { document.location = 'payment.html?name=' + form.firstName.value + '%20' + form.lastName.value; }
			else { document.getElementById('errForm').innerHTML = formErr; }
			break;
	
	case 'payment':
			formErr = 'All fields must be filled. Please check:';
			if (form.cardholder.value == '') { formGood = false; formErr += ' Cardholder Name;'; }
			if (form.cardnum.value == '') { formGood = false; formErr += ' Card Number;'; }
			if (form.expiry.value == '') { formGood = false; formErr += ' Expiration Date;'; }
			if (form.security.value == '') { formGood = false; formErr += ' Security Code;'; }
			if (form.amount.value == '') { formGood = false; formErr += ' Ticket Quantity;'; }
			if (formGood) { document.location = 'review.html?quantity=' + form.amount.value; }
			else { document.getElementById('errForm').innerHTML = formErr; }
			break;
	}
}