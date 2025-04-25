import UserAvatar from './UserAvatar';

interface ProspectLead {
  id: number;
  name: string;
  stage: string;
}

export default function ProspectLeads() {
  const prospects: ProspectLead[] = [
    { id: 1, name: 'Wade Warren', stage: 'Initial Inquiry' },
    { id: 2, name: 'Ava Wright', stage: 'Initial Inquiry' },
    { id: 3, name: 'Cody Fisher', stage: 'Initial Inquiry' }
  ];
  
  return (
    <div className="card">
      <h2 className="text-lg font-semibold mb-6">Prospect Leads</h2>
      
      <div className="space-y-4">
        {prospects.map((prospect) => (
          <div key={prospect.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <UserAvatar name={prospect.name} size="md" />
              <div className="ml-3">
                <div className="font-medium">{prospect.name}</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Stage: {prospect.stage}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 