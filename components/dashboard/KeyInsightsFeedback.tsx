import { FaAward } from 'react-icons/fa';

export default function KeyInsightsFeedback() {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-6">Key Insights & Feedback</h2>
      
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="text-4xl font-bold">10%</div>
          <div className="text-sm text-gray-500 mt-1">Sales Growth</div>
        </div>
        <div className="flex items-center text-secondary bg-blue-50 rounded-full px-3 py-1">
          <FaAward className="mr-2" />
          <span className="text-sm font-medium">Top Performer</span>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Feedback</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
            <p className="text-sm text-gray-700">
              Franchisees are requesting more detailed training materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 