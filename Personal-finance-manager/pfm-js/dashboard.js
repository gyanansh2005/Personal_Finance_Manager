// when entering the website taking name input;
const userName = document.getElementById("userName");
const nameboxEl = document.querySelector(".enterName");
const btnEnter = document.querySelector(".enterWeb");
const nameInputEl = document.getElementById("nameofUser");
const overlayEl = document.querySelector(".overlay");
const closeNameWindow = document.getElementById("close");
let myName = "";
function close(){
    nameboxEl.classList.add("hidden");
    overlayEl.classList.add("hidden");
}
closeNameWindow.addEventListener("click",close)
btnEnter.addEventListener("click",function(){
    myName = nameInputEl.value;
    userName.textContent = myName;
    close();
})


// Send to Vault functionality;
const sendToVaultEl = document.getElementById("sendToVault");
const vaultWindow = document.getElementById("sendVault");
const closeVaultWindow = document.getElementById("closeVault");
let currentAmount = 0;
let tempAmount = 0;
const amountEl = document.querySelector(".current--save");
const addAmountEl = document.getElementById("depositAmount");
const withdrawAmountEl = document.getElementById("withdrawAmount");
const btnWithdraw = document.getElementById("withdrawbtn");
const btnsend = document.getElementById("sendbtn");
sendToVaultEl.addEventListener("click",function(){
    vaultWindow.classList.remove("hidden");
    overlayEl.classList.remove("hidden");
})
closeVaultWindow.addEventListener("click",function(){
    vaultWindow.classList.add("hidden");
    overlayEl.classList.add("hidden");
})
btnsend.addEventListener("click",function(){
    tempAmount = addAmountEl.value;
    currentAmount = currentAmount + Number(tempAmount) 
    amountEl.textContent = currentAmount;
    tempAmount = 0;
})
btnWithdraw.addEventListener("click",function(){
    tempAmount = withdrawAmountEl.value;
    if (currentAmount - Number(tempAmount)>0){
        currentAmount = currentAmount - Number(tempAmount); 
        document.getElementById("tipMessage").textContent = "Keep making small deposits regularly to make big savings in longer term.";
        document.getElementById("tipMessage").style.backgroundColor = "rgb(250, 238, 167)";
        document.getElementById("tipMessage").style.color = "black";
    }else{
        document.getElementById("tipMessage").textContent = "Not enough money in vault to withdraw!";
        document.getElementById("tipMessage").classList.add("invalidWithdrawal");
        document.getElementById("tipMessage").style.backgroundColor = "orangered";
        document.getElementById("tipMessage").style.color = "white";
    }
    amountEl.textContent = currentAmount;
    tempAmount = 0;
})



