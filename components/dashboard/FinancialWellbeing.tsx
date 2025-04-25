import { FaArrowUp } from 'react-icons/fa';

export default function FinancialWellbeing() {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-6">Financial Wellbeing</h2>
      
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-4xl font-bold">20</div>
          <div className="text-sm text-gray-500 mt-1">Total Franchisees</div>
        </div>
        <div className="flex items-center bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
          <FaArrowUp className="mr-1" size={12} />
          <span>2.1%</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-2">Target</div>
          <div className="text-2xl font-bold">$500,000</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500 mb-2">Current</div>
          <div className="text-2xl font-bold">$450,000</div>
        </div>
      </div>
    </div>
  );
} 