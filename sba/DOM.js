const form = document.getElementById('donation-form')
const charitySelect = document.getElementById('charity')
const amountInput = document.getElementById('amount')
const donation = document.querySelector('#donation-summary')
const clearBtn = document.getElementById('clear-btn')


form.addEventListener('submit',function (e) {
    e.preventDefault()
    const charity = charitySelect.value
    const amount = parseFloat( amountInput.value)
    let li = document.createElement("li")
    li.textContent = "$ "+amount
    li.classList.add("donation-item")
    donation.appendChild(li)
    
    if (! charity || isNaN(amount) || amount <= 0){
        alert("please enter a valid charity and donation amount")
        return;
    }
    
alert(`Thank you for donating $${amount.toFixed(2)} to ${charity}!`)
form.reset ()
})
clearBtn.addEventListener('click', function () {
    if (confirm("Are you sure you want to clear all donations?")) {
        donation = {}
        donation.length = 0
        
    }
});






