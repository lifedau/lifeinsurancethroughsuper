import React, { useState } from 'react';
import { generatePolicyComparison, calculateComparisonScores, generateRecommendations } from './comparisonLogic';

export default function ComparisonTool() {
  // State for form inputs
  const [formData, setFormData] = useState({
    age: 35,
    gender: 'male',
    familyStatus: 'married_with_children',
    hasNonDependentBeneficiaries: true,
    hasMortgage: true,
    hasChildren: true,
    coverageAmount: 800000
  });

  // State for comparison results
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);

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
    
    // Generate comparison data
    const comparisonData = generatePolicyComparison(formData);
    
    // Calculate scores
    const scores = calculateComparisonScores(comparisonData);
    
    // Generate recommendations
    const recommendations = generateRecommendations(formData, scores);
    
    // Set results
    setResults({
      comparison: comparisonData,
      scores,
      recommendations
    });
    
    // Show results
    setShowResults(true);
  };

  // Reset comparison
  const handleReset = () => {
    setFormData({
      age: 35,
      gender: 'male',
      familyStatus: 'married_with_children',
      hasNonDependentBeneficiaries: true,
      hasMortgage: true,
      hasChildren: true,
      coverageAmount: 800000
    });
    setResults(null);
    setShowResults(false);
  };

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' }).format(amount);
  };

  // Render form
  const renderForm = () => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Personalize Your Comparison</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
              <label htmlFor="coverageAmount" className="block text-sm font-medium text-gray-700 mb-1">Coverage Amount ($)</label>
              <input
                type="number"
                id="coverageAmount"
                name="coverageAmount"
                value={formData.coverageAmount}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                min="100000"
                step="50000"
              />
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasNonDependentBeneficiaries"
                name="hasNonDependentBeneficiaries"
                checked={formData.hasNonDependentBeneficiaries}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="hasNonDependentBeneficiaries" className="ml-2 block text-sm text-gray-700">
                I have non-dependent beneficiaries (e.g., adult children, siblings)
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasMortgage"
                name="hasMortgage"
                checked={formData.hasMortgage}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="hasMortgage" className="ml-2 block text-sm text-gray-700">
                I have a mortgage or other significant debt
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="hasChildren"
                name="hasChildren"
                checked={formData.hasChildren}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="hasChildren" className="ml-2 block text-sm text-gray-700">
                I have dependent children
              </label>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Generate Comparison
            </button>
          </div>
        </form>
      </div>
    );
  };

  // Render results
  const renderResults = () => {
    if (!results) return null;
    
    const { comparison, scores, recommendations } = results;
    
    return (
      <div className="bg-white rounded-lg shadow-md">
        {/* Overall Scores */}
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Policy Comparison Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Super Insurance</h4>
              <div className="flex items-end mb-2">
                <span className="text-4xl font-bold text-gray-900">{scores.scores.super}%</span>
                <span className="text-lg text-gray-600 ml-2 mb-1">Score</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-gray-600 h-2.5 rounded-full" 
                  style={{ width: `${scores.scores.super}%` }}
                ></div>
              </div>
              <h5 className="text-sm font-medium text-gray-900 mb-2">Key Advantages:</h5>
              <ul className="space-y-1">
                {scores.advantages.super.map((advantage, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <svg className="h-5 w-5 text-gray-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Retail Insurance</h4>
              <div className="flex items-end mb-2">
                <span className="text-4xl font-bold text-blue-600">{scores.scores.retail}%</span>
                <span className="text-lg text-gray-600 ml-2 mb-1">Score</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${scores.scores.retail}%` }}
                ></div>
              </div>
              <h5 className="text-sm font-medium text-gray-900 mb-2">Key Advantages:</h5>
              <ul className="space-y-1">
                {scores.advantages.retail.map((advantage, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Recommendation */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Recommendation</h4>
            <p className="text-gray-700 mb-4">{recommendations.primaryRecommendation}</p>
            
            {recommendations.specificRecommendations.length > 0 && (
              <div className="mb-4">
                <h5 className="text-base font-medium text-gray-900 mb-2">Based on your situation:</h5>
                <ul className="space-y-1">
                  {recommendations.specificRecommendations.map((recommendation, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div>
              <h5 className="text-base font-medium text-gray-900 mb-2">Next Steps:</h5>
              <ol className="space-y-1 list-decimal list-inside">
                {recommendations.nextSteps.map((step, index) => (
                  <li key={index} className="text-sm text-gray-600">{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
        
        {/* Detailed Comparison */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Detailed Feature Comparison</h3>
          
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Super Insurance</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retail Insurance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Object.entries(comparison).map(([key, category]) => (
                  <tr key={key} className={category.importance >= 4 ? 'bg-blue-50' : ''}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">{category.title}</div>
                        {category.importance >= 4 && (
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Important
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{category.super.value}</div>
                      <div className="text-sm text-gray-500">{category.super.description}</div>
                      {category.personalized && category.personalized.super && (
                        <div className="mt-1 text-xs text-gray-600 italic">{category.personalized.super}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{category.retail.value}</div>
                      <div className="text-sm text-gray-500">{category.retail.description}</div>
                      {category.personalized && category.personalized.retail && (
                        <div className="mt-1 text-xs text-blue-600 italic">{category.personalized.retail}</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="bg-gray-50 px-6 py-4 flex justify-between">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start New Comparison
          </button>
          <a
            href="/calculator"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Calculate Your Coverage Needs
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      {showResults ? renderResults() : renderForm()}
    </div>
  );
}
