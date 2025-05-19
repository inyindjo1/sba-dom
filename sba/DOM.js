const form = document.getElementById('donation-form')
const charitySelect = document.getElementById('charity')
const amountInput = document.getElementById('amount')
const summaryList = document.querySelector('donation-summary')
const clearBtn = document.getElementById('ckear-btn')

let donation = localStorage.getItem('donation') || ''

function updateSummary() {
    summaryList.innerHTML = ''
    for (let[charity,amount] of Object.entries(donation)){
        const li = document.create[e]
        li.textContent = `${charity}: ${amount}`
        summaryList.appendChild(li)
        console.log("First child text:", summaryList.firstChild.textContent)
    }
}

form.addEventListener('submit',function (e) {
    e.preventDefault()
    const charity = charitySelect.value
    const amount = parseFloat( amountInput.value)
    let li = document.createElement("li")
    li.textContent = amount
    summaryList.appendChild(li)
    if (! charity || isNaN(amount) || amount <= 0){
        alert("please enter a valid charity and donation amount")
        return;
    }
    // donations 
    let donations = document.createElement("donations")
    donations.textContent = amount;
    (donation[charity] || 0) + amount;
localStorage.setItem('donations', JSON.stringity(donations))

// amount code part 
alert(`Thank you for donating $${amount} to ${charity}!`)
updateSummary()
form.rest ()
})


