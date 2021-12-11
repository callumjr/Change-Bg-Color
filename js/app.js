//what to add:
//add a table row with contense "nothing added yet"

const nameInput = document.querySelector('.name-input');
const dateInput = document.querySelector('.date-input');
const ammountInput = document.querySelector('.ammount-input');
const addBtn = document.querySelector('.expense-button');
const fillMoreHeading = document.querySelector('.fill-input');

const addToTable = () => {
	const tbl = document.querySelector('.table');
	if (nameInput.value && dateInput.value && ammountInput.value) {
		const row = tbl.insertRow(-1);
		nameInput.value ? (cell1 = row.insertCell(0)) : '';
		cell1.innerHTML = nameInput.value;
		dateInput.value ? (cell2 = row.insertCell(1)) : '';
		cell2.innerHTML = dateInput.value;
		ammountInput.value ? (cell3 = row.insertCell(2)) : '';
		cell3.innerHTML = ammountInput.value;
		cell4 = row.insertCell(3);
		const cancelBtn = document.createElement('button');
		cancelBtn.textContent = 'X';
		nameInput.value = '';
		dateInput.value = '';
		ammountInput.value = '';
		cell4.appendChild(cancelBtn);
		cancelBtn.addEventListener('click', () => {
			cancelBtn.closest('tr').remove();
		});
	}
};

addBtn.addEventListener('click', () => {
	if (!nameInput.value || !dateInput.value || !ammountInput.value) {
		fillMoreHeading.classList.remove('white');
		fillMoreHeading.classList.add('red');
	} else {
		fillMoreHeading.classList.remove('red');
		fillMoreHeading.classList.add('white');

		addToTable();
	}
});
