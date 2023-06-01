document.addEventListener('DOMContentLoaded', () => {
  const formName = document.getElementById('form-name');
  const leftSide = document.getElementById('left');
  const thankyouContainer = document.getElementById('thank-you-container');
  const confirmBtn = document.getElementById('confirm');
  const continueBtn = document.getElementById('continue');
  const numberInput = document.getElementById('number');
  const monthInput = document.getElementById('month');
  const yearInput = document.getElementById('year');
  const cvcInput = document.getElementById('cvc');
  const cardPinNo = document.getElementById('card-pin-no');
  const cardName = document.getElementById('card-name');
  const cardExpDate = document.getElementById('card-exp-date');

  function updateCardDetails() {
    const cardNumber = numberInput.value.replace(/\s/g, ''); // Remove any existing whitespace in the card number
    const formattedCardNumber = cardNumber.replace(/(\d{4})(?=\d)/g, '$1 '); // Add a space after every 4 digits

    cardPinNo.textContent = formattedCardNumber;
    cardName.textContent = formName.querySelector('.name').value;
    cardExpDate.textContent = `${monthInput.value}/${yearInput.value}`;
  }

  confirmBtn.addEventListener('click', () => {
    updateCardDetails();

    leftSide.style.display = 'none';
    thankyouContainer.style.display = 'block';
  });

  continueBtn.addEventListener('click', () => {
    leftSide.style.display = 'block';
    thankyouContainer.style.display = 'none';
  });
});
