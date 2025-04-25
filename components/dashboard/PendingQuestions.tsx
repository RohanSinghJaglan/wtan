'use client';

import UserAvatar from './UserAvatar';
import { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaLink } from 'react-icons/fa';

interface Question {
  id: number;
  user: {
    name: string;
    username: string;
  };
  time: string;
  content: string;
}

export default function PendingQuestions() {
  const [isExpanded, setIsExpanded] = useState(true);

  const questions: Question[] = [
    {
      id: 1,
      user: {
        name: 'Phoenix Baker',
        username: 'phoenix'
      },
      time: '5min ago',
      content: 'What are the requirements for opening a new store?'
    },
    {
      id: 2,
      user: {
        name: 'Koray Okumus',
        username: 'koray'
      },
      time: '4hr ago',
      content: 'How do I manage inventory effectively?'
    }
  ];

  return (
    <div className="bg-white rounded-t-lg shadow-sm border-t border-x border-gray-200">
      <div
        className="flex items-center justify-between px-6 py-4 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <h2 className="text-lg font-semibold">Pending Questions</h2>
          <span className="ml-2 bg-blue-100 text-blue-700 text-xs rounded-md px-1.5 py-0.5">
            {questions.length < 10 ? `0${questions.length}` : questions.length}
          </span>
        </div>
        <button>
          {isExpanded ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
        </button>
      </div>

      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="space-y-6">
            {questions.map((question) => (
              <div key={question.id} className="flex">
                <div className="mr-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-1">
                    <UserAvatar name={question.user.name} size="sm" />
                    <div className="ml-2 flex items-center">
                      <span className="font-medium">{question.user.name}</span>
                      <span className="mx-1 text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">@{question.user.username}</span>
                    </div>
                    <span className="ml-auto text-gray-500 text-sm">{question.time}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{question.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center">
              <FaLink className="text-blue-500 mr-2" />
              <div className="text-blue-500">
                Welcome to the AI Chat Assistant
              </div>
            </div>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Ask your question here.."
                className="w-64 bg-gray-100 border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 text-gray-400">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22L21 12L9 2V9L15 12L9 15V22Z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 