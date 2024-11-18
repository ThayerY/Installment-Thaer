// Add an event listener for the button
document.getElementById("calculate-button").addEventListener("click", function () {
  // Get user inputs
  const totalAmount = parseFloat(document.getElementById("total-amount").value) || 0;
  const monthlyInstallment = parseFloat(document.getElementById("monthly-installment").value) || 0;
  const taxPercentage = parseFloat(document.getElementById("tax-percentage").value) || 0; // New input
  const startDateValue = document.getElementById("start-date").value;

  // Parse the start date using Moment.js
  const startDate = moment(startDateValue);

  // Validate inputs
  if (!startDateValue || monthlyInstallment <= 0 || totalAmount <= 0 || taxPercentage < 0) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Calculate tax and updated total amount
  const taxAmount = (totalAmount * taxPercentage) / 100;
  const netTotalAmount = totalAmount + taxAmount; // Net total calculation

  // Get the current date using Moment.js
  const currentDate = moment();

  // Calculate months passed using Moment.js
  const monthsPassed = currentDate.diff(startDate, 'months');

  // Calculate the total paid so far
  const totalPaid = monthsPassed * monthlyInstallment;

  // Calculate the remaining amount and months
  const remainingAmount = netTotalAmount - totalPaid;
  const remainingMonths = Math.ceil(remainingAmount / monthlyInstallment);

  // Helper function to format numbers with commas
  function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
  }

  // Update the DOM with results using formatted numbers
  document.getElementById("paid-months").textContent = monthsPassed > 0 ? monthsPassed : 0;
  document.getElementById("remaining-months").textContent = remainingMonths > 0 ? remainingMonths : 0;
  document.getElementById("total-paid").textContent = `IQD ${formatNumber(totalPaid)}`;
  document.getElementById("remaining-amount").textContent = `IQD ${formatNumber(remainingAmount > 0 ? remainingAmount : 0)}`;
  document.getElementById("net-total-amount").textContent = `IQD ${formatNumber(netTotalAmount)}`; // Update Net Total Amount
});







