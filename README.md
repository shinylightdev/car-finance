# Calculate Car Financing Terms


Tailored specifically to a NY state resident, but can be customized. Applies when purching a new car. If not familiar with financing in NY, refer to the following:


- [How to estimate registration fees and taxes](https://dmv.ny.gov/registration/how-estimate-registration-fees-and-taxes)

- [Let the Buyer Be Aware](https://dmv.ny.gov/brochure/let-buyer-be-aware)


### Finance Terms
- [Principal Balance](https://www.investopedia.com/terms/p/principal.asp)
- [Amortization](https://www.consumerfinance.gov/ask-cfpb/what-is-amortization-and-how-could-it-affect-my-auto-loan-en-771/)



## Calculation
Basically, provided you set:

```javascript
f.MSRP         = 33125; // MSRP
f.downPayment  = 4000;  // Down Payment - Dealers typically want < 50%
f.monthsToPay  = 48;    // Terms of Finance
f.APR          = 0.9;   // APR
````

## Result

```text
MSRP =====================> $33,125.00

Total With Tax ===========> $36,127.25
Loan Amount ==============> $32,127.25
Down Payment =============> $4,000.00
Months To Pay ============> 48 months
APR ======================> 0.9%

Monthly Payment ==========> $681.69 (approx; w/o amortization)
Due at Signing ===========> $4,681.69
Total After All Paid =====> $36,721.06
```

## Helpful Online Tools

- [Auto Loan Amortization Calculator](https://www.arborfcu.org/Borrow/Loans/Vehicle-Loans/New-Used-Auto-Loans/Amortization-Calculator)
- [Auto Loan Calculator](https://www.amortization-calc.com/auto-car-loan-calculator/)