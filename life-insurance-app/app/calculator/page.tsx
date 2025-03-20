import Link from "next/link";

export default function CalculatorPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Calculator Tools</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Calculate Your Life Insurance Needs
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Use our interactive calculators to determine if your current life insurance coverage is adequate for your family's needs and financial goals.
          </p>
        </div>
      </section>

      {/* Calculator Tabs */}
      <section className="py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Underinsurance Calculator
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Premium Comparison
              </button>
              <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                Tax Impact
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Underinsurance Calculator
              </h2>
              <p className="text-gray-700 mb-8">
                Complete the form below to assess whether your current life insurance coverage is adequate for your family's needs. This calculator considers your income, debts, expenses, and future financial goals.
              </p>

              <form>
                {/* Personal Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g., 35"
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>Select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="occupation" className="block text-sm font-medium text-gray-700 mb-1">
                        Occupation
                      </label>
                      <input
                        type="text"
                        id="occupation"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g., Teacher"
                      />
                    </div>
                    <div>
                      <label htmlFor="smoking" className="block text-sm font-medium text-gray-700 mb-1">
                        Smoking Status
                      </label>
                      <select
                        id="smoking"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option>Select status</option>
                        <option>Non-smoker</option>
                        <option>Smoker</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Financial Details */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Financial Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="annual-income" className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Income (before tax)
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          id="annual-income"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="existing-debts" className="block text-sm font-medium text-gray-700 mb-1">
                        Existing Debts (excluding mortgage)
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          id="existing-debts"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="mortgage-balance" className="block text-sm font-medium text-gray-700 mb-1">
                        Mortgage Balance
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          id="mortgage-balance"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="dependents" className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Dependents
                      </label>
                      <input
                        type="number"
                        id="dependents"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g., 2"
                      />
                    </div>
                  </div>
                </div>

                {/* Current Coverage */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Current Coverage</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="super-fund" className="block text-sm font-medium text-gray-700 mb-1">
                        Super Fund Name
                      </label>
                      <input
                        type="text"
                        id="super-fund"
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="e.g., Australian Super"
                      />
                    </div>
                    <div>
                      <label htmlFor="current-coverage" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Coverage Amount
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          id="current-coverage"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md"
                          placeholder="0.00"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    type="button"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Calculate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Coverage Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Coverage Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Summary</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-500">Recommended Coverage</span>
                    <span className="text-lg font-bold text-gray-900">$750,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2"></div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-500">Current Coverage</span>
                    <span className="text-lg font-bold text-gray-900">$250,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-500">Coverage Gap</span>
                    <span className="text-lg font-bold text-red-600">$500,000</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Gap</h3>
              <div className="flex items-center justify-center h-48">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="2" />
                    <path
                      d="M50 5 A45 45 0 0 1 95 50 L50 50 Z"
                      fill="#3B82F6"
                    />
                    <path
                      d="M50 5 A45 45 0 1 1 95 50 L50 50 Z"
                      fill="#EF4444"
                    />
                    <circle cx="50" cy="50" r="25" fill="white" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">67%</div>
                      <div className="text-sm text-gray-500">Underinsured</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Current</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-600">Gap</span>
                </div>
              </div>
            </div>

            {/* Risk Level */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Risk Assessment</h3>
              <div className="flex flex-col items-center">
                <div className="w-full h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full mb-4"></div>
                <div className="relative w-full h-8">
                  <div className="absolute left-0 top-0 w-full flex justify-between text-xs text-gray-600">
                    <span>Low Risk</span>
                    <span>Moderate</span>
                    <span>High Risk</span>
                  </div>
                  <div className="absolute left-2/3 top-0 transform -translate-x-1/2 -translate-y-full">
                    <div className="w-4 h-4 bg-gray-900 transform rotate-45 mb-1"></div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <div className="text-xl font-bold text-red-600 mb-2">High Risk</div>
                  <p className="text-gray-700">
                    Your current coverage would only meet about 33% of your family's financial needs in the event of your death or disability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Detailed Breakdown</h3>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Need Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Recommended Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Income Replacement
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $450,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      5 years of income replacement to allow your family to maintain their standard of living and adjust to new circumstances.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Debt Clearance
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $200,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Covers your mortgage balance and other existing debts to ensure your family isn't burdened with these obligations.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Education Fund
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $80,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Provides for your children's future education expenses, including university or vocational training.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Funeral Expenses
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $20,000
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Covers funeral and final expenses to prevent additional financial stress during a difficult time.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              What These Results Mean
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="prose max-w-none">
                <p>
                  Based on the information you've provided, your current life insurance coverage through super is significantly below what your family would need if something happened to you. Here's what this means:
                </p>
                
                <h3>Financial Impact</h3>
                <p>
                  With only 33% of recommended coverage, your family would face difficult financial decisions. They might need to:
                </p>
                <ul>
                  <li>Sell your family home</li>
                  <li>Significantly reduce their standard of living</li>
                  <li>Deplete savings or retirement funds</li>
                  <li>Take on additional debt</li>
                </ul>
                
                <h3>Key Considerations</h3>
                <p>
                  When evaluating these results, consider:
                </p>
                <ul>
                  <li><strong>Income replacement:</strong> How long would your family need financial support?</li>
                  <li><strong>Debt obligations:</strong> Would your family be able to manage existing debts?</li>
                  <li><strong>Future expenses:</strong> Have you accounted for education costs and other major future expenses?</li>
                  <li><strong>Inflation:</strong> Will the coverage amount maintain its value over time?</li>
                </ul>
                
                <h3>Next Steps</h3>
                <p>
                  To address this coverage gap, consider:
                </p>
                <ol>
                  <li>Reviewing your super fund's insurance options to see if you can increase coverage</li>
                  <li>Exploring retail life insurance policies that can provide more comprehensive coverage</li>
                  <li>Speaking with a financial advisor to develop a personalized insurance strategy</li>
                  <li>Checking if you can fund retail insurance through your super to maintain tax advantages</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Links */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Link 1 */}
            <Link href="/comparison" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare Policies</h3>
                <p className="text-gray-700 mb-4">
                  See how super insurance compares to retail policies side by side.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Learn more →</span>
              </div>
            </Link>
            
            {/* Link 2 */}
            <Link href="/limitations" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Limitations & Risks</h3>
                <p className="text-gray-700 mb-4">
                  Understand the potential pitfalls and coverage gaps in super life insurance.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Learn more →</span>
              </div>
            </Link>
            
            {/* Link 3 */}
            <Link href="/take-action" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Take Action</h3>
                <p className="text-gray-700 mb-4">
                  Ready to improve your coverage? Learn how to check your current policy and explore better options.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Get started →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to fix your coverage gap?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Don't leave your family's financial future to chance. Take action now to ensure they're properly protected.
            </p>
            <Link
              href="/take-action"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700"
            >
              Explore Better Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
