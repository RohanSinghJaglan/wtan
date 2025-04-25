import ProgressBar from './ProgressBar';
import UserAvatar from './UserAvatar';
import { FaArrowUp } from 'react-icons/fa';

export default function FranchiseesOnboard() {
  const stageData = [
    { id: 1, name: 'Stage 1 (Initial Inquiry)', count: 2, color: '#1e88e5' },
    { id: 2, name: 'Stage 2 (Document Submission)', count: 7, color: '#38bdf8' },
    { id: 3, name: 'Stage 3 (Training)', count: 5, color: '#93c5fd' }
  ];
  
  const franchisees = [
    { id: 1, name: 'Sarah Johnson' },
    { id: 2, name: 'Michael Chen' },
    { id: 3, name: 'Emily Rodriguez' },
    { id: 4, name: 'David Kim' },
    { id: 5, name: 'Jessica Taylor' }
  ];
  
  const totalFranchisees = stageData.reduce((acc, stage) => acc + stage.count, 0);
  
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-6">Total Franchisees Onboard</h2>
      
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="text-4xl font-bold">{totalFranchisees}</div>
        </div>
        <div className="flex items-center bg-green-100 text-green-700 text-sm px-2 py-1 rounded">
          <FaArrowUp className="mr-1" size={12} />
          <span>7.4%</span>
        </div>
      </div>
      
      <div className="flex -space-x-2 mb-4">
        {franchisees.map(franchisee => (
          <UserAvatar 
            key={franchisee.id} 
            name={franchisee.name} 
            size="sm" 
          />
        ))}
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs">
          +7
        </div>
      </div>
      
      <div className="space-y-4">
        {stageData.map(stage => (
          <div key={stage.id} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">{stage.name}</span>
              <span className="font-medium">{String(stage.count).padStart(2, '0')}</span>
            </div>
            <ProgressBar 
              percentage={(stage.count / totalFranchisees) * 100} 
              color={stage.color} 
            />
          </div>
        ))}
      </div>
    </div>
  );
} 