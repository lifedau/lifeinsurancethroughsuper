import React, { useState } from 'react';
import { calculateCoverageNeeds, calculatePremiumEstimates, calculateTaxImplications } from './calculatorLogic';

export default function CalculatorForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    age: 35,
    gender: 'male',
    familyStatus: 'married_with_children',
    annualIncome: 100000,
    partnerIncome: 50000,
    mortgageBalance: 500000,
    otherDebts: 20000,
    numberOfChildren: 2,
    educationType: 'public',
    currentSavings: 50000,
    currentSuperBalance: 150000,
    currentLifeInsurance: 200000,
    retirementAge: 65,
    smoker: false,
    occupation: 'office'
  });

  // State for calculation results
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('coverage');
  const [currentStep, setCurrentStep] = useState(1);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'number' ? Number(value) : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate coverage needs
    const coverageResults = calculateCoverageNeeds(formData);
    
    // Calculate premium estimates
    const premiumResults = calculatePremiumEstimates({
      age: formData.age,
      gender: formData.gender,
      smoker: formData.smoker,
      coverageAmount: coverageResults.recommendedCoverage,
      occupation: formData.occupation
    });
    
    // Calculate tax implications
    const taxResults = calculateTaxImplications({
      policyAmount: coverageResults.recommendedCoverage,
      taxableComponent: 80, // Assuming 80% taxable component as default
      beneficiaryType: formData.familyStatus === 'married_with_children' || formData.familyStatus === 'married_no_children' 
        ? 'dependent' : 'non_dependent'
    });
    
    // Set results
    setResults({
      coverage: coverageResults,
      premiums: premiumResults,
      tax: taxResults
    });
    
    // Move to results view
    setCurrentStep(4);
  };

  // Handle next step
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // Handle previous step
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Reset calculator
  const handleReset = () => {
    setFormData({
      age: 35,
      gender: 'male',
      familyStatus: 'married_with_children',
      annualIncome: 100000,
      partnerIncome: 50000,
      mortgageBalance: 500000,
      otherDebts: 20000,
      numberOfChildren: 2,
      educationType: 'public',
      currentSavings: 50000,
      currentSuperBalance: 150000,
      currentLifeInsurance: 200000,
      retirementAge: 65,
      smoker: false,
      occupation: 'office'
    });
    setResults(null);
    setCurrentStep(1);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
  };

  // Render personal details form (Step 1)
  const renderPersonalDetailsForm = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="18"
              max="70"
            />
          </div>
          
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="familyStatus" className="block text-sm font-medium text-gray-700 mb-1">Family Status</label>
            <select
              id="familyStatus"
              name="familyStatus"
              value={formData.familyStatus}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="single">Single</option>
              <option value="married_no_children">Married without Children</option>
              <option value="married_with_children">Married with Children</option>
              <option value="single_parent">Single Parent</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">Occupation Type</label>
            <select
              id="occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="office">Office/Professional</option>
              <option value="light_manual">Light Manual</option>
              <option value="manual">Manual</option>
              <option value="heavy_manual">Heavy Manual</option>
              <option value="hazardous">Hazardous</option>
            </select>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="smoker"
              name="smoker"
              checked={formData.smoker}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="smoker" className="ml-2 block text-sm text-gray-700">Smoker</label>
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleNextStep}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next: Financial Information
          </button>
        </div>
      </div>
    );
  };

  // Render financial details form (Step 2)
  const renderFinancialDetailsForm = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="annualIncome" className="block text-sm font-medium text-gray-700 mb-1">Annual Income ($)</label>
            <input
              type="number"
              id="annualIncome"
              name="annualIncome"
              value={formData.annualIncome}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="0"
            />
          </div>
          
          {(formData.familyStatus === 'married_no_children' || formData.familyStatus === 'married_with_children') && (
            <div>
              <label htmlFor="partnerIncome" className="block text-sm font-medium text-gray-700 mb-1">Partner's Annual Income ($)</label>
              <input
                type="number"
                id="partnerIncome"
                name="partnerIncome"
                value={formData.partnerIncome}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                min="0"
              />
            </div>
          )}
          
          <div>
            <label htmlFor="mortgageBalance" className="block text-sm font-medium text-gray-700 mb-1">Mortgage Balance ($)</label>
            <input
              type="number"
              id="mortgageBalance"
              name="mortgageBalance"
              value={formData.mortgageBalance}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="0"
            />
          </div>
          
          <div>
            <label htmlFor="otherDebts" className="block text-sm font-medium text-gray-700 mb-1">Other Debts ($)</label>
            <input
              type="number"
              id="otherDebts"
              name="otherDebts"
              value={formData.otherDebts}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="0"
            />
          </div>
          
          <div>
            <label htmlFor="currentSavings" className="block text-sm font-medium text-gray-700 mb-1">Current Savings ($)</label>
            <input
              type="number"
              id="currentSavings"
              name="currentSavings"
              value={formData.currentSavings}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="0"
            />
          </div>
          
          <div>
            <label htmlFor="currentSuperBalance" className="block text-sm font-medium text-gray-700 mb-1">Current Super Balance ($)</label>
            <input
              type="number"
              id="currentSuperBalance"
              name="currentSuperBalance"
              value={formData.currentSuperBalance}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="0"
            />
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handlePrevStep}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleNextStep}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next: Insurance Information
          </button>
        </div>
      </div>
    );
  };

  // Render insurance details form (Step 3)
  const renderInsuranceDetailsForm = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Insurance Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(formData.familyStatus === 'married_with_children' || formData.familyStatus === 'single_parent') && (
            <>
              <div>
                <label htmlFor="numberOfChildren" className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
                <input
                  type="number"
                  id="numberOfChildren"
                  name="numberOfChildren"
                  value={formData.numberOfChildren}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  max="10"
                />
              </div>
              
              <div>
                <label htmlFor="educationType" className="block text-sm font-medium text-gray-700 mb-1">Education Type</label>
                <select
                  id="educationType"
                  name="educationType"
                  value={formData.educationType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="public">Public Education</option>
                  <option value="private">Private Education</option>
                </select>
              </div>
            </>
          )}
          
          <div>
            <label htmlFor="currentLifeInsurance" className="block text-sm font-medium text-gray-700 mb-1">Current Life Insurance Coverage ($)</label>
            <input
              type="number"
              id="currentLifeInsurance"
              name="currentLifeInsurance"
              value={formData.currentLifeInsurance}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="0"
            />
          </div>
          
          <div>
            <label htmlFor="retirementAge" className="block text-sm font-medium text-gray-700 mb-1">Expected Retirement Age</label>
            <input
              type="number"
              id="retirementAge"
              name="retirementAge"
              value={formData.retirementAge}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              min="50"
              max="75"
            />
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={handlePrevStep}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Calculate Results
          </button>
        </div>
      </div>
    );
  };

  // Render results (Step 4)
  const renderResults = () => {
    if (!results) return null;
    
    return (
      <div className="bg-white rounded-lg shadow-md">
        {/* Results Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('coverage')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'coverage'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Coverage Needs
            </button>
            <button
              onClick={() => setActiveTab('premiums')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'premiums'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Premium Estimates
            </button>
            <button
              onClick={() => setActiveTab('tax')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm ${
                activeTab === 'tax'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Tax Implications
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'coverage' && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Coverage Results</h3>
                <p className="text-gray-600">Based on the information you provided, here's your recommended life insurance coverage.</p>
              </div>
              
              {/* Main Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Recommended Coverage</h4>
                  <p className="text-3xl font-bold text-blue-600">{formatCurrency(results.coverage.recommendedCoverage)}</p>
                  <p className="text-sm text-gray-600 mt-2">This is the total life insurance coverage you should have based on your financial situation.</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Current Coverage Gap</h4>
                  <p className="text-3xl font-bold text-red-600">{formatCurrency(results.coverage.coverageGap)}</p>
                  <p className="text-sm text-gray-600 mt-2">This is how much additional coverage you need beyond your current insurance.</p>
                  <div className="mt-4 bg-white rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Gap Percentage:</span>
                      <span className="text-sm font-semibold text-gray-900">{Math.round(results.coverage.coverageGapPercentage)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-red-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.min(100, Math.round(results.coverage.coverageGapPercentage))}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Risk Level */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Risk Assessment</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                      results.coverage.riskLevel === 'Severe' ? 'bg-red-100 text-red-600' :
                      results.coverage.riskLevel === 'High' ? 'bg-orange-100 text-orange-600' :
                      results.coverage.riskLevel === 'Moderate' ? 'bg-yellow-100 text-yellow-600' :
                      'bg-green-100 text-green-600'
                    }`}>
                      {results.coverage.riskLevel === 'Severe' || results.coverage.riskLevel === 'High' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <div className="ml-4">
                      <h5 className="text-lg font-medium text-gray-900">{results.coverage.riskLevel} Risk</h5>
                      <p className="text-sm text-gray-600">
                        {results.coverage.riskLevel === 'Severe' ? 'Your family would face extreme financial difficulty, likely requiring sale of assets and dramatic lifestyle reduction.' :
                         results.coverage.riskLevel === 'High' ? 'Your family would face significant financial hardship, potentially requiring major lifestyle changes.' :
                         results.coverage.riskLevel === 'Moderate' ? 'Your family would face some financial challenges but could likely maintain their standard of living with adjustments.' :
                         'Your current coverage is largely adequate, with only minor adjustments needed.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Breakdown */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Coverage Breakdown</h4>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Income Replacement</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.coverage.breakdown.incomeReplacementNeeds)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Debt Clearance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.coverage.breakdown.debtClearanceNeeds)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Education Fund</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.coverage.breakdown.educationNeeds)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Final Expenses</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{formatCurrency(results.coverage.breakdown.finalExpenses)}</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total Needs</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">{formatCurrency(results.coverage.breakdown.totalNeeds)}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Less: Existing Resources</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">-{formatCurrency(results.coverage.breakdown.existingResources)}</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">Recommended Coverage</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600 text-right">{formatCurrency(results.coverage.recommendedCoverage)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'premiums' && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Estimates</h3>
                <p className="text-gray-600">Based on your age, gender, and recommended coverage amount, here are estimated annual premiums for different policy types.</p>
              </div>
              
              {/* Current Premium Comparison */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Annual Premium Comparison</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h5 className="text-base font-medium text-gray-900 mb-2">Super Insurance</h5>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(results.premiums.current.superPremium)}</p>
                    <p className="text-sm text-gray-600 mt-2">Stepped premiums that increase with age</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h5 className="text-base font-medium text-gray-900 mb-2">Retail (Stepped)</h5>
                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(results.premiums.current.retailSteppedPremium)}</p>
                    <p className="text-sm text-gray-600 mt-2">Stepped premiums that increase with age</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h5 className="text-base font-medium text-gray-900 mb-2">Retail (Level)</h5>
                    <p className="text-2xl font-bold text-blue-600">{formatCurrency(results.premiums.current.retailLevelPremium)}</p>
                    <p className="text-sm text-gray-600 mt-2">Level premiums that remain more stable</p>
                  </div>
                </div>
              </div>
              
              {/* Premium Projections */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Premium Projections Over Time</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600">This chart shows how premiums are projected to change over time for different policy types.</p>
                  </div>
                  
                  {/* Premium Chart would go here - simplified version for now */}
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Premium projection chart would be displayed here</p>
                  </div>
                  
                  <div className="mt-6">
                    <h5 className="text-base font-medium text-gray-900 mb-3">Key Insights:</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Stepped premiums start lower but increase significantly as you age</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Level premiums start higher but remain more stable over time</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>The crossover point where level premiums become cheaper is around age {formData.age + 15}</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Total premium cost over 20 years is significantly lower with level premiums</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'tax' && (
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Tax Implications</h3>
                <p className="text-gray-600">Understanding the tax implications of different policy types can significantly impact the actual benefit your beneficiaries receive.</p>
              </div>
              
              {/* Tax Comparison */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefit Comparison After Tax</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h5 className="text-base font-medium text-gray-900 mb-4">Super Insurance</h5>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Gross Payout:</span>
                          <span className="font-medium text-gray-900">{formatCurrency(results.tax.superInsurance.grossPayout)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Tax Payable:</span>
                          <span className="font-medium text-red-600">-{formatCurrency(results.tax.superInsurance.taxPayable)}</span>
                        </div>
                        <div className="pt-2 border-t border-gray-200 flex justify-between">
                          <span className="font-medium text-gray-900">Net Benefit:</span>
                          <span className="font-bold text-gray-900">{formatCurrency(results.tax.superInsurance.netPayout)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h5 className="text-base font-medium text-gray-900 mb-4">Retail Insurance</h5>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Gross Payout:</span>
                          <span className="font-medium text-gray-900">{formatCurrency(results.tax.retailInsurance.grossPayout)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Tax Payable:</span>
                          <span className="font-medium text-green-600">-{formatCurrency(results.tax.retailInsurance.taxPayable)}</span>
                        </div>
                        <div className="pt-2 border-t border-gray-200 flex justify-between">
                          <span className="font-medium text-gray-900">Net Benefit:</span>
                          <span className="font-bold text-blue-600">{formatCurrency(results.tax.retailInsurance.netPayout)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tax Impact */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tax Impact Analysis</h4>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-medium text-gray-900">Benefit Reduction Due to Tax:</span>
                      <span className="text-lg font-bold text-red-600">{formatCurrency(results.tax.comparison.difference)}</span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">Percentage Reduction:</span>
                      <span className="text-base font-medium text-gray-900">{results.tax.comparison.percentageReduction.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-red-600 h-2.5 rounded-full" 
                        style={{ width: `${Math.min(100, results.tax.comparison.percentageReduction)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h5 className="text-base font-medium text-gray-900 mb-2">What This Means</h5>
                    <p className="text-sm text-gray-700 mb-3">
                      With super insurance, your beneficiaries could receive {formatCurrency(results.tax.comparison.difference)} less due to taxation, 
                      reducing the effective coverage by {results.tax.comparison.percentageReduction.toFixed(1)}%.
                    </p>
                    <p className="text-sm text-gray-700">
                      This reduction could mean the difference between paying off a mortgage completely vs. having a remaining balance, 
                      or providing adequate education funding vs. limited educational support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Over
          </button>
          <a
            href="/comparison"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Compare Insurance Options
          </a>
        </div>
      </div>
    );
  };

  // Render the appropriate step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalDetailsForm();
      case 2:
        return renderFinancialDetailsForm();
      case 3:
        return renderInsuranceDetailsForm();
      case 4:
        return renderResults();
      default:
        return renderPersonalDetailsForm();
    }
  };

  return (
    <div>
      {/* Progress Indicator */}
      {currentStep < 4 && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-900">Step {currentStep} of 3</span>
            <span className="text-sm font-medium text-gray-500">{
              currentStep === 1 ? 'Personal Details' :
              currentStep === 2 ? 'Financial Information' :
              'Insurance Information'
            }</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full" 
              style={{ width: `${(currentStep / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
    </div>
  );
}
