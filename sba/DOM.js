const form = document.getElementById('donation-from')
const charitySelect = document.getElementById('charity')
const amountInput = document.getElementById('amout')
const summaryList = document.getElementById('donation-summary')
const clearBtn = document.getElementById('ckear-btn')

let donation = localStorage.getItem('donation') || ''

function updateSummary() {
    summaryList.innerHTML = ''
    for (let[charity,amount] of Object.entries(donation)){
        const li = document.create[e]
        li.textContent = `${charity}: ${amount}`
        summaryList.appendChild(li)
    }
}

form.addEventListener('submit',function (e) {
    e.preventDefault()
    const charity = charitySelect.value
    const amount = parseFloat( amountInput.value)
    
})