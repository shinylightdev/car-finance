let formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

// Finance Object
let f = {};


// ==========================================================================
// CUSTOMIZE
// ==========================================================================
f.MSRP         = 33125; // MSRP
f.downPayment  = 4000;  // Down Payment - Dealers typicall want < 50%
f.monthsToPay  = 48;    // Terms of Finance
f.APR          = .9;   // APR
// ==========================================================================


// ==========================================================================
// NY STATE SPECIFIC Fees
// ==========================================================================
f.taxRate         = 0.0852;
f.taxAmount       = (f.MSRP * f.taxRate);
f.titleFee        = 55.00
f.registrationFee = 50.00;
f.docFee          = 75.00; // $75 limit in NY
f.stateFees       = f.taxAmount + f.titleFee + f.registrationFee + f.docFee;


// ==========================================================================
// FINANCING
// ==========================================================================

// MSRP with state fees AFTER down payment put down.
f.totalWithTax = (f.MSRP + f.stateFees);
f.loanAmount  = f.totalWithTax - f.downPayment;

// Actual months to pay - since dealer requires 1st payment 
// month up front.
f.actualMonthsToPayAfter  = f.monthsToPay - 1; 

f.monthlyPay     = f.loanAmount * (f.APR / (12 * 100)) / (1 - (Math.pow(1 / (1 + (f.APR / (12 * 100))), f.monthsToPay)));
f.dueAtSigning   = f.downPayment + f.monthlyPay;

// The grand total you'll have paid in its entirety.
f.totalAfterPaid = f.dueAtSigning + (f.monthlyPay * f.actualMonthsToPayAfter);



// Show it.
let template = 
`
MSRP =====================> ${formatter.format(f.MSRP)}

Total With Tax ===========> ${formatter.format(f.totalWithTax)}
Loan Amount ==============> ${formatter.format(f.loanAmount)}
Down Payment =============> ${formatter.format(f.downPayment)}
Months To Pay ============> ${f.monthsToPay} months
APR ======================> ${f.APR}%

Monthly Payment ==========> ${formatter.format(f.monthlyPay)}
Due at Signing ===========> ${formatter.format(f.dueAtSigning)}
Total After All Paid =====> ${formatter.format(f.totalAfterPaid)}
`;

console.log(template);
