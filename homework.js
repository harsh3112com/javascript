let number = 0;


const numberDisplay = document.getElementById('numberDisplay');
const decrementButton = document.getElementById('decrementButton');
const incrementButton = document.getElementById('incrementButton');

function updateDisplay() {
  numberDisplay.textContent = number;
}

decrementButton.addEventListener('click', () => {
  number--;
  updateDisplay();
});

incrementButton.addEventListener('click', () => {
  number++;
  updateDisplay();
});



