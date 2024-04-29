let wrapper = document.querySelector('#rate-wrapper')
let rateText = document.querySelector('#submitted-rate')
let submitBtn = document.querySelector('#submit-rate')

submitBtn.addEventListener("click", ()=>{
    let selectedRate = document.querySelector('input[name="rate"]:checked')
    wrapper.dataset.visible = "thanks"

    rateText.innerHTML = `You selected ${selectedRate.id} out of 5`
})




