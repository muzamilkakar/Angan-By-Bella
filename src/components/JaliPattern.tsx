interface JaliPatternProps {
  className?: string;
}

export default function JaliPattern({ className = '' }: JaliPatternProps) {
  return (
    <svg
      className={`jali-pattern ${className}`.trim()}
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="jali-lattice"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect width="40" height="40" fill="none" />
          <polygon
            points="20,0 40,20 20,40 0,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <polygon
            points="20,4 36,20 20,36 4,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            opacity="0.5"
          />
          <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jali-lattice)" />
    </svg>
  )
}
