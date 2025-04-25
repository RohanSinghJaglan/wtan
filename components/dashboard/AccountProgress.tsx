import CircularProgress from './CircularProgress';
import { FaCheckCircle } from 'react-icons/fa';

export default function AccountProgress() {
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-6">Account Progress</h2>
      
      <div className="flex flex-col items-center mb-6">
        <CircularProgress percentage={85} />
      </div>
      
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Steps Completed</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 text-green-500">
              <FaCheckCircle size={16} />
            </div>
            <span className="text-gray-700">Profile Setup</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 text-green-500">
              <FaCheckCircle size={16} />
            </div>
            <span className="text-gray-700">Initial Training</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 text-green-500">
              <FaCheckCircle size={16} />
            </div>
            <span className="text-gray-700">Legal Documents</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Steps Remaining</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 text-gray-300">
              <FaCheckCircle size={16} />
            </div>
            <span className="text-gray-700">Financial Integration</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 mr-3 text-gray-300">
              <FaCheckCircle size={16} />
            </div>
            <span className="text-gray-700">Final Review</span>
          </div>
        </div>
      </div>
    </div>
  );
} 