export function Logo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-10 sm:w-12 sm:h-12"
    >
      {/* Background circle with gradient */}
      <circle cx="24" cy="24" r="22" fill="url(#logo-gradient)" />
      
      {/* Medical cross in center */}
      <path
        d="M24 12v24M12 24h24"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Heart shape overlaying */}
      <path
        d="M24 29c-4-3.5-7-6-7-9 0-2.5 1.5-4 3.5-4 1.5 0 2.5.5 3.5 2 1-1.5 2-2 3.5-2 2 0 3.5 1.5 3.5 4 0 3-3 5.5-7 9z"
        fill="white"
        opacity="0.9"
      />
      
      {/* Brain illustration (simplified neurons) */}
      <g opacity="0.3">
        <circle cx="16" cy="18" r="1.5" fill="white" />
        <circle cx="32" cy="18" r="1.5" fill="white" />
        <circle cx="20" cy="32" r="1.5" fill="white" />
        <circle cx="28" cy="32" r="1.5" fill="white" />
        <path
          d="M16 18c0 3 2 4 4 5M32 18c0 3-2 4-4 5M20 32c1-2 2-3 4-3M28 32c-1-2-2-3-4-3"
          stroke="white"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </g>
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#0d9488" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
    </svg>
  );
}
