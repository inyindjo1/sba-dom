const form = document.getElementById('donation-form');           
const charitySelect = document.getElementById('charity');       
const amountInput = document.getElementById('amount');            
const donationList = document.querySelector('#donation-summary'); 
const clearBtn = document.getElementById('clear-btn');            


amountInput.addEventListener('input', () => {
  if (amountInput.validity.valid && amountInput.value > 0) {
    amountInput.style.borderColor = 'green';     
  } else {
    amountInput.style.borderColor = 'red';
  }
});

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const charity = charitySelect.value;
  const amount = parseFloat(amountInput.value);

  if (!charity || isNaN(amount) || amount <= 0) {
    alert('Please enter a valid charity and donation amount.'); 
    return;
  }


  const newLi = document.createElement('li');
  newLi.classList.add('donation-item', 'highlight');
  newLi.textContent = `Donated $${amount.toFixed(2)} to ${charity}`;
  newLi.setAttribute('data-amount', amount.toFixed(2));

  
  donationList.appendChild(newLi);

  alert(`Thank you for donating $${amount.toFixed(2)} to ${charity}!`); 

  form.reset();
  amountInput.style.borderColor = '';
});


clearBtn.addEventListener('click', function() {
  if (confirm('Are you sure you want to clear all donations?')) {
    const items = donationList.children;
    for (let i = 0; i < items.length; i++) {
      items[i].style.color = 'red';  
    }

    console.log('Donation List Parent:', donationList.parentNode);
    console.log('First child of body:', document.body.firstChild);
    console.log('Next sibling of donation list:', donationList.nextElementSibling);

    setTimeout(() => {
      donationList.textContent = '';
    }, 100);
  }
});










