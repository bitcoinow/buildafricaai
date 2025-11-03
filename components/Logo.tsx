export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="africaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
        </linearGradient>
        
        <linearGradient id="techAccent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <path
        d="M 60 10 
           L 62 12 L 64 14 L 66 16 L 68 19 
           L 70 22 L 71 26 L 72 30 L 73 35 
           L 74 40 L 75 45 L 76 50 L 77 55 
           L 78 60 L 79 65 L 79 70 L 78 75 
           L 77 79 L 75 83 L 73 86 L 70 89 
           L 67 92 L 63 94 L 59 96 L 55 97 
           L 51 97 L 47 96 L 43 94 L 40 92 
           L 37 89 L 35 86 L 33 82 L 32 78 
           L 31 74 L 30 70 L 29 65 L 28 60 
           L 27 55 L 26 50 L 25 45 L 25 40 
           L 26 35 L 27 30 L 29 26 L 31 22 
           L 34 19 L 37 16 L 41 13 L 45 11 
           L 50 10 L 55 10 Z"
        fill="url(#africaGradient1)"
        stroke="#1E293B"
        strokeWidth="2"
        opacity="0.95"
      />
      
      <g opacity="0.3">
        <path
          d="M 45 25 L 48 28 L 50 32 L 52 28 L 55 25"
          fill="none"
          stroke="#059669"
          strokeWidth="1.5"
        />
        <path
          d="M 38 40 L 42 42 L 45 45 L 48 42 L 52 40"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <path
          d="M 35 55 L 40 58 L 45 60 L 50 58 L 55 55"
          fill="none"
          stroke="#DC2626"
          strokeWidth="1.5"
        />
        <path
          d="M 40 70 L 45 72 L 50 74 L 55 72 L 60 70"
          fill="none"
          stroke="#2563EB"
          strokeWidth="1.5"
        />
      </g>
      
      <g opacity="0.7">
        <line x1="35" y1="30" x2="50" y2="30" stroke="url(#techAccent)" strokeWidth="1.5" />
        <line x1="40" y1="45" x2="60" y2="45" stroke="url(#techAccent)" strokeWidth="1.5" />
        <line x1="38" y1="60" x2="62" y2="60" stroke="url(#techAccent)" strokeWidth="1.5" />
        <line x1="42" y1="75" x2="58" y2="75" stroke="url(#techAccent)" strokeWidth="1.5" />
        
        <line x1="45" y1="25" x2="45" y2="50" stroke="url(#techAccent)" strokeWidth="1.5" />
        <line x1="55" y1="35" x2="55" y2="70" stroke="url(#techAccent)" strokeWidth="1.5" />
        <line x1="50" y1="20" x2="50" y2="85" stroke="url(#techAccent)" strokeWidth="1.5" />
      </g>
      
      <g filter="url(#glow)">
        <circle cx="45" cy="30" r="2.5" fill="#10B981" />
        <circle cx="50" cy="30" r="2.5" fill="#FCD34D" />
        <circle cx="45" cy="45" r="2.5" fill="#EF4444" />
        <circle cx="55" cy="45" r="2.5" fill="#3B82F6" />
        <circle cx="50" cy="60" r="2.5" fill="#8B5CF6" />
        <circle cx="55" cy="60" r="2.5" fill="#10B981" />
        <circle cx="45" cy="75" r="2.5" fill="#F59E0B" />
        <circle cx="55" cy="75" r="2.5" fill="#EC4899" />
      </g>
      
      <g opacity="0.9">
        <line x1="45" y1="30" x2="50" y2="30" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="45" y1="30" x2="45" y2="45" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="50" y1="30" x2="55" y2="45" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="45" y1="45" x2="55" y2="45" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="55" y1="45" x2="50" y2="60" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="50" y1="60" x2="55" y2="60" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="45" y1="45" x2="45" y2="75" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="55" y1="60" x2="55" y2="75" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
        <line x1="45" y1="75" x2="55" y2="75" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.6" />
      </g>
      
      <g opacity="0.4">
        <circle cx="52" cy="38" r="1" fill="#FFFFFF" />
        <circle cx="48" cy="52" r="1" fill="#FFFFFF" />
        <circle cx="52" cy="68" r="1" fill="#FFFFFF" />
        <circle cx="58" cy="52" r="1" fill="#FFFFFF" />
        <circle cx="42" cy="38" r="1" fill="#FFFFFF" />
        <circle cx="42" cy="62" r="1" fill="#FFFFFF" />
      </g>
    </svg>
  );
}
