const donateShowBtn = document.getElementById("donate-show-btn")
const historyShowBtn = document.getElementById("history-show-btn")

const sectionDonateBtnAll = document.querySelectorAll(".section-donate-btn")
for(const btn of sectionDonateBtnAll){
    btn.addEventListener("click", function(){
        let input = btn.parentNode.previousElementSibling.children[0].value
        let inputNumber = parseFloat(input);
        let sectionMoney = btn.parentNode.parentNode.children[0].children[1].firstChild.innerText;
        let sectionMoneyNumber = parseFloat(sectionMoney)
        let sectionMoneyTag = btn.parentNode.parentNode.children[0].children[1].firstChild

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
    })
}


//* getTextValueById
function getTextValueById(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance)
    return balanceNumber;
}