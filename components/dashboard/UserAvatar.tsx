import { FaUser } from 'react-icons/fa';

interface UserAvatarProps {
  name: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function UserAvatar({ 
  name, 
  image, 
  size = 'md' 
}: UserAvatarProps) {
  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };
  
  // Get initials from the name
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
    
  // If we have an image, display it, otherwise show initials
  if (image) {
    return (
      <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    );
  }
  
  // Random color based on the name
  const colors = ['#1e88e5', '#43a047', '#fb8c00', '#e53935', '#5e35b1', '#00acc1', '#f4511e'];
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  
  return (
    <div 
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center text-white font-medium`}
      style={{ backgroundColor: colors[colorIndex] }}
    >
      {initials || <FaUser />}
    </div>
  );
} 