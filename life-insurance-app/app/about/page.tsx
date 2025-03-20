import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">About Super Life Insurance</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Understanding Life Insurance Through Super
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Life insurance through superannuation is a common way many Australians obtain coverage, but it's important to understand how it works and its limitations.
          </p>
        </div>
      </section>

      {/* What is Super Life Insurance */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What is Life Insurance Through Super?
              </h2>
              <p className="text-gray-700 mb-4">
                Life insurance through superannuation is coverage that's automatically included as part of your super fund membership. It provides a lump sum payment to your beneficiaries if you pass away or become terminally ill.
              </p>
              <p className="text-gray-700 mb-4">
                Most Australians with super have some form of default life insurance coverage, often bundled with Total and Permanent Disability (TPD) insurance and sometimes Income Protection insurance.
              </p>
              <p className="text-gray-700">
                This insurance is paid for through your superannuation contributions, with premiums automatically deducted from your super balance.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Key Point</h3>
              </div>
              <p className="text-gray-700">
                While convenient, default life insurance through super is designed to provide only basic coverage and may not be sufficient for your specific needs and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Super Life Insurance Works
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Flow Chart */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Automatic Enrollment</h3>
                      <p className="text-gray-700">
                        When you join a super fund, you're typically automatically enrolled in their default life insurance coverage unless you opt out.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:hidden w-6 h-6 rounded-full bg-blue-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Premium Deductions</h3>
                      <p className="text-gray-700">
                        Insurance premiums are automatically deducted from your super balance, typically on a monthly or quarterly basis.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                    <div className="md:hidden w-6 h-6 rounded-full bg-blue-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Coverage Determination</h3>
                      <p className="text-gray-700">
                        Your coverage amount is typically determined by your age, occupation, and sometimes your super balance or salary.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:hidden w-6 h-6 rounded-full bg-blue-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Claim Process</h3>
                      <p className="text-gray-700">
                        In the event of death or terminal illness, a claim is made to the super fund trustee, who then determines the distribution of benefits according to superannuation law.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                    <div className="md:hidden w-6 h-6 rounded-full bg-blue-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Default Coverage Explained */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Default Coverage Explained
          </h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 bg-blue-50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Typically Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Basic death benefit (typically 1-4x annual salary)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Terminal illness benefit</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Basic TPD coverage (any occupation definition)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2 flex-shrink-0 mt-1">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span className="text-gray-700">Sometimes basic income protection (limited to 2 years)</span>
                  </li>
                </ul>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">What's Often Missing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span className="text-gray-700">Adequate coverage amount for mortgage and family needs</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span className="text-gray-700">Guaranteed renewability</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span className="text-gray-700">TPD "own occupation" definition</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span className="text-gray-700">Funeral advancement benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-2 flex-shrink-0 mt-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                    <span className="text-gray-700">Level premiums (costs increase with age)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History and Background */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            History and Background
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>
              
              {/* Event 1 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">1992</h3>
                      <p className="text-gray-700">
                        Introduction of the Superannuation Guarantee, making super contributions mandatory for employers.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-gray-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:hidden w-6 h-6 rounded-full bg-gray-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2005-2007</h3>
                      <p className="text-gray-700">
                        Growth of default insurance within super funds, with most funds beginning to offer automatic life insurance coverage.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-gray-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                    <div className="md:hidden w-6 h-6 rounded-full bg-gray-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Event 3 */}
              <div className="relative mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2013</h3>
                      <p className="text-gray-700">
                        MySuper reforms introduced, standardizing default super products including insurance offerings.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-gray-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="md:hidden w-6 h-6 rounded-full bg-gray-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
              
              {/* Event 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 order-1 md:order-2 mb-4 md:mb-0">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">2019</h3>
                      <p className="text-gray-700">
                        Protecting Your Super Package legislation introduced to prevent erosion of super balances by insurance premiums, making insurance opt-in for inactive accounts.
                      </p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full bg-gray-500 transform -translate-x-1/2"></div>
                  <div className="md:w-1/2 md:pl-12 order-2 md:order-1">
                    <div className="md:hidden w-6 h-6 rounded-full bg-gray-500 mx-auto mb-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Statistics */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Current Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">70%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">of Australians</h3>
              <p className="text-gray-700">
                Have some form of life insurance through their superannuation fund.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Source: ASIC MoneySmart, 2023
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">$16T</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Underinsurance Gap</h3>
              <p className="text-gray-700">
                Estimated total life insurance underinsurance gap in Australia.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Source: Rice Warner Underinsurance Report, 2022
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">42%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Awareness Rate</h3>
              <p className="text-gray-700">
                Of Australians are aware of the details of their life insurance coverage through super.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Source: MetLife Insurance Literacy Survey, 2023
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link 
              href="/statistics" 
              className="text-blue-600 font-medium hover:text-blue-700"
            >
              View more detailed statistics →
            </Link>
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
            <Link href="/limitations" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Limitations & Risks</h3>
                <p className="text-gray-700 mb-4">
                  Understand the potential pitfalls and coverage gaps in super life insurance.
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
            <Link href="/calculator" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculate Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Use our tools to determine if your current coverage is adequate.
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
          <div className="bg-blue-50 rounded-lg shadow-md p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to check your coverage?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Use our calculator to determine if your current life insurance through super is adequate for your needs.
            </p>
            <Link
              href="/calculator"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700"
            >
              Use Our Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
