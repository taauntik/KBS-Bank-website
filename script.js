// login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("transaction-area").style.display = "block";
});

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const deposit = document.getElementById("deposit-amount").value;
  const depositNumber = parseFloat(deposit);

  const currentDeposit = document.getElementById("currentDeposit").innerText;
  const currentDepositNumber = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositNumber;
  // console.log(totalDeposit);

  document.getElementById("currentDeposit").innerText = totalDeposit;

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = depositNumber + currentBalanceNumber;
  // console.log(totalBalance);

  document.getElementById("currentBalance").innerText = totalBalance;
});

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function () {
  const withdraw = document.getElementById("withdraw-amount").value;
  const withdrawNumber = parseFloat(withdraw);
  const currentWithdraw = document.getElementById("currentWithdraw").innerText;
  const currentWithdrawNumber = parseFloat(currentWithdraw);
  const totalWithdraw = withdrawNumber + currentWithdrawNumber;
  document.getElementById("currentWithdraw").innerText = totalWithdraw;

  const currentBalance = document.getElementById("currentBalance").innerText;
  const currentBalanceNumber = parseFloat(currentBalance);
  const totalBalance = currentBalanceNumber - withdrawNumber;
  document.getElementById("currentBalance").innerText = totalBalance;

  // console.log(currentWithdraw);
});
