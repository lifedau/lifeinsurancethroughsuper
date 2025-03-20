import Link from "next/link";

export default function TakeActionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Take Action</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Take Action: Improve Your Life Insurance Coverage
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Follow these steps to check your current coverage, understand your needs, and explore better options for protecting your family's financial future.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Your Action Plan
            </h2>
            
            {/* Step 1 */}
            <div className="mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white text-xl font-bold">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Check Your Current Coverage</h3>
                  <p className="text-gray-700 mb-4">
                    Before making any changes, you need to understand what coverage you currently have through your superannuation.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">How to check your current coverage:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Log in to your super fund's online portal or app</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Navigate to the "Insurance" or "Cover" section</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Review your current coverage amount, premium, and policy details</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Download or request a copy of your insurance policy document</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Call your super fund's customer service if you can't find this information online</span>
                      </li>
                    </ul>
                    <div className="mt-6 bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Tip:</strong> Make note of your current coverage amount, premium cost, policy exclusions, and expiry age. You'll need this information to compare with other options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white text-xl font-bold">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Assess Your Coverage Needs</h3>
                  <p className="text-gray-700 mb-4">
                    Use our calculator to determine how much life insurance coverage you actually need based on your specific circumstances.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Factors to consider:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Income Replacement</h5>
                        <p className="text-sm text-gray-700">
                          How many years of income would your family need if you were no longer able to provide?
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Debt Obligations</h5>
                        <p className="text-sm text-gray-700">
                          Consider your mortgage, car loans, credit cards, and other debts that would need to be paid.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Education Costs</h5>
                        <p className="text-sm text-gray-700">
                          If you have children, factor in future education expenses including university.
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Final Expenses</h5>
                        <p className="text-sm text-gray-700">
                          Include funeral costs and potential medical expenses not covered by health insurance.
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        href="/calculator"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Use Our Calculator
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="mb-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white text-xl font-bold">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Understand Your Options</h3>
                  <p className="text-gray-700 mb-4">
                    You have several options for improving your life insurance coverage, each with different advantages.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Available options:</h4>
                    <div className="space-y-6">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Option 1: Increase Your Super Insurance</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                          <div>
                            <h6 className="text-sm font-medium text-gray-900 mb-1">Pros:</h6>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Convenience of automatic premium payments</li>
                              <li>• May not require medical underwriting for small increases</li>
                              <li>• Premiums paid from pre-tax super contributions</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-900 mb-1">Cons:</h6>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Still subject to all super insurance limitations</li>
                              <li>• May have coverage caps or restrictions</li>
                              <li>• Reduces your retirement savings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Option 2: Purchase Retail Life Insurance</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                          <div>
                            <h6 className="text-sm font-medium text-gray-900 mb-1">Pros:</h6>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Comprehensive coverage with better benefits</li>
                              <li>• Guaranteed renewable until expiry age</li>
                              <li>• Tax-free payouts to any beneficiary</li>
                              <li>• More flexible coverage options</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-900 mb-1">Cons:</h6>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Requires medical underwriting</li>
                              <li>• Premiums paid from after-tax income</li>
                              <li>• Separate policy to manage</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Option 3: Retail Insurance Through Super</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                          <div>
                            <h6 className="text-sm font-medium text-gray-900 mb-1">Pros:</h6>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Better coverage than default super insurance</li>
                              <li>• Premiums paid from super balance</li>
                              <li>• Tax advantages of super funding</li>
                            </ul>
                          </div>
                          <div>
                            <h6 className="text-sm font-medium text-gray-900 mb-1">Cons:</h6>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Still subject to some super restrictions</li>
                              <li>• Reduces retirement savings</li>
                              <li>• May have tax implications for beneficiaries</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-center">
                      <Link
                        href="/comparison"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Compare Options in Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white text-xl font-bold">
                    4
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Professional Advice</h3>
                  <p className="text-gray-700 mb-4">
                    For the best outcome, consider speaking with a financial advisor who specializes in insurance.
                  </p>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">How a financial advisor can help:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Provide personalized advice based on your specific situation</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Compare policies across multiple insurance providers</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Explain complex policy terms and conditions</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Help structure your insurance for tax efficiency</span>
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                        <span>Assist with the application process and underwriting</span>
                      </li>
                    </ul>
                    <div className="mt-6 bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <strong>Finding an advisor:</strong> Look for a financial advisor who is licensed to provide life insurance advice. You can find advisors through the Financial Advisers Register maintained by ASIC, or ask for recommendations from friends and family.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Question 1 */}
              <div className="border-b border-gray-200">
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">Will I lose my current coverage if I switch?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    It's important not to cancel your existing coverage until your new policy is fully approved and in force. When applying for retail insurance, you'll typically have a period where both policies overlap. Once your new policy is active, you can then cancel your super insurance or reduce it to a complementary level.
                  </p>
                </div>
              </div>
              
              {/* Question 2 */}
              <div className="border-b border-gray-200">
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">What if I have pre-existing health conditions?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    Pre-existing conditions may affect your ability to obtain new coverage or may result in exclusions or premium loadings. However, many conditions can still be covered, especially if well-managed. It's best to speak with a financial advisor who can help you navigate the underwriting process and find insurers who may be more accommodating for your specific condition.
                  </p>
                </div>
              </div>
              
              {/* Question 3 */}
              <div className="border-b border-gray-200">
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">Can I have both super and retail insurance?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    Yes, you can have both types of coverage simultaneously. Many people maintain a basic level of coverage through their super while supplementing with a retail policy for more comprehensive protection. This approach can provide a balance between convenience and comprehensive coverage. Just be careful not to over-insure, as most policies will take other coverage into account when paying claims.
                  </p>
                </div>
              </div>
              
              {/* Question 4 */}
              <div>
                <button className="w-full px-6 py-4 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">How do I pay for retail insurance through my super?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    To pay for retail insurance through your super, you'll need to set up a "premium deduction authority" that allows your super fund to pay your insurance premiums directly to the insurer. This arrangement needs to be established when you apply for the policy. Not all super funds offer this option, so check with your fund first. Alternatively, you can make additional contributions to your super to offset the premium deductions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Story 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Sarah, 38</h3>
                  <p className="text-sm text-gray-500">Sydney, NSW</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "After using the calculator, I discovered my super insurance would only cover 30% of my family's needs. I worked with a financial advisor to get a retail policy that provided full coverage while still using my super to pay the premiums. The peace of mind is worth every cent."
              </p>
              <div className="text-sm text-gray-500">
                <strong>Result:</strong> Increased coverage from $250,000 to $850,000 with guaranteed renewability and no tax implications for beneficiaries.
              </div>
            </div>
            
            {/* Story 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Michael, 45</h3>
                  <p className="text-sm text-gray-500">Melbourne, VIC</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I was shocked to learn that my adult children would be taxed on my super insurance payout. By switching to a retail policy, I ensured they would receive the full benefit tax-free, while still maintaining some coverage through my super for my wife."
              </p>
              <div className="text-sm text-gray-500">
                <strong>Result:</strong> Eliminated potential $120,000 tax bill for beneficiaries while maintaining the same premium cost through a combination approach.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to secure your family's future?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step today by checking your current coverage and using our calculator to determine your actual needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/calculator"
              className="rounded-md bg-white px-6 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50"
            >
              Calculate Your Needs
            </Link>
            <Link
              href="/comparison"
              className="rounded-md bg-blue-500 px-6 py-3 text-lg font-medium text-white hover:bg-blue-400"
            >
              Compare Options
            </Link>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Resource 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Government Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">ASIC's MoneySmart Insurance Guide</a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">ATO Super Death Benefits Guide</a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Financial Advisers Register</a>
                </li>
              </ul>
            </div>
            
            {/* Resource 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Financial Services Council</a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Association of Financial Advisers</a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Insurance Council of Australia</a>
                </li>
              </ul>
            </div>
            
            {/* Resource 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Resources</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Link href="/statistics" className="text-blue-600 hover:text-blue-800">Statistics & Research</Link>
                </li>
                <li>
                  <Link href="/limitations" className="text-blue-600 hover:text-blue-800">Limitations & Risks Guide</Link>
                </li>
                <li>
                  <Link href="/about" className="text-blue-600 hover:text-blue-800">Super Insurance Basics</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
