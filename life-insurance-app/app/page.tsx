import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                75% of Australians are underinsured through their super
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Is your family properly protected? Discover the hidden risks of default life insurance through superannuation.
              </p>
              <Link
                href="/calculator"
                className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700"
              >
                Check Your Coverage
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-64 md:h-80">
                <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-3"></div>
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Did you know?</h3>
                  <p className="text-gray-700">
                    Default life insurance through super is often inadequate and can leave your family vulnerable when they need support the most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Facts About Super Life Insurance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fact 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Not Guaranteed Renewable</h3>
              <p className="text-gray-700">
                Your coverage can change or stop without notice, leaving you unprotected when you need it most.
              </p>
            </div>

            {/* Fact 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tax Implications</h3>
              <p className="text-gray-700">
                Payouts can be taxed up to 32% for non-dependent beneficiaries, reducing the financial support for your loved ones.
              </p>
            </div>

            {/* Fact 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Better Alternatives Exist</h3>
              <p className="text-gray-700">
                Retail policies offer better benefits, including funeral and accommodation advancements, and can still be funded through super.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Overview Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Hidden Risks of Super Life Insurance
              </h2>
              <p className="text-gray-700 mb-4">
                Many Australians assume they're adequately covered through their superannuation, but the reality is often very different. Default life insurance policies through super typically provide only basic coverage that falls short in many critical areas.
              </p>
              <p className="text-gray-700 mb-4">
                From limited beneficiary options to potential tax implications, these policies can leave your loved ones vulnerable at the worst possible time.
              </p>
              <Link
                href="/limitations"
                className="text-blue-600 font-medium hover:text-blue-700"
              >
                Learn more about the limitations →
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Limited Coverage</h3>
                    <p className="text-gray-700">Most Australians are underinsured by approximately 75%.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Beneficiary Restrictions</h3>
                    <p className="text-gray-700">Payouts are subject to trustee discretion and limited beneficiary options.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Cancellation Risks</h3>
                    <p className="text-gray-700">Coverage can be unknowingly cancelled when changing jobs or super funds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Explore Our Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/about" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:scale-105">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">About Super Insurance</h3>
                  <p className="text-gray-700">
                    Learn how life insurance through super works, its history, and current statistics.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/comparison" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:scale-105">
                <div className="h-48 bg-purple-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compare Policies</h3>
                  <p className="text-gray-700">
                    See how super insurance stacks up against retail policies with our comparison tool.
                  </p>
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/calculator" className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform group-hover:scale-105">
                <div className="h-48 bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Calculate Coverage</h3>
                  <p className="text-gray-700">
                    Use our calculator to determine if your current coverage meets your family's needs.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial/Case Study */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <blockquote className="text-xl italic text-gray-700 mb-4">
                "I thought my family was protected through my super fund's life insurance. It wasn't until my wife became seriously ill that I discovered how inadequate the coverage was. The payout wouldn't have covered our mortgage, let alone provided for our children's future."
              </blockquote>
              <p className="font-semibold text-gray-900">Michael S., Sydney</p>
              <p className="text-sm text-gray-600">Father of two who switched to a retail policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't leave your family's future to chance
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward proper protection by assessing your current coverage and understanding your options.
          </p>
          <Link
            href="/calculator"
            className="rounded-md bg-white px-6 py-3 text-lg font-medium text-blue-600 hover:bg-blue-50"
          >
            Assess Your Coverage Now
          </Link>
        </div>
      </section>
    </div>
  );
}
