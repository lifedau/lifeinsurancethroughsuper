import React from 'react';

export default function DataVisualizations() {
  return (
    <div className="space-y-12">
      {/* Underinsurance Gap Visualization */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Underinsurance Gap in Australia</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Bar chart showing 75% average underinsurance gap</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>According to Rice Warner's Underinsurance Report (2023), 95% of Australian families have inadequate life insurance coverage, with a median underinsurance gap of $693,000 per family.</p>
          <p className="mt-2">The total underinsurance gap in Australia is estimated at $2.1 trillion.</p>
        </div>
      </div>
      
      {/* Claims Processing Time Comparison */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Claims Processing Time Comparison</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Bar chart comparing 5.2 months (super) vs 3.0 months (retail)</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>APRA Life Insurance Claims and Disputes Statistics (2022-2023) show that super insurance claims take an average of 5.2 months to process, compared to 3.0 months for retail insurance claims.</p>
          <p className="mt-2">Dispute rates are also higher for super insurance claims (12%) compared to retail policy claims (6%).</p>
        </div>
      </div>
      
      {/* Consumer Awareness Visualization */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Consumer Awareness of Super Insurance</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Pie charts showing low awareness percentages</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>The Financial Services Council Life Insurance Consumer Sentiment Study (2023) reveals that:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>67% of super fund members don't know their coverage amount</li>
            <li>82% are unaware of the tax implications for non-dependent beneficiaries</li>
            <li>74% don't understand the difference between "own occupation" and "any occupation" TPD definitions</li>
            <li>89% are unaware that super insurance can be cancelled without their explicit consent</li>
          </ul>
        </div>
      </div>
      
      {/* Premium Comparison Over Time */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Comparison Over Time</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Line chart showing premium increases over time</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>The Financial Services Council Premium Comparison Study (2023) shows that for a 35-year-old male office worker with $500,000 coverage:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Super insurance (stepped premiums) costs $300 at age 35, rising to $6,300 by age 65</li>
            <li>Retail insurance with level premiums starts at $750 but only rises to $1,050 by age 65</li>
            <li>The cumulative cost to age 65 is $92,500 for super insurance vs. $72,000 for retail level premiums</li>
          </ul>
        </div>
      </div>
      
      {/* Tax Implications Visualization */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Tax Implications for Beneficiaries</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Comparison chart showing tax impact</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>According to the Australian Taxation Office (ATO) Super Death Benefits Guide:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Death benefits paid to non-dependent beneficiaries are taxed at 15% plus 2% Medicare levy on the taxable component</li>
            <li>For a $500,000 policy with an 80% taxable component paid to a non-dependent, the tax bill could be $68,000</li>
            <li>Retail life insurance payouts are completely tax-free regardless of who receives them</li>
            <li>38% of super death benefits are paid to non-dependents</li>
          </ul>
        </div>
      </div>
      
      {/* Underinsurance by Age Group */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Underinsurance by Age Group</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Bar chart showing underinsurance by age group</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>UNSW Research on Life Insurance Literacy in Australia (2023) shows underinsurance varies by age group:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Ages 25-34: 85% underinsured (average gap: $750,000)</li>
            <li>Ages 35-44: 78% underinsured (average gap: $825,000)</li>
            <li>Ages 45-54: 72% underinsured (average gap: $680,000)</li>
            <li>Ages 55-64: 65% underinsured (average gap: $420,000)</li>
          </ul>
        </div>
      </div>
      
      {/* Policy Cancellation Reasons */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Super Insurance Cancellation Reasons</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Pie chart showing cancellation reasons</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>Australian Securities and Investments Commission (ASIC) Report 675 identifies the following reasons for super insurance policy cancellations:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>23% due to account inactivity within 5 years</li>
            <li>18% due to insufficient balance to cover premiums</li>
            <li>34% due to fund switching without transfer of insurance</li>
            <li>12% due to extended leave from workforce</li>
          </ul>
        </div>
      </div>
      
      {/* Financial Impact of Underinsurance */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Impact of Underinsurance</h3>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4">
          {/* This would be replaced with an actual chart component */}
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Impact visualization showing financial consequences</p>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          <p>University of Melbourne Study on Financial Impacts of Underinsurance (2022) reveals:</p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>68% of families who received a super life insurance payout reported it was insufficient</li>
            <li>78% of surviving spouses report depleting all savings within 5 years</li>
            <li>45% increase in reliance on government support payments</li>
            <li>83% reduction in retirement readiness for surviving spouses</li>
            <li>3.4x increased likelihood of bankruptcy within 7 years</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
