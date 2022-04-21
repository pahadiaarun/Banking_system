function sendMoney(){
    var enterName1 = document.getElementById("enterName1").value;
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
    let SenderAccountBalance = parseInt(document.getElementById(enterName1+"BankBalance").innerText);
    if (enterAmount > 10000 ) {
 
       alert("Enter Amount exceed the Anount limit(₹10000).")
    } 
    else if(enterAmount >  parseInt(document.getElementById(enterName1+"BankBalance").innerText) ){
       alert(`Bank Balance in ${enterName1}'s account is ₹${parseInt(document.getElementById(enterName1+"BankBalance").innerText)}.Insufficient Balance`)
    }
    else {
       var paymentAmount =enterAmount;
       var findUserBankAccount = enterName + "BankBalance";
       var findUserPayment = enterName +"Payment";
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(enterName1+"BankBalance").innerText) - enterAmount;
       var PaymentAmount = parseInt(document.getElementById(findUserPayment).innerHTML) + paymentAmount;
       document.getElementById(enterName1+"BankBalance").innerText = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       document.getElementById(findUserPayment).innerHTML = PaymentAmount;
       alert(`Successful Transaction !!  
       ₹${enterAmount} is sent to ${enterName}@gmail.com by ${enterName1}@gmail.com`)
 
       // transaction history 
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(` ₹${enterAmount} is sent to recipient with Email-id ${enterName}@gmail.com on ${Date()} by ${enterName1}@gmail.com.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
 }