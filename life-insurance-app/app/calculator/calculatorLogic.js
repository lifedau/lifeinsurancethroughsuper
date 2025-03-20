// Calculator logic for LifeInsuranceThroughSuper.com.au
// This file contains the core logic for the underinsurance calculator

// Constants for calculation
const INCOME_REPLACEMENT_YEARS = {
  single: 5,
  married_no_children: 7,
  married_with_children: 10,
  single_parent: 10
};

const INCOME_REPLACEMENT_PERCENTAGE = 0.75; // 75% of income
const EDUCATION_COST_PER_CHILD = {
  public: 75000, // Average cost for public education through university
  private: 200000 // Average cost for private education through university
};
const FUNERAL_EXPENSES = 15000; // Average funeral cost in Australia

/**
 * Calculate the recommended life insurance coverage amount
 * @param {Object} inputs - User inputs from the calculator form
 * @returns {Object} - Calculation results including recommended amount and breakdown
 */
export function calculateCoverageNeeds(inputs) {
  // Extract inputs
  const {
    age,
    familyStatus,
    annualIncome,
    partnerIncome,
    mortgageBalance,
    otherDebts,
    numberOfChildren,
    educationType,
    currentSavings,
    currentSuperBalance,
    currentLifeInsurance,
    retirementAge
  } = inputs;

  // Calculate income replacement needs
  const yearsToReplace = INCOME_REPLACEMENT_YEARS[familyStatus] || 7;
  const incomeToReplace = annualIncome * INCOME_REPLACEMENT_PERCENTAGE;
  const incomeReplacementNeeds = incomeToReplace * yearsToReplace;

  // Calculate debt clearance needs
  const debtClearanceNeeds = mortgageBalance + otherDebts;

  // Calculate education fund needs
  const educationCost = EDUCATION_COST_PER_CHILD[educationType] || EDUCATION_COST_PER_CHILD.public;
  const educationNeeds = numberOfChildren * educationCost;

  // Calculate final expenses
  const finalExpenses = FUNERAL_EXPENSES;

  // Calculate total needs
  const totalNeeds = incomeReplacementNeeds + debtClearanceNeeds + educationNeeds + finalExpenses;

  // Calculate existing resources
  const existingResources = currentSavings + currentSuperBalance + currentLifeInsurance;

  // Calculate recommended coverage
  const recommendedCoverage = Math.max(0, totalNeeds - existingResources);

  // Calculate coverage gap if user has existing life insurance
  const coverageGap = Math.max(0, recommendedCoverage - currentLifeInsurance);
  const coverageGapPercentage = currentLifeInsurance > 0 
    ? (coverageGap / recommendedCoverage) * 100 
    : 100;

  // Determine risk level based on coverage gap percentage
  let riskLevel = "Low";
  if (coverageGapPercentage > 75) {
    riskLevel = "Severe";
  } else if (coverageGapPercentage > 50) {
    riskLevel = "High";
  } else if (coverageGapPercentage > 25) {
    riskLevel = "Moderate";
  }

  // Return calculation results
  return {
    recommendedCoverage,
    coverageGap,
    coverageGapPercentage,
    riskLevel,
    breakdown: {
      incomeReplacementNeeds,
      debtClearanceNeeds,
      educationNeeds,
      finalExpenses,
      totalNeeds,
      existingResources
    }
  };
}

/**
 * Calculate premium estimates for different policy types
 * @param {Object} inputs - User inputs including age, coverage amount, etc.
 * @returns {Object} - Premium estimates for different policy types
 */
export function calculatePremiumEstimates(inputs) {
  const { age, gender, smoker, coverageAmount, occupation } = inputs;
  
  // Base premium rates per $1000 of coverage (simplified model)
  const baseRates = {
    male: {
      30: 0.60, 35: 0.70, 40: 0.95, 45: 1.40, 
      50: 2.10, 55: 3.20, 60: 5.10, 65: 8.40
    },
    female: {
      30: 0.50, 35: 0.60, 40: 0.80, 45: 1.20, 
      50: 1.80, 55: 2.70, 60: 4.30, 65: 7.10
    }
  };
  
  // Find closest age bracket
  const ageKeys = Object.keys(baseRates[gender]).map(Number);
  const closestAge = ageKeys.reduce((prev, curr) => 
    Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev
  );
  
  // Get base rate
  let baseRate = baseRates[gender][closestAge];
  
  // Apply smoker loading if applicable
  if (smoker) {
    baseRate *= 1.9; // 90% loading for smokers
  }
  
  // Apply occupation loading
  const occupationLoadings = {
    office: 1.0,
    light_manual: 1.3,
    manual: 1.6,
    heavy_manual: 2.0,
    hazardous: 2.5
  };
  
  baseRate *= occupationLoadings[occupation] || 1.0;
  
  // Calculate annual premiums
  const coverageInThousands = coverageAmount / 1000;
  
  // Calculate super insurance premium (stepped only)
  const superPremium = baseRate * coverageInThousands;
  
  // Calculate retail stepped premium (slightly higher base rate but better coverage)
  const retailSteppedPremium = baseRate * 1.15 * coverageInThousands;
  
  // Calculate retail level premium
  // Level premiums start higher but remain more stable
  const retailLevelPremium = baseRate * 2.5 * coverageInThousands;
  
  // Calculate premium projections for next 30 years
  const projections = calculatePremiumProjections(age, baseRate, coverageInThousands);
  
  return {
    current: {
      superPremium: Math.round(superPremium),
      retailSteppedPremium: Math.round(retailSteppedPremium),
      retailLevelPremium: Math.round(retailLevelPremium)
    },
    projections
  };
}

/**
 * Calculate premium projections for the next 30 years
 * @param {number} startAge - Starting age
 * @param {number} baseRate - Base premium rate
 * @param {number} coverageInThousands - Coverage amount in thousands
 * @returns {Object} - Premium projections for different policy types
 */
function calculatePremiumProjections(startAge, baseRate, coverageInThousands) {
  const projections = {
    ages: [],
    superPremiums: [],
    retailSteppedPremiums: [],
    retailLevelPremiums: [],
    cumulativeSuperPremiums: [],
    cumulativeRetailSteppedPremiums: [],
    cumulativeRetailLevelPremiums: []
  };
  
  let cumulativeSuper = 0;
  let cumulativeRetailStepped = 0;
  let cumulativeRetailLevel = 0;
  
  // Project premiums for 30 years or until age 65, whichever comes first
  const yearsToProject = Math.min(30, 65 - startAge);
  
  for (let i = 0; i < yearsToProject; i++) {
    const currentAge = startAge + i;
    projections.ages.push(currentAge);
    
    // Super premiums increase by approximately 15% per year
    const superPremium = baseRate * Math.pow(1.15, i) * coverageInThousands;
    projections.superPremiums.push(Math.round(superPremium));
    
    // Retail stepped premiums increase by approximately 12% per year
    const retailSteppedPremium = baseRate * 1.15 * Math.pow(1.12, i) * coverageInThousands;
    projections.retailSteppedPremiums.push(Math.round(retailSteppedPremium));
    
    // Retail level premiums increase by approximately 3% per year (inflation adjustment)
    const retailLevelPremium = baseRate * 2.5 * Math.pow(1.03, i) * coverageInThousands;
    projections.retailLevelPremiums.push(Math.round(retailLevelPremium));
    
    // Calculate cumulative premiums
    cumulativeSuper += superPremium;
    cumulativeRetailStepped += retailSteppedPremium;
    cumulativeRetailLevel += retailLevelPremium;
    
    projections.cumulativeSuperPremiums.push(Math.round(cumulativeSuper));
    projections.cumulativeRetailSteppedPremiums.push(Math.round(cumulativeRetailStepped));
    projections.cumulativeRetailLevelPremiums.push(Math.round(cumulativeRetailLevel));
  }
  
  return projections;
}

/**
 * Calculate tax implications for different beneficiary types
 * @param {Object} inputs - User inputs including policy amount, beneficiary type, etc.
 * @returns {Object} - Tax calculations for different policy types
 */
export function calculateTaxImplications(inputs) {
  const { policyAmount, taxableComponent, beneficiaryType } = inputs;
  
  // Tax rates for non-dependent beneficiaries
  const taxRates = {
    taxed_element: 0.15, // 15% tax on taxed element
    untaxed_element: 0.30, // 30% tax on untaxed element
    medicare_levy: 0.02 // 2% Medicare levy
  };
  
  // Calculate taxable amount
  const taxableAmount = policyAmount * (taxableComponent / 100);
  const untaxedAmount = policyAmount - taxableAmount;
  
  // Calculate tax for super insurance
  let superTax = 0;
  if (beneficiaryType === 'non_dependent') {
    // Apply tax to taxable component
    const taxOnTaxableComponent = taxableAmount * (taxRates.taxed_element + taxRates.medicare_levy);
    superTax = taxOnTaxableComponent;
  }
  
  // Retail insurance is always tax-free
  const retailTax = 0;
  
  // Calculate net payout amounts
  const superNetPayout = policyAmount - superTax;
  const retailNetPayout = policyAmount;
  
  // Calculate difference
  const difference = retailNetPayout - superNetPayout;
  const percentageReduction = (difference / policyAmount) * 100;
  
  return {
    superInsurance: {
      grossPayout: policyAmount,
      taxPayable: superTax,
      netPayout: superNetPayout
    },
    retailInsurance: {
      grossPayout: policyAmount,
      taxPayable: retailTax,
      netPayout: retailNetPayout
    },
    comparison: {
      difference,
      percentageReduction
    }
  };
}
