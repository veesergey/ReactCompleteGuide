// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalInterest = 0;
  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInterest += interestEarnedInYear;
    annualData.push({
      year: i + 1, // year identifier
      interest: formatter.format(interestEarnedInYear, 1000), // the amount of interest earned in this year
      valueEndOfYear: formatter.format(investmentValue, 1000), // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      investedCapital: formatter.format(initialInvestment + annualInvestment * (i + 1)), // total invested capital at end of year     
      totalInterest: formatter.format(totalInterest, 1000), // total interest earned at end of year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
