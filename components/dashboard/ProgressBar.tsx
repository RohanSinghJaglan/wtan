interface ProgressBarProps {
  percentage: number;
  color: string;
}

export default function ProgressBar({ percentage, color }: ProgressBarProps) {
  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-in-out rounded-full"
        style={{ 
          width: `${percentage}%`,
          backgroundColor: color
        }}
      />
    </div>
  );
} 