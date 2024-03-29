import inquirer from "inquirer";
let myBalance = 10000; //Dollers
let myPin = 1122;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin:",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select a option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "withdrawAmount",
            message: "enter your amount",
            type: "number",
        });
        if (amountAns.withdrawAmount <= myBalance) {
            myBalance -= amountAns.withdrawAmount;
            console.log(`your remaining amount is: ${myBalance}`);
        }
        else {
            console.log("InSufficient Balance");
        }
    }
    if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt({
            name: "selectAmount",
            message: "please choose a ammount",
            type: "list",
            choices: ["1000", "5000", "10000", "20000"],
        });
        if (fastCash.selectAmount <= myBalance) {
            myBalance -= fastCash.selectAmount;
            console.log(`your remaining amount is: ${myBalance}`);
        }
        else {
            console.log("InSufficient Balance");
        }
    }
}
else {
    console.log("Invelid Pin Code");
}
