// document.getElementById("calculate-button").addEventListener("click", function () {
//   const totalAmount = parseFloat(document.getElementById("total-amount").value) || 0;
//   const monthlyInstallment = parseFloat(document.getElementById("monthly-installment").value) || 0;
//   const startDateValue = document.getElementById("start-date").value;
//   const startDate = new Date(startDateValue);

//   if (!startDateValue || monthlyInstallment <= 0 || totalAmount <= 0) {
//     alert("Please fill out all fields correctly.");
//     return;
//   }

//   const currentDate = new Date();
//   const monthsPassed = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24 * 30));
//   const totalPaid = monthsPassed * monthlyInstallment;
//   const remainingAmount = totalAmount - totalPaid;
//   const remainingMonths = Math.ceil(remainingAmount / monthlyInstallment);

//   document.getElementById("paid-months").textContent = monthsPassed > 0 ? monthsPassed : 0;
//   document.getElementById("remaining-months").textContent = remainingMonths > 0 ? remainingMonths : 0;
//   document.getElementById("total-paid").textContent = `IQD ${totalPaid.toFixed()}`;
//   document.getElementById("remaining-amount").textContent = `IQD ${remainingAmount.toFixed()}`;
// });



//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------


// import moment from './libs/moment.min.js';



// Add an event listener for the button
document.getElementById("calculate-button").addEventListener("click", function () {
  // Get user inputs
  const totalAmount = parseFloat(document.getElementById("total-amount").value) || 0;
  const monthlyInstallment = parseFloat(document.getElementById("monthly-installment").value) || 0;
  const startDateValue = document.getElementById("start-date").value;

  // Parse the start date using Moment.js
  const startDate = moment(startDateValue);

  // Validate inputs
  if (!startDateValue || monthlyInstallment <= 0 || totalAmount <= 0) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Get the current date using Moment.js
  const currentDate = moment();

  // Calculate months passed using Moment.js
  const monthsPassed = currentDate.diff(startDate, 'months');

  // Calculate the total paid so far
  const totalPaid = monthsPassed * monthlyInstallment;

  // Calculate the remaining amount and months
  const remainingAmount = totalAmount - totalPaid;
  const remainingMonths = Math.ceil(remainingAmount / monthlyInstallment);

  // Update the DOM with results
  document.getElementById("paid-months").textContent = monthsPassed > 0 ? monthsPassed : 0;
  document.getElementById("remaining-months").textContent = remainingMonths > 0 ? remainingMonths : 0;
  document.getElementById("total-paid").textContent = `IQD ${totalPaid.toFixed()}`;
  document.getElementById("remaining-amount").textContent = `IQD ${remainingAmount.toFixed()}`;
});




