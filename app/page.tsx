import DashboardLayout from '@/components/DashboardLayout';
import { FaCheckCircle, FaBell, FaUser, FaSearch, FaArrowUp, FaAward } from 'react-icons/fa';

export default function Home() {
  const completedSteps = [
    'Profile Setup',
    'Initial Training',
    'Legal Documents'
  ];
  
  const remainingSteps = [
    'Financial Integration',
    'Final Review'
  ];

  const franchiseeStages = [
    { name: 'Stage 1 (Initial Inquiry)', count: 2, color: '#1e88e5' },
    { name: 'Stage 2 (Document Submission)', count: 7, color: '#38bdf8' },
    { name: 'Stage 3 (Training)', count: 5, color: '#93c5fd' }
  ];

  const franchiseeAvatars = [
    { name: 'Sarah Johnson' },
    { name: 'Michael Chen' },
    { name: 'Emily Rodriguez' },
    { name: 'David Kim' },
    { name: 'Jessica Taylor' }
  ];

  const prospectLeads = [
    { name: 'Wade Warren', stage: 'Initial Inquiry' },
    { name: 'Ava Wright', stage: 'Initial Inquiry' },
    { name: 'Cody Fisher', stage: 'Initial Inquiry' }
  ];

  const pendingQuestions = [
    { 
      id: 1, 
      user: { name: 'Phoenix Baker', username: 'phoenix' }, 
      time: '5min ago',
      content: 'What are the requirements for opening a new store?'
    },
    { 
      id: 2, 
      user: { name: 'Koray Okumus', username: 'koray' }, 
      time: '4hr ago',
      content: 'How do I manage inventory effectively?'
    }
  ];

  const totalFranchisees = franchiseeStages.reduce((sum, stage) => sum + stage.count, 0);
  
  return (
    <DashboardLayout>
      <div style={{ padding: '20px' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Welcome, Ashraf</h1>
            <div style={{ display: 'inline-block', backgroundColor: '#E0F2FE', color: '#0369A1', padding: '2px 8px', borderRadius: '4px', fontSize: '14px', marginTop: '4px' }}>Admin</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ position: 'relative' }}>
              <input 
                type="text" 
                placeholder="Search..." 
                style={{ 
                  border: '1px solid #e5e7eb',
                  padding: '6px 12px 6px 32px',
                  borderRadius: '4px',
                  width: '200px'
                }} 
              />
              <FaSearch style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            </div>
            
            <div style={{ position: 'relative' }}>
              <FaBell size={18} color="#4b5563" />
              <span style={{ 
                position: 'absolute', 
                top: '-5px', 
                right: '-5px', 
                background: 'red',
                color: 'white',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                fontSize: '11px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                3
              </span>
            </div>
            
            <div style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%', 
              backgroundColor: '#38bdf8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              <FaUser size={16} />
            </div>
          </div>
        </header>

        {/* Main Dashboard Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {/* Account Progress Card */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Account Progress</h2>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <svg width="150" height="150" viewBox="0 0 100 100">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#e5e7eb" 
                  strokeWidth="10" 
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="45" 
                  fill="none" 
                  stroke="#38bdf8" 
                  strokeWidth="10" 
                  strokeDasharray="283" 
                  strokeDashoffset="42" 
                  transform="rotate(-90 50 50)" 
                />
                <text 
                  x="50" 
                  y="55" 
                  textAnchor="middle" 
                  fontSize="20" 
                  fontWeight="bold" 
                  fill="#333"
                >
                  85%
                </text>
              </svg>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>Steps Completed</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {completedSteps.map((step, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <FaCheckCircle color="#4caf50" style={{ marginRight: '10px' }} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>Steps Remaining</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {remainingSteps.map((step, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <FaCheckCircle color="#e5e7eb" style={{ marginRight: '10px' }} />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Total Franchisees Onboard */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Total Franchisees Onboard</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{totalFranchisees}</div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#ecfdf5', 
                color: '#059669',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px' 
              }}>
                <FaArrowUp style={{ marginRight: '5px' }} /> 7.4%
              </div>
            </div>

            <div style={{ display: 'flex', marginBottom: '16px' }}>
              {franchiseeAvatars.map((person, i) => (
                <div 
                  key={i} 
                  style={{ 
                    width: '28px', 
                    height: '28px', 
                    borderRadius: '50%', 
                    backgroundColor: getRandomColor(person.name), 
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    marginLeft: i > 0 ? '-8px' : '0',
                    border: '1px solid white'
                  }}
                >
                  {getInitials(person.name)}
                </div>
              ))}
              <div 
                style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '50%', 
                  backgroundColor: '#e5e7eb', 
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  marginLeft: '-8px',
                  border: '1px solid white'
                }}
              >
                +7
              </div>
            </div>

            <div style={{ marginTop: '16px' }}>
              {franchiseeStages.map((stage, index) => (
                <div key={index} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontSize: '14px', color: '#6b7280' }}>{stage.name}</span>
                    <span style={{ fontSize: '14px', fontWeight: '500' }}>
                      {String(stage.count).padStart(2, '0')}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: '#f3f4f6', borderRadius: '4px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        height: '100%', 
                        width: `${(stage.count / totalFranchisees) * 100}%`, 
                        backgroundColor: stage.color,
                        borderRadius: '4px'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insights & Feedback */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Key Insights & Feedback</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold' }}>10%</div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>Sales Growth</div>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#e0f2fe', 
                color: '#0284c7',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '12px' 
              }}>
                <FaAward style={{ marginRight: '5px' }} /> Top Performer
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <h3 style={{ fontSize: '14px', color: '#6b7280', marginBottom: '8px' }}>Feedback</h3>
              <div style={{ 
                backgroundColor: '#f9fafb', 
                padding: '12px',
                borderRadius: '6px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: '#0284c7',
                    marginTop: '8px',
                    marginRight: '10px'
                  }}></div>
                  <p style={{ fontSize: '14px', color: '#4b5563', margin: 0 }}>
                    Franchisees are requesting more detailed training materials.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Wellbeing */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Financial Wellbeing</h2>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 'bold' }}>20</div>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>Total Franchisees</div>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: '#ecfdf5', 
                color: '#059669',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px' 
              }}>
                <FaArrowUp style={{ marginRight: '5px' }} /> 2.1%
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
              <div style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '6px' }}>
                <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Target</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>$500,000</div>
              </div>
              <div style={{ backgroundColor: '#f9fafb', padding: '12px', borderRadius: '6px' }}>
                <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>Current</div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>$450,000</div>
              </div>
            </div>
          </div>

          {/* Prospect Leads */}
          <div style={{ background: 'white', borderRadius: '8px', padding: '20px' }}>
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Prospect Leads</h2>
            
            <div style={{ marginTop: '16px' }}>
              {prospectLeads.map((lead, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '50%', 
                      backgroundColor: getRandomColor(lead.name), 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      marginRight: '12px'
                    }}>
                      {getInitials(lead.name)}
                    </div>
                    <div style={{ fontWeight: '500' }}>{lead.name}</div>
                  </div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>
                    Stage: {lead.stage}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Questions */}
        <div style={{ 
          marginTop: '20px', 
          background: 'white', 
          borderRadius: '8px 8px 0 0', 
          border: '1px solid #e5e7eb',
          borderBottom: 'none'
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '16px 20px', 
            borderBottom: '1px solid #e5e7eb' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 style={{ fontSize: '16px', fontWeight: '600', margin: 0 }}>Pending Questions</h2>
              <span style={{ 
                marginLeft: '8px', 
                backgroundColor: '#dbeafe', 
                color: '#2563eb', 
                fontSize: '12px', 
                padding: '2px 6px', 
                borderRadius: '4px',
                fontWeight: '500'
              }}>
                {String(pendingQuestions.length).padStart(2, '0')}
              </span>
            </div>
            <button style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              {/* Up arrow icon would go here */}
              ▲
            </button>
          </div>
          
          <div style={{ padding: '20px' }}>
            {pendingQuestions.map((question, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                marginBottom: index < pendingQuestions.length - 1 ? '20px' : '0' 
              }}>
                <div style={{ marginRight: '16px' }}>
                  <div style={{ 
                    width: '6px', 
                    height: '6px', 
                    borderRadius: '50%', 
                    backgroundColor: '#3b82f6',
                    marginTop: '8px'
                  }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ 
                      width: '28px', 
                      height: '28px', 
                      borderRadius: '50%', 
                      backgroundColor: getRandomColor(question.user.name), 
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      marginRight: '8px'
                    }}>
                      {getInitials(question.user.name)}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontWeight: '500' }}>{question.user.name}</span>
                      <span style={{ margin: '0 4px', color: '#9ca3af' }}>•</span>
                      <span style={{ color: '#6b7280', fontSize: '14px' }}>@{question.user.username}</span>
                    </div>
                    <span style={{ marginLeft: 'auto', color: '#6b7280', fontSize: '14px' }}>{question.time}</span>
                  </div>
                  <p style={{ margin: '0 0 12px 0', color: '#4b5563' }}>
                    {question.content}
                  </p>
                </div>
              </div>
            ))}
            
            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', color: '#3b82f6' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
                  <path d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z"/>
                </svg>
                <span>Welcome to the AI Chat Assistant</span>
              </div>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  placeholder="Ask your question here.." 
                  style={{ 
                    backgroundColor: '#f3f4f6',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    padding: '8px 32px 8px 12px',
                    fontSize: '14px',
                    width: '250px'
                  }}
                />
                <button style={{ 
                  position: 'absolute', 
                  right: '8px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#9ca3af',
                  cursor: 'pointer'
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 22L21 12L9 2V9L15 12L9 15V22Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

// Helper functions
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

function getRandomColor(name: string): string {
  const colors = ['#1e88e5', '#43a047', '#fb8c00', '#e53935', '#5e35b1', '#00acc1', '#f4511e'];
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
}
