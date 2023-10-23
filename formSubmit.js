function submitForm(name, form) {
	let err = '';
	let fields = [];
	switch (name) {
	case 'contactInfo':
		fields = [
			[ 'firstName', 'First Name' ],
			[ 'lastName', 'Last Name' ],
			[ 'email', 'Email Address' ],
			[ 'phone', 'Phone Number' ],
		];
		fields.forEach((item) => { if (!form[item[0]].value) { err += ' ' + item[1] + ';'; } });
		if (err) { return document.getElementById('errForm').innerHTML = 'All fields must be filled. Please check:' + err; }
		document.location = 'payment.html?name=' + form.firstName.value + '%20' + form.lastName.value;
		break;
	
	case 'payment':
		fields = [
			[ 'cardholder', 'Cardholder Name' ],
			[ 'cardnum', 'Card Number' ],
			[ 'expiry', 'Expiration Date' ],
			[ 'security', 'Security Code' ],
		];
		fields.forEach((item) => { if (!form[item[0]].value) { err += ' ' + item[1] + ';'; } });
		if (!form.standard.value && !form.premium.value) { err += ' Ticket Quantity;'; }
		if (err) { return document.getElementById('errForm').innerHTML = 'All fields must be filled. Please check:' + err; }
		document.location = 'review.html?standard=' + (form.standard.value ? form.standard.value : 0) + '&premium=' + (form.premium.value ? form.premium.value : 0);
		break;
	
	case 'newsletter':
		fields = [
			[ 'firstName', 'First Name' ],
			[ 'lastName', 'Last Name' ],
			[ 'email', 'Email Address' ],
		];
		fields.forEach((item) => { if (!form[item[0]].value) { err += ' ' + item[1] + ';'; } });
		if (err) { return document.getElementById('errForm').innerHTML = 'All fields must be filled. Please check:' + err; }
		alert('ERROR: Sign-ups are currently closed!\nYou will be redirected to the home page.');
		document.location = 'index.html';
	}
}