const emailInput = document.getElementById('email');
const btn = document.getElementById('btn');
const warrning = document.getElementById('warrning');
const emaValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function valid() {
	if (email.value.match(emaValid)) {
		alert('please provide a valid email address');
	} else {
	}
}

btn.addEventListener('click', () => {
	valid();
});
