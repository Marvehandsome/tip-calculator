// var tip = document.getElementById("tipAmount").value;

// if (tip.clicked == true) {
//     alert("button was clicked");
// }

//Calculate tip
// var x = document.getElementById("tipAmount").value;
// var tips = document.querySelectorAll('input[name="tip"]');
// console.log(tip);
// console.log(tip[0]);


function calculateTip() {
    var billAmount = document.getElementById("bill").value;
    var numOfPeople = document.getElementById("numOfPeople").value;
    var tips = document.querySelectorAll('input[name="tip"]');
    let tipAmount = 0;
    for (i = 0; i < tips.length; i++) {
        if (tips[i].checked === true) {
            tipAmount = tips[i].value;
        }
        console.log(tipAmount);
    }

    // y = x.split('%');

    // y[0];

    // var tip = +y[0];


    //validate input
    if (billAmount === "" || tipAmount == 0) {
        alert("Please enter values");
        return;
    }
    //Check to see if this input is empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople < 1) {
        numOfPeople = 0;
        alert("Please enter Number of People");
        return;
    }
    //convert tip to percentage
    var tipPercent = tipAmount / 100;

    //string to int
    var billAmountInt = +billAmount;
    var tipPercentInt = +tipPercent;

    // var tipAmount = tip;
    var tipPerPerson = (billAmountInt * tipPercentInt) / numOfPeople;
    var totalBill = (tipPerPerson * numOfPeople) + billAmountInt
        // var totalBill = billAmountInt + totalTip;


    //round to two decimal places
    tipPerPerson = Math.round(tipPerPerson * 100) / 100;
    totalBill = Math.round(totalBill * 100) / 100;



    document.getElementById("tipFig").innerHTML = tipPerPerson;
    document.getElementById("tipAmount").innerHTML = totalBill;

}

//click to call function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};