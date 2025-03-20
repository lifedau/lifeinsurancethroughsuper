import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life Insurance Through Super | Australian Coverage Guide",
  description: "Learn about the limitations of life insurance through superannuation in Australia and how to ensure your family is properly protected.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="sticky top-0 z-50 w-full border-b bg-white">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                LifeInsuranceThroughSuper.com.au
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/about" className="text-sm font-medium hover:text-blue-600">
                About Super Insurance
              </Link>
              <Link href="/limitations" className="text-sm font-medium hover:text-blue-600">
                Limitations & Risks
              </Link>
              <Link href="/comparison" className="text-sm font-medium hover:text-blue-600">
                Compare Policies
              </Link>
              <Link href="/calculator" className="text-sm font-medium hover:text-blue-600">
                Calculator Tools
              </Link>
              <Link href="/statistics" className="text-sm font-medium hover:text-blue-600">
                Statistics & Research
              </Link>
              <Link href="/take-action" className="text-sm font-medium hover:text-blue-600">
                Take Action
              </Link>
            </nav>
            <div className="hidden md:block">
              <Link 
                href="/calculator" 
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                Check Your Coverage
              </Link>
            </div>
            <button className="md:hidden p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About This Site</h3>
                <p className="text-sm text-gray-600">
                  Educational resource about life insurance through superannuation in Australia.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600">
                      About Super Insurance
                    </Link>
                  </li>
                  <li>
                    <Link href="/limitations" className="text-sm text-gray-600 hover:text-blue-600">
                      Limitations & Risks
                    </Link>
                  </li>
                  <li>
                    <Link href="/comparison" className="text-sm text-gray-600 hover:text-blue-600">
                      Compare Policies
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Tools</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/calculator" className="text-sm text-gray-600 hover:text-blue-600">
                      Coverage Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="/comparison" className="text-sm text-gray-600 hover:text-blue-600">
                      Policy Comparison
                    </Link>
                  </li>
                  <li>
                    <Link href="/statistics" className="text-sm text-gray-600 hover:text-blue-600">
                      Statistics & Research
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-sm text-gray-600 hover:text-blue-600">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-sm text-gray-600 hover:text-blue-600">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-blue-600">
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                © {new Date().getFullYear()} LifeInsuranceThroughSuper.com.au. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
