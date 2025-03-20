// Comparison tool logic for LifeInsuranceThroughSuper.com.au
// This file contains the core logic for the policy comparison tool

/**
 * Generate a detailed comparison between super and retail life insurance
 * @param {Object} inputs - User inputs for personalization
 * @returns {Object} - Detailed comparison results
 */
export function generatePolicyComparison(inputs) {
  const { age, gender, familyStatus, hasNonDependentBeneficiaries, coverageAmount } = inputs;
  
  // Generate comparison data
  return {
    coverageAmount: {
      title: "Coverage Amount",
      super: {
        value: "Limited",
        description: "Default coverage typically 1-4x annual salary",
        rating: 2
      },
      retail: {
        value: "Flexible",
        description: "Customizable based on your specific needs",
        rating: 5
      },
      importance: 5,
      personalized: {
        super: `Default coverage may be inadequate for your needs as a ${familyStatus.replace('_', ' ')}`,
        retail: `Can be tailored exactly to your ${familyStatus.replace('_', ' ')} situation`
      }
    },
    premiumStructure: {
      title: "Premium Structure",
      super: {
        value: "Stepped Only",
        description: "Premiums increase with age, becoming expensive later",
        rating: 2
      },
      retail: {
        value: "Stepped or Level",
        description: "Option for level premiums that remain more stable",
        rating: 5
      },
      importance: 4,
      personalized: {
        super: `At age ${age}, your premiums will increase significantly as you get older`,
        retail: `Level premiums can save you money if you maintain coverage beyond age ${age + 15}`
      }
    },
    renewability: {
      title: "Guaranteed Renewability",
      super: {
        value: "Not Guaranteed",
        description: "Coverage can change or stop without your consent",
        rating: 1
      },
      retail: {
        value: "Guaranteed",
        description: "Cannot be cancelled if you pay premiums",
        rating: 5
      },
      importance: 5,
      personalized: null
    },
    beneficiaryArrangements: {
      title: "Beneficiary Flexibility",
      super: {
        value: "Limited",
        description: "Restricted to dependents as defined by super law",
        rating: 2
      },
      retail: {
        value: "Complete Flexibility",
        description: "Any beneficiary with binding nominations",
        rating: 5
      },
      importance: hasNonDependentBeneficiaries ? 5 : 3,
      personalized: hasNonDependentBeneficiaries ? {
        super: "Your non-dependent beneficiaries may face restrictions",
        retail: "Complete freedom to nominate any beneficiary"
      } : null
    },
    taxImplications: {
      title: "Tax on Benefits",
      super: {
        value: "May Be Taxed",
        description: "Up to 32% tax for non-dependent beneficiaries",
        rating: 2
      },
      retail: {
        value: "Tax-Free",
        description: "All benefits are tax-free regardless of beneficiary",
        rating: 5
      },
      importance: hasNonDependentBeneficiaries ? 5 : 2,
      personalized: hasNonDependentBeneficiaries ? {
        super: "Your non-dependent beneficiaries could pay significant tax",
        retail: "All beneficiaries receive the full benefit tax-free"
      } : null
    },
    claimsProcess: {
      title: "Claims Process",
      super: {
        value: "Complex",
        description: "Average 5.2 months processing time",
        rating: 2
      },
      retail: {
        value: "Streamlined",
        description: "Average 3.0 months processing time",
        rating: 4
      },
      importance: 4,
      personalized: null
    },
    additionalBenefits: {
      title: "Additional Benefits",
      super: {
        value: "Basic",
        description: "Limited or no additional benefits",
        rating: 1
      },
      retail: {
        value: "Comprehensive",
        description: "Funeral advancement, accommodation benefits, etc.",
        rating: 5
      },
      importance: 3,
      personalized: null
    },
    policyExclusions: {
      title: "Policy Exclusions",
      super: {
        value: "More Restrictive",
        description: "Often includes broader exclusions",
        rating: 2
      },
      retail: {
        value: "More Transparent",
        description: "Clearer exclusions with negotiation options",
        rating: 4
      },
      importance: 3,
      personalized: null
    },
    expiryAge: {
      title: "Expiry Age",
      super: {
        value: "Earlier",
        description: "Typically expires at age 65 or 70",
        rating: 2
      },
      retail: {
        value: "Extended",
        description: "Coverage until age 99 or for life",
        rating: 5
      },
      importance: age > 50 ? 4 : 2,
      personalized: age > 50 ? {
        super: `At age ${age}, you're approaching the typical expiry age`,
        retail: "Coverage continues regardless of your age"
      } : null
    },
    tpdDefinition: {
      title: "TPD Definition",
      super: {
        value: "Any Occupation",
        description: "Must be unable to work in any occupation",
        rating: 2
      },
      retail: {
        value: "Own Occupation",
        description: "Unable to work in your specific profession",
        rating: 5
      },
      importance: 4,
      personalized: null
    }
  };
}

/**
 * Calculate the overall comparison score
 * @param {Object} comparisonData - The detailed comparison data
 * @returns {Object} - Overall scores and recommendations
 */
export function calculateComparisonScores(comparisonData) {
  let superTotalScore = 0;
  let retailTotalScore = 0;
  let totalImportance = 0;
  
  // Calculate weighted scores
  Object.values(comparisonData).forEach(category => {
    const importance = category.importance;
    superTotalScore += category.super.rating * importance;
    retailTotalScore += category.retail.rating * importance;
    totalImportance += importance;
  });
  
  // Calculate percentage scores
  const superScore = Math.round((superTotalScore / (totalImportance * 5)) * 100);
  const retailScore = Math.round((retailTotalScore / (totalImportance * 5)) * 100);
  
  // Determine key advantages for each type
  const superAdvantages = [
    "Automatic setup with no medical underwriting",
    "Premiums paid from pre-tax super contributions",
    "No direct impact on household budget",
    "Convenient premium payments"
  ];
  
  const retailAdvantages = Object.entries(comparisonData)
    .filter(([_, category]) => category.retail.rating - category.super.rating >= 3)
    .map(([_, category]) => category.title);
  
  // Generate recommendation based on scores
  let recommendation;
  if (retailScore - superScore > 40) {
    recommendation = "Retail policy strongly recommended";
  } else if (retailScore - superScore > 20) {
    recommendation = "Retail policy recommended";
  } else {
    recommendation = "Consider a combination of super and retail policies";
  }
  
  return {
    scores: {
      super: superScore,
      retail: retailScore,
      difference: retailScore - superScore
    },
    advantages: {
      super: superAdvantages,
      retail: retailAdvantages
    },
    recommendation
  };
}

/**
 * Generate personalized policy recommendations
 * @param {Object} inputs - User inputs for personalization
 * @param {Object} comparisonResults - Results from the comparison
 * @returns {Object} - Personalized recommendations
 */
export function generateRecommendations(inputs, comparisonResults) {
  const { age, familyStatus, hasNonDependentBeneficiaries, hasMortgage, hasChildren } = inputs;
  const { scores } = comparisonResults;
  
  // Base recommendation
  let primaryRecommendation;
  let approach;
  
  if (scores.difference > 30) {
    primaryRecommendation = "Based on your situation, a retail life insurance policy would provide significantly better protection for your family.";
    approach = "retail_focused";
  } else if (scores.difference > 15) {
    primaryRecommendation = "A retail policy would provide better protection, but you might consider a combination approach to balance cost and coverage.";
    approach = "combination";
  } else {
    primaryRecommendation = "Your situation could be well-served by a combination of super and retail insurance to maximize advantages of both.";
    approach = "combination";
  }
  
  // Specific recommendations based on personal factors
  const specificRecommendations = [];
  
  if (hasNonDependentBeneficiaries) {
    specificRecommendations.push("With non-dependent beneficiaries, retail insurance would eliminate potential tax of up to 32% on benefits.");
  }
  
  if (hasMortgage) {
    specificRecommendations.push("Your mortgage should be fully covered by your life insurance to ensure your family can remain in their home.");
  }
  
  if (hasChildren) {
    specificRecommendations.push("With children to support, ensure your coverage accounts for education and living expenses until they're independent.");
  }
  
  if (age > 50) {
    specificRecommendations.push("At your age, consider level premiums to avoid significant cost increases as you get older.");
  }
  
  if (familyStatus === "single_income_family") {
    specificRecommendations.push("As the primary income earner, your family is particularly vulnerable to financial hardship without adequate coverage.");
  }
  
  // Next steps based on approach
  let nextSteps;
  
  if (approach === "retail_focused") {
    nextSteps = [
      "Calculate your exact coverage needs using our calculator",
      "Research retail policy providers or consult a financial advisor",
      "Consider whether to fund the policy through super or directly",
      "Ensure you have binding nominations for your beneficiaries"
    ];
  } else {
    nextSteps = [
      "Calculate your exact coverage needs using our calculator",
      "Maintain some basic coverage through your super",
      "Supplement with a retail policy for comprehensive protection",
      "Ensure you have binding nominations for all policies"
    ];
  }
  
  return {
    primaryRecommendation,
    specificRecommendations,
    nextSteps,
    approach
  };
}
