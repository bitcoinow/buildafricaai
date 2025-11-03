export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      {/* Africa continent outline */}
      <path
        d="M 50 15 
           L 52 18 L 54 20 L 55 25 L 56 30 
           L 58 35 L 60 38 L 62 42 L 63 48 
           L 64 55 L 65 62 L 66 68 L 65 72 
           L 63 76 L 60 78 L 56 80 L 52 82 
           L 48 83 L 44 82 L 40 80 L 37 78 
           L 35 75 L 34 70 L 33 65 L 32 60 
           L 31 55 L 30 50 L 29 45 L 30 40 
           L 32 35 L 35 30 L 38 26 L 42 22 
           L 46 18 Z"
        fill="url(#techGradient)"
        stroke="#1E293B"
        strokeWidth="1.5"
      />
      
      {/* Circuit board pattern overlay */}
      <g opacity="0.6">
        {/* Horizontal lines */}
        <line x1="35" y1="30" x2="45" y2="30" stroke="#E0E7FF" strokeWidth="1" />
        <line x1="38" y1="40" x2="48" y2="40" stroke="#E0E7FF" strokeWidth="1" />
        <line x1="40" y1="50" x2="55" y2="50" stroke="#E0E7FF" strokeWidth="1" />
        <line x1="42" y1="60" x2="58" y2="60" stroke="#E0E7FF" strokeWidth="1" />
        <line x1="45" y1="70" x2="55" y2="70" stroke="#E0E7FF" strokeWidth="1" />
        
        {/* Vertical lines */}
        <line x1="40" y1="35" x2="40" y2="45" stroke="#E0E7FF" strokeWidth="1" />
        <line x1="50" y1="25" x2="50" y2="55" stroke="#E0E7FF" strokeWidth="1" />
        <line x1="55" y1="45" x2="55" y2="65" stroke="#E0E7FF" strokeWidth="1" />
        
        {/* Circuit nodes */}
        <circle cx="40" cy="30" r="1.5" fill="#FCD34D" />
        <circle cx="40" cy="40" r="1.5" fill="#FCD34D" />
        <circle cx="50" cy="30" r="1.5" fill="#FCD34D" />
        <circle cx="50" cy="50" r="1.5" fill="#FCD34D" />
        <circle cx="55" cy="50" r="1.5" fill="#FCD34D" />
        <circle cx="55" cy="60" r="1.5" fill="#FCD34D" />
        <circle cx="45" cy="70" r="1.5" fill="#FCD34D" />
      </g>
      
      {/* AI neural network nodes */}
      <g opacity="0.8">
        <circle cx="48" cy="35" r="2" fill="#FFFFFF" />
        <circle cx="52" cy="45" r="2" fill="#FFFFFF" />
        <circle cx="48" cy="55" r="2" fill="#FFFFFF" />
        <circle cx="52" cy="65" r="2" fill="#FFFFFF" />
        
        {/* Connecting lines */}
        <line x1="48" y1="35" x2="52" y2="45" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.5" />
        <line x1="52" y1="45" x2="48" y2="55" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.5" />
        <line x1="48" y1="55" x2="52" y2="65" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.5" />
      </g>
    </svg>
  );
}
