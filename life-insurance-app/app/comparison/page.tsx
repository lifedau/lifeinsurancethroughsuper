import Link from "next/link";

export default function ComparisonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Comparison: Super vs Retail</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Super vs Retail Life Insurance
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            See how life insurance through superannuation compares to retail policies across key features, benefits, and limitations.
          </p>
        </div>
      </section>

      {/* Comparison Tool */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-3">
              <div className="p-6 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Feature</h2>
              </div>
              <div className="p-6 bg-blue-50">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Super Insurance</h2>
              </div>
              <div className="p-6 bg-green-50">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Retail Insurance</h2>
              </div>
            </div>

            {/* Coverage Amount */}
            <div className="grid grid-cols-3 border-t border-gray-200">
              <div className="p-6 bg-gray-50">
                <h3 className="font-medium text-gray-900">Coverage Amount</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Typically 1-4x annual salary, determined by fund</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-sm text-red-700">Limited</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Customizable to your specific needs and circumstances</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-sm text-green-700">Flexible</span>
                </div>
              </div>
            </div>

            {/* Premiums */}
            <div className="grid grid-cols-3 border-t border-gray-200">
              <div className="p-6 bg-gray-50">
                <h3 className="font-medium text-gray-900">Premiums</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Automatically deducted from super balance</p>
                <p className="text-gray-700 mt-2">Stepped premiums that increase with age</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span className="text-sm text-yellow-700">Mixed benefit</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Paid directly or can be funded through super</p>
                <p className="text-gray-700 mt-2">Option for level premiums that remain stable</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-sm text-green-700">More options</span>
                </div>
              </div>
            </div>

            {/* Renewability */}
            <div className="grid grid-cols-3 border-t border-gray-200">
              <div className="p-6 bg-gray-50">
                <h3 className="font-medium text-gray-900">Renewability</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Not guaranteed renewable</p>
                <p className="text-gray-700 mt-2">Coverage can change or stop without notice</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-sm text-red-700">High risk</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Guaranteed renewable until expiry age</p>
                <p className="text-gray-700 mt-2">Cannot be cancelled as long as premiums are paid</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-sm text-green-700">Secure</span>
                </div>
              </div>
            </div>

            {/* Beneficiaries */}
            <div className="grid grid-cols-3 border-t border-gray-200">
              <div className="p-6 bg-gray-50">
                <h3 className="font-medium text-gray-900">Beneficiaries</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Limited by superannuation law</p>
                <p className="text-gray-700 mt-2">Subject to trustee discretion</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-sm text-red-700">Restricted</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Unlimited choice of beneficiaries</p>
                <p className="text-gray-700 mt-2">Binding nominations that cannot be overridden</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-sm text-green-700">Flexible</span>
                </div>
              </div>
            </div>

            {/* Tax Implications */}
            <div className="grid grid-cols-3 border-t border-gray-200">
              <div className="p-6 bg-gray-50">
                <h3 className="font-medium text-gray-900">Tax Implications</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Up to 32% tax for non-dependent beneficiaries</p>
                <p className="text-gray-700 mt-2">Tax-free for dependents</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-sm text-red-700">Potential tax burden</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Tax-free for all beneficiaries</p>
                <p className="text-gray-700 mt-2">No tax implications regardless of relationship</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-sm text-green-700">Tax-free</span>
                </div>
              </div>
            </div>

            {/* Claims Process */}
            <div className="grid grid-cols-3 border-t border-gray-200">
              <div className="p-6 bg-gray-50">
                <h3 className="font-medium text-gray-900">Claims Process</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Two-step process through super trustee and insurer</p>
                <p className="text-gray-700 mt-2">Typically slower resolution</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-sm text-red-700">More complex</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Direct process with insurer</p>
                <p className="text-gray-700 mt-2">Typically faster resolution</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-sm text-green-700">Streamlined</span>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="grid grid-cols-3 border-t border-gray-200">
              <div className="p-6 bg-gray-50">
                <h3 className="font-medium text-gray-900">Additional Benefits</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Limited or no additional benefits</p>
                <p className="text-gray-700 mt-2">No funeral advancement</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 mr-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="15" y1="9" x2="9" y2="15"></line>
                    <line x1="9" y1="9" x2="15" y2="15"></line>
                  </svg>
                  <span className="text-sm text-red-700">Basic coverage only</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">Funeral advancement benefits</p>
                <p className="text-gray-700 mt-2">Accommodation benefits, grief counseling</p>
                <div className="mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-1">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span className="text-sm text-green-700">Comprehensive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filters */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Customize Your Comparison
          </h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Age Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Age
                </label>
                <div className="relative pt-1">
                  <input
                    type="range"
                    min="18"
                    max="65"
                    defaultValue="35"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>18</span>
                    <span>40</span>
                    <span>65</span>
                  </div>
                </div>
              </div>

              {/* Occupation Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Occupation
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>Office Worker</option>
                  <option>Healthcare Professional</option>
                  <option>Trade Worker</option>
                  <option>Education</option>
                  <option>Other Professional</option>
                </select>
              </div>

              {/* Smoking Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Smoking Status
                </label>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      id="non-smoker"
                      name="smoking-status"
                      type="radio"
                      defaultChecked
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="non-smoker" className="ml-2 block text-sm text-gray-700">
                      Non-smoker
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="smoker"
                      name="smoking-status"
                      type="radio"
                      className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <label htmlFor="smoker" className="ml-2 block text-sm text-gray-700">
                      Smoker
                    </label>
                  </div>
                </div>
              </div>

              {/* Coverage Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Coverage Amount
                </label>
                <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                  <option>$250,000</option>
                  <option>$500,000</option>
                  <option>$750,000</option>
                  <option>$1,000,000</option>
                  <option>$1,500,000</option>
                </select>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Comparison
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Results */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Detailed Comparison Results
          </h2>
          
          {/* Visual Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Chart 1: Cost Over Time */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cost Over Time</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <div className="p-4 flex items-center justify-center">
                  <div className="w-full h-64 relative">
                    {/* X-axis */}
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-300"></div>
                    {/* Y-axis */}
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-300"></div>
                    
                    {/* Super Insurance Line (increasing sharply) */}
                    <div className="absolute bottom-0 left-0 w-full h-full">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,100 C20,90 40,70 60,40 S80,10 100,0" fill="none" stroke="#3B82F6" strokeWidth="2"></path>
                      </svg>
                    </div>
                    
                    {/* Retail Insurance Line (increasing gradually) */}
                    <div className="absolute bottom-0 left-0 w-full h-full">
                      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,100 C20,95 40,85 60,75 S80,60 100,50" fill="none" stroke="#10B981" strokeWidth="2"></path>
                      </svg>
                    </div>
                    
                    {/* Legend */}
                    <div className="absolute top-2 right-2 bg-white p-2 rounded-md shadow-sm">
                      <div className="flex items-center mb-1">
                        <div className="w-3 h-3 bg-blue-500 mr-2"></div>
                        <span className="text-xs text-gray-700">Super</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 mr-2"></div>
                        <span className="text-xs text-gray-700">Retail</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Super insurance premiums increase sharply with age, while retail policies with level premiums remain more stable over time.
              </p>
            </div>
            
            {/* Chart 2: Coverage Comparison */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Coverage Comparison</h3>
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg">
                <div className="p-4 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Coverage Amount</span>
                        <span className="text-sm font-medium text-gray-700">$500,000</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Super: $300,000</span>
                        <span>60%</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Beneficiary Options</span>
                        <span className="text-sm font-medium text-gray-700">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Super: Limited</span>
                        <span>40%</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Additional Benefits</span>
                        <span className="text-sm font-medium text-gray-700">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Super: Basic</span>
                        <span>30%</span>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">Overall Value</span>
                        <span className="text-sm font-medium text-gray-700">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Super</span>
                        <span>45%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Retail policies typically offer more comprehensive coverage and benefits compared to super insurance.
              </p>
            </div>
          </div>
          
          {/* Highlighted Differences */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Differences Explained</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Coverage Flexibility</h4>
                <p className="text-gray-700 mb-4">
                  Retail policies allow you to customize your coverage amount based on your specific needs, debts, and family situation. Super insurance typically offers standardized coverage based on broad demographic factors.
                </p>
                
                <h4 className="font-medium text-gray-900 mb-2">Premium Structure</h4>
                <p className="text-gray-700">
                  Super insurance usually only offers stepped premiums that increase with age. Retail policies give you the option of level premiums that remain more stable over time, potentially saving you money in the long run.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Beneficiary Control</h4>
                <p className="text-gray-700 mb-4">
                  With retail policies, you have complete control over who receives your benefits. Super insurance is limited by superannuation law and trustee discretion, which can create complications for non-traditional family structures.
                </p>
                
                <h4 className="font-medium text-gray-900 mb-2">Tax Implications</h4>
                <p className="text-gray-700">
                  Retail policy payouts are tax-free regardless of who receives them. Super insurance payouts can be taxed up to 32% when paid to non-dependent beneficiaries, significantly reducing the financial support for your loved ones.
                </p>
              </div>
            </div>
          </div>
          
          {/* Recommendation */}
          <div className="bg-green-50 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Recommendation</h3>
            <p className="text-gray-700 mb-4">
              Based on comprehensive analysis, retail life insurance policies generally offer better value, more flexibility, and greater security for most Australians compared to default super insurance.
            </p>
            <p className="text-gray-700 mb-4">
              However, the best option depends on your specific circumstances, including your age, health, family situation, and financial goals. For many people, a combination approach works well—maintaining some basic coverage through super while supplementing with a retail policy for comprehensive protection.
            </p>
            <p className="text-gray-700">
              <strong>Did you know?</strong> You can still fund retail insurance premiums through your super, combining the tax advantages of super with the superior benefits of retail policies.
            </p>
          </div>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Important Considerations
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="prose max-w-none">
                <p>
                  When comparing super and retail life insurance, it's important to look beyond just the premium cost. Consider these key factors:
                </p>
                
                <h3>1. Long-term Value</h3>
                <p>
                  While super insurance may seem cheaper in the short term (since premiums come from your super balance rather than your pocket), retail policies often provide better long-term value through guaranteed renewability, level premium options, and more comprehensive coverage.
                </p>
                
                <h3>2. Family Situation</h3>
                <p>
                  If you have a non-traditional family structure or wish to leave benefits to people outside your immediate family (such as siblings, friends, or charitable organizations), retail policies offer significantly more flexibility in beneficiary arrangements.
                </p>
                
                <h3>3. Career Changes</h3>
                <p>
                  If you change jobs frequently or plan to take extended career breaks, retail policies provide continuity of coverage regardless of your employment status. Super insurance can be disrupted by job changes or contribution gaps.
                </p>
                
                <h3>4. Expert Advice</h3>
                <p>
                  Consider consulting with a financial advisor who specializes in insurance to determine the best approach for your specific situation. They can help you calculate your coverage needs and identify the most cost-effective way to structure your insurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Content Links */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Link 1 */}
            <Link href="/calculator" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculate Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Use our calculator to determine your ideal coverage amount based on your specific needs.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Try the calculator →</span>
              </div>
            </Link>
            
            {/* Link 2 */}
            <Link href="/special-considerations" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Special Considerations</h3>
                <p className="text-gray-700 mb-4">
                  Learn about TPD coverage differences, income protection limitations, and other important factors.
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
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to improve your coverage?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward better protection for you and your family with a policy that meets your specific needs.
          </p>
          <Link
            href="/take-action"
            className="rounded-md bg-white px-6 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50"
          >
            Take Action Now
          </Link>
        </div>
      </section>
    </div>
  );
}
