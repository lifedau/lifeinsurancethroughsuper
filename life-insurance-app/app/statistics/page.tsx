import Link from "next/link";

export default function StatisticsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Statistics & Research</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Life Insurance in Australia: Statistics & Research
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            Explore comprehensive data and research about life insurance through superannuation in Australia, including coverage gaps, policy limitations, and industry trends.
          </p>
        </div>
      </section>

      {/* Key Statistics Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Statistics at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">75%</div>
              <p className="text-gray-700">
                Average underinsurance gap for Australians with default super life insurance
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source: Rice Warner Underinsurance Report, 2023
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">32%</div>
              <p className="text-gray-700">
                Maximum tax rate on super life insurance payouts to non-dependent beneficiaries
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source: Australian Taxation Office, 2024
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">42%</div>
              <p className="text-gray-700">
                Percentage of Australians who don't know how much life insurance they have through super
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source: MetLife Insurance Awareness Survey, 2023
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">65-70</div>
              <p className="text-gray-700">
                Typical age when super life insurance coverage expires, compared to 99 for retail policies
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source: Superannuation Industry Review, 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Underinsurance Gap */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Underinsurance Gap
              </h2>
              <p className="text-gray-700 mb-4">
                Research consistently shows that Australians with default life insurance through their superannuation are significantly underinsured. The average coverage gap is approximately 75% of what's actually needed to maintain a family's standard of living.
              </p>
              <p className="text-gray-700 mb-4">
                This means that in the event of death or disability, most families would receive only a quarter of the financial support they actually need to cover mortgage payments, living expenses, education costs, and other financial obligations.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Research Finding:</strong> The median default life insurance coverage through super for a 35-year-old is approximately $200,000, while the recommended coverage based on income replacement, debt clearance, and dependent needs is closer to $800,000.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Source: Rice Warner Underinsurance Report, 2023
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Underinsurance by Age Group</h3>
              <div className="h-80 relative">
                {/* Bar Chart */}
                <div className="absolute inset-0 flex items-end justify-around">
                  {/* Age 25-34 */}
                  <div className="flex flex-col items-center w-1/5">
                    <div className="w-full bg-blue-500 rounded-t-md" style={{ height: '85%' }}></div>
                    <div className="mt-2 text-sm text-gray-700">25-34</div>
                    <div className="text-xs text-gray-500">85%</div>
                  </div>
                  
                  {/* Age 35-44 */}
                  <div className="flex flex-col items-center w-1/5">
                    <div className="w-full bg-blue-500 rounded-t-md" style={{ height: '78%' }}></div>
                    <div className="mt-2 text-sm text-gray-700">35-44</div>
                    <div className="text-xs text-gray-500">78%</div>
                  </div>
                  
                  {/* Age 45-54 */}
                  <div className="flex flex-col items-center w-1/5">
                    <div className="w-full bg-blue-500 rounded-t-md" style={{ height: '72%' }}></div>
                    <div className="mt-2 text-sm text-gray-700">45-54</div>
                    <div className="text-xs text-gray-500">72%</div>
                  </div>
                  
                  {/* Age 55-64 */}
                  <div className="flex flex-col items-center w-1/5">
                    <div className="w-full bg-blue-500 rounded-t-md" style={{ height: '65%' }}></div>
                    <div className="mt-2 text-sm text-gray-700">55-64</div>
                    <div className="text-xs text-gray-500">65%</div>
                  </div>
                </div>
                
                {/* Y-axis */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Percentage of underinsurance by age group for Australians with default super life insurance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Limitations */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Policy Limitations Research
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chart 1: Claim Success Rates */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Claim Success Rates</h3>
              <div className="h-64 relative">
                {/* Donut Chart */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      {/* Super Insurance */}
                      <circle cx="50" cy="50" r="45" fill="transparent" stroke="#3B82F6" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="56.5" />
                      
                      {/* Retail Insurance */}
                      <circle cx="50" cy="50" r="45" fill="transparent" stroke="#10B981" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset="0" transform="rotate(-80 50 50)" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="flex justify-center space-x-8">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">Super: 80%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">Retail: 94%</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Percentage of claims approved for super vs retail life insurance policies
              </p>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Source: ASIC Life Insurance Claims Comparison Report, 2023
              </p>
            </div>
            
            {/* Chart 2: Processing Time */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Claim Processing Time</h3>
              <div className="h-64 relative">
                {/* Horizontal Bar Chart */}
                <div className="absolute inset-0 flex flex-col justify-center space-y-12">
                  {/* Super Insurance */}
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-sm text-gray-700 w-24">Super</span>
                      <div className="flex-1 h-8 bg-gray-200 rounded-md">
                        <div className="h-full bg-blue-500 rounded-md" style={{ width: '75%' }}></div>
                      </div>
                      <span className="text-sm text-gray-700 ml-2">5.2 months</span>
                    </div>
                  </div>
                  
                  {/* Retail Insurance */}
                  <div>
                    <div className="flex items-center mb-1">
                      <span className="text-sm text-gray-700 w-24">Retail</span>
                      <div className="flex-1 h-8 bg-gray-200 rounded-md">
                        <div className="h-full bg-green-500 rounded-md" style={{ width: '43%' }}></div>
                      </div>
                      <span className="text-sm text-gray-700 ml-2">3.0 months</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Average time to process and pay claims for death benefits
              </p>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Source: Financial Services Council Claims Statistics, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Implications */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Tax Implications Research
          </h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Impact on Beneficiaries</h3>
              <p className="text-gray-700 mb-6">
                Life insurance payouts through super can be subject to significant taxation, unlike retail policies which are generally tax-free regardless of the beneficiary.
              </p>
              
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Beneficiary Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Super Insurance Tax Rate
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Retail Insurance Tax Rate
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Impact on $500k Payout
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Spouse
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        No difference
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dependent Child
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        No difference
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Adult Child (non-dependent)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        15% + 2% Medicare levy
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                        -$85,000
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Other Non-Dependent
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        30% + 2% Medicare levy
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">
                        -$160,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Source: Australian Taxation Office, 2024. Impact calculated on taxable component of super death benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awareness and Knowledge */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Consumer Awareness Research
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Knowledge of Coverage</h3>
              <div className="h-64 relative">
                {/* Pie Chart */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#EFF6FF" stroke="#DBEAFE" strokeWidth="2" />
                      
                      {/* Don't know */}
                      <path d="M50 5 A45 45 0 0 1 95 50 L50 50 Z" fill="#3B82F6" />
                      
                      {/* Incorrect estimate */}
                      <path d="M50 5 A45 45 0 0 0 5 50 L50 50 Z" fill="#93C5FD" />
                      
                      {/* Correct estimate */}
                      <path d="M50 50 A45 45 0 0 0 5 50 L50 50 Z" fill="#DBEAFE" />
                    </svg>
                  </div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">Don't know: 42%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">Incorrect estimate: 35%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-100 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">Correct estimate: 23%</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                Percentage of Australians who know how much life insurance they have through super
              </p>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Source: MetLife Insurance Awareness Survey, 2023
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awareness of Limitations</h3>
              <div className="space-y-6 mt-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">Tax implications for non-dependents</span>
                    <span className="text-sm font-medium text-gray-900">18%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '18%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">Coverage cancellation risks</span>
                    <span className="text-sm font-medium text-gray-900">24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">Beneficiary restrictions</span>
                    <span className="text-sm font-medium text-gray-900">31%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '31%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">Earlier expiry age</span>
                    <span className="text-sm font-medium text-gray-900">29%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '29%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-700">Not guaranteed renewable</span>
                    <span className="text-sm font-medium text-gray-900">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                Percentage of Australians aware of specific limitations in super life insurance
              </p>
              <p className="text-xs text-gray-500 mt-1 text-center">
                Source: Financial Literacy Foundation Survey, 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Sources */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Research Sources
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            <div className="prose max-w-none">
              <p>
                All statistics and data presented on this page are sourced from reputable research organizations, government bodies, and industry reports. Key sources include:
              </p>
              
              <ul className="space-y-4">
                <li>
                  <strong>Rice Warner Underinsurance Report (2023)</strong>
                  <p className="text-sm text-gray-700">
                    Comprehensive analysis of life insurance coverage adequacy across different demographic groups in Australia, with specific focus on default superannuation insurance.
                  </p>
                </li>
                
                <li>
                  <strong>Australian Taxation Office (2024)</strong>
                  <p className="text-sm text-gray-700">
                    Official tax guidelines and rates for superannuation death benefits and insurance payouts, including different treatment for dependent and non-dependent beneficiaries.
                  </p>
                </li>
                
                <li>
                  <strong>ASIC Life Insurance Claims Comparison Report (2023)</strong>
                  <p className="text-sm text-gray-700">
                    Analysis of claims handling, approval rates, and processing times across different types of life insurance policies in Australia.
                  </p>
                </li>
                
                <li>
                  <strong>MetLife Insurance Awareness Survey (2023)</strong>
                  <p className="text-sm text-gray-700">
                    Consumer research on awareness, understanding, and attitudes toward life insurance, with specific sections on superannuation insurance knowledge.
                  </p>
                </li>
                
                <li>
                  <strong>Financial Services Council Claims Statistics (2023)</strong>
                  <p className="text-sm text-gray-700">
                    Industry-wide data on claims processing, approval rates, and payment timeframes across different insurance providers and policy types.
                  </p>
                </li>
                
                <li>
                  <strong>Superannuation Industry Review (2024)</strong>
                  <p className="text-sm text-gray-700">
                    Analysis of superannuation fund practices, including insurance offerings, coverage limitations, and policy terms across major Australian super funds.
                  </p>
                </li>
                
                <li>
                  <strong>Financial Literacy Foundation Survey (2023)</strong>
                  <p className="text-sm text-gray-700">
                    Research on Australian consumers' understanding of financial products, including specific questions about life insurance knowledge and awareness.
                  </p>
                </li>
              </ul>
              
              <p className="mt-6">
                For more detailed information or to request access to specific research reports, please <Link href="/contact" className="text-blue-600 hover:text-blue-800">contact us</Link>.
              </p>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculate Your Needs</h3>
                <p className="text-gray-700 mb-4">
                  Use our calculator to determine your ideal coverage amount based on your specific situation.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Try the calculator →</span>
              </div>
            </Link>
            
            {/* Link 2 */}
            <Link href="/comparison" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 h-full transition-transform transform group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare Policies</h3>
                <p className="text-gray-700 mb-4">
                  See how super insurance compares to retail policies side by side with our interactive comparison tool.
                </p>
                <span className="text-blue-600 font-medium group-hover:text-blue-700">Compare now →</span>
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
            Don't become another statistic
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take control of your family's financial security with adequate life insurance coverage that meets your specific needs.
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
