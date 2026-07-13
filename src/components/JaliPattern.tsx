interface JaliPatternProps {
  className?: string;
}

export default function JaliPattern({ className = '' }: JaliPatternProps) {
  return (
    <svg
      className={`jali-pattern ${className}`.trim()}
      viewBox="0 0 200 40"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="jali-strip"
          x="0"
          y="0"
          width="32"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <rect width="32" height="40" fill="none" />
          <polygon
            points="16,0 32,12 24,20 16,12 8,20 0,12"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
          />
          <polygon
            points="16,4 24,10 16,16 8,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.25"
            opacity="0.5"
          />
          <circle cx="16" cy="10" r="1.5" fill="currentColor" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#jali-strip)" />
    </svg>
  )
}
