const mainContainer = document.getElementById("main-container");
const historyContainer = document.getElementById("history-container");
const footerContainer = document.getElementById("footer");

const donateShowBtn = document.getElementById("donate-show-btn")
const historyShowBtn = document.getElementById("history-show-btn")
const blogBtn = document.getElementById("blog-btn")

// Location change
blogBtn.addEventListener("click", function(){
    window.location.href = "blog.html";
})

// Document functionality
const sectionDonateBtnAll = document.querySelectorAll(".section-donate-btn")
for(const btn of sectionDonateBtnAll){
    btn.addEventListener("click", function(){
        let input = btn.parentNode.previousElementSibling.children[0].value
        let inputNumber = Number(input);
        let sectionMoney = btn.parentNode.parentNode.children[0].children[1].firstChild.innerText;
        let sectionMoneyNumber = parseFloat(sectionMoney)
        let sectionMoneyTag = btn.parentNode.parentNode.children[0].children[1].firstChild;
        let title = btn.parentNode.previousElementSibling.previousElementSibling.children[0].innerText

        if(isNaN(inputNumber)  || inputNumber <= 0){
            alert("Donation is invalid amount")
            return;
        }
        const total = sectionMoneyNumber + inputNumber;
        sectionMoneyTag.innerText = total;

        const mainAccountBalance = getTextValueById("main-account-balance");
        const availableBalance = mainAccountBalance - inputNumber;

        if(inputNumber > mainAccountBalance){
            alert("Do Not have Money")
            return;
        }

        my_modal_1.showModal()

        document.getElementById("main-account-balance").innerText = availableBalance;

        const div = document.createElement("div")
        div.classList.add("border", "rounded-lg", "p-6", "my-4")
        div.innerHTML = `
            <h4 class="text-xl font-semibold mb-4">${inputNumber} Taka is ${title}</h4>
            <p class="text-gray-500">Date: ${new Date()}</p>
        `
        historyContainer.appendChild(div)
    })
}

historyShowBtn.addEventListener("click", function(){
    historyShowBtn.classList.remove("bg-transparent","text-gray-500")
    historyShowBtn.classList.add("bg-lime-400")
    donateShowBtn.classList.add("bg-transparent")

    mainContainer.classList.add("hidden")
    historyContainer.classList.remove("hidden")
    footerContainer.classList.add("absolute", "bottom-0")
})

donateShowBtn.addEventListener("click",function(){
    donateShowBtn.classList.remove("bg-transparent")
    donateShowBtn.classList.add("bg-lime-400")
    historyShowBtn.classList.add("bg-transparent","text-gray-500")

    historyContainer.classList.add("hidden")
    mainContainer.classList.remove("hidden")
    footerContainer.classList.remove("absolute", "bottom-0")

})

//* getTextValueById
function getTextValueById(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance)
    return balanceNumber;
}