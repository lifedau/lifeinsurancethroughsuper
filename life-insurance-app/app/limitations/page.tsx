import Link from "next/link";

export default function LimitationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Limitations & Risks</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Limitations and Risks of Super Life Insurance
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            While convenient, life insurance through superannuation has significant limitations that could leave your family vulnerable when they need protection the most.
          </p>
        </div>
      </section>

      {/* Coverage Inadequacy */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Coverage Inadequacy
              </h2>
              <p className="text-gray-700 mb-4">
                Most Australians with default life insurance through their super are significantly underinsured. Research shows the average coverage gap is approximately 75% of what's actually needed to maintain a family's standard of living.
              </p>
              <p className="text-gray-700 mb-4">
                This means that in the event of death or disability, your loved ones may receive only a quarter of the financial support they actually need to cover mortgage payments, living expenses, education costs, and other financial obligations.
              </p>
              <p className="text-gray-700">
                Default coverage amounts are typically determined by broad demographic factors rather than your specific family situation, debts, and financial needs.
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-8">
              <div className="relative h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 relative">
                    <div className="w-64 h-64 rounded-full border-8 border-red-200"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border-8 border-red-300"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border-8 border-red-400"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-500"></div>
                    </div>
                    <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
                      <div className="text-xl font-bold text-red-600">75%</div>
                      <div className="text-xs text-gray-700">Underinsured</div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                The average Australian with default super life insurance has only 25% of the coverage they actually need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Limitations */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Policy Limitations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Limitation 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Not Guaranteed Renewable</h3>
              <p className="text-gray-700">
                Unlike retail policies, super life insurance is not guaranteed renewable. Your fund can change or cancel your coverage without your explicit consent, often when you need it most.
              </p>
              <p className="text-gray-700 mt-4">
                This means your coverage could be reduced or eliminated as you age or if your health deteriorates, leaving you unprotected and potentially uninsurable elsewhere.
              </p>
            </div>

            {/* Limitation 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M16 16v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1"></path>
                  <polyline points="12 16 12 12"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Payout Restrictions</h3>
              <p className="text-gray-700">
                Super life insurance has significant restrictions on who can receive benefits. Payouts are subject to trustee discretion and superannuation law, which limits eligible beneficiaries.
              </p>
              <p className="text-gray-700 mt-4">
                This can create complications for de facto partners, blended families, and other non-traditional family structures, potentially delaying payments when they're most needed.
              </p>
            </div>

            {/* Limitation 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M8 14h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 18h.01"></path>
                  <path d="M12 18h.01"></path>
                  <path d="M16 18h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earlier Expiry</h3>
              <p className="text-gray-700">
                Most super life insurance policies expire at age 65 or 70, while retail policies often provide coverage until age 99 or for life.
              </p>
              <p className="text-gray-700 mt-4">
                This means you could lose coverage just when age-related health risks increase, leaving you without protection when the likelihood of needing it is higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Implications */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Example Scenario</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Policy Details:</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>• Life insurance through super: $500,000</li>
                      <li>• Policyholder: John, age 45</li>
                      <li>• Beneficiary: Adult son, age 26 (non-dependent)</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Tax Calculation:</p>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li>• Taxable component: $400,000</li>
                      <li>• Tax rate for non-dependent: 15% + 2% Medicare levy</li>
                      <li>• Tax payable: $68,000</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <p className="font-medium text-red-900">Actual Payout:</p>
                    <p className="mt-2 text-gray-700">$432,000 (13.6% less than the policy amount)</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <p className="font-medium text-green-900">With Retail Policy:</p>
                    <p className="mt-2 text-gray-700">$500,000 (tax-free regardless of beneficiary)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Tax Implications
              </h2>
              <p className="text-gray-700 mb-4">
                Life insurance payouts through super can be subject to significant taxation, unlike retail policies which are generally tax-free regardless of the beneficiary.
              </p>
              <p className="text-gray-700 mb-4">
                When a death benefit is paid to a non-dependent beneficiary (such as an adult child), it can be taxed at up to 32% (including Medicare levy) on the taxable component of the super.
              </p>
              <p className="text-gray-700 mb-4">
                This means your loved ones could receive substantially less than the policy amount, potentially tens or even hundreds of thousands of dollars less than they would with an equivalent retail policy.
              </p>
              <p className="text-gray-700">
                The tax implications are particularly significant for those with adult children or other non-dependent beneficiaries, such as siblings or parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cancellation Risks */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Cancellation Risks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Risk 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Warning Signs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>Changing jobs or employers</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>Switching super funds</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>Account balance falling below minimum</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>No contributions for 16 months</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>Taking extended leave</span>
                </li>
              </ul>
            </div>

            {/* Risk 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Common Scenarios</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Career Change:</strong> When changing employers, your new super fund may have different default insurance with different terms or coverage amounts.
                </p>
                <p>
                  <strong>Fund Consolidation:</strong> Consolidating super funds without checking insurance implications can lead to coverage loss.
                </p>
                <p>
                  <strong>Extended Leave:</strong> Taking parental leave or sabbatical can trigger automatic cancellation if contributions stop.
                </p>
                <p>
                  <strong>Low Balance:</strong> If your super balance falls too low to cover premiums, your insurance may be cancelled.
                </p>
              </div>
            </div>

            {/* Risk 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prevention Tips</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Regularly review your super statements</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Contact your fund before changing jobs</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Check insurance implications before consolidating funds</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Make voluntary contributions during extended leave</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Consider retail policies for guaranteed coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Real-World Example
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 bg-blue-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Williams Family</h3>
              <p className="text-gray-700">
                Michael Williams, 42, had been with the same employer and super fund for 15 years. He had default life insurance coverage of $400,000 through his super, which he believed was sufficient for his family's needs.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What Happened</h3>
              <p className="text-gray-700 mb-4">
                When Michael changed jobs, he decided to consolidate his super into his new employer's fund to simplify his finances. What he didn't realize was that his new fund had different insurance terms and required medical underwriting for coverage above $250,000.
              </p>
              <p className="text-gray-700 mb-4">
                Due to a pre-existing health condition, Michael was only approved for $200,000 in coverage—less than half of what he previously had. Six months later, he suffered a serious heart attack.
              </p>
              <p className="text-gray-700">
                His family was left with a significant financial shortfall, struggling to cover the mortgage and maintain their standard of living with less than half the coverage they expected.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lessons Learned</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>Always check insurance implications before changing super funds</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>Consider securing retail insurance before making changes to super</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>Regularly review coverage needs as family circumstances change</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mr-2 flex-shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  <span>Don't assume default coverage is adequate for your specific needs</span>
                </li>
              </ul>
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
            <Link href="/special-considerations" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Considerations</h3>
                <p className="text-gray-700 mb-4">
                  Learn about TPD coverage issues, income protection limitations, and other special considerations.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Learn more →</span>
              </div>
            </Link>
            
            {/* Link 2 */}
            <Link href="/comparison" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare Policies</h3>
                <p className="text-gray-700 mb-4">
                  See how super insurance compares to retail policies side by side.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Learn more →</span>
              </div>
            </Link>
            
            {/* Link 3 */}
            <Link href="/take-action" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Take Action</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to check your current coverage and explore better options.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Learn more →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find out if you're at risk
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Use our calculator to determine if your current life insurance through super is leaving you and your family vulnerable.
            </p>
            <Link
              href="/calculator"
              className="rounded-md bg-red-600 px-6 py-3 text-lg font-medium text-white hover:bg-red-700"
            >
              Assess Your Coverage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
