'use client';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export default function CircularProgress({
  percentage,
  size = 160,
  strokeWidth = 10,
  color = "#38bdf8"
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-in-out"
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold">{percentage}%</span>
      </div>
    </div>
  );
} 