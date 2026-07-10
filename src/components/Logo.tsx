interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width="200"
      height="72"
      viewBox="0 0 200 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angan by Bella"
    >
      <defs>
        <linearGradient id="archGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4A06A" />
          <stop offset="50%" stopColor="#B08D5B" />
          <stop offset="100%" stopColor="#8A6D3F" />
        </linearGradient>
        <linearGradient id="archFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A2C1A" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#B08D5B" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* Arch background glow */}
      <rect x="6" y="6" width="50" height="60" rx="25" fill="url(#archFill)" />

      {/* Outer arch */}
      <path
        d="M12 60 Q12 6 31 6 Q50 6 50 60"
        stroke="url(#archGlow)"
        strokeWidth="1.8"
        fill="none"
        opacity="0.8"
      />

      {/* Inner arch */}
      <path
        d="M18 60 Q18 16 31 16 Q44 16 44 60"
        stroke="url(#archGlow)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.4"
      />

      {/* Jali diamond lattice inside arch */}
      <polygon points="31,22 38,28 31,34 24,28" stroke="url(#archGlow)" strokeWidth="0.7" fill="none" opacity="0.6" />
      <polygon points="31,26 36,28 31,30 26,28" stroke="url(#archGlow)" strokeWidth="0.4" fill="none" opacity="0.35" />
      <polygon points="31,34 38,40 31,46 24,40" stroke="url(#archGlow)" strokeWidth="0.7" fill="none" opacity="0.6" />
      <polygon points="31,38 36,40 31,42 26,40" stroke="url(#archGlow)" strokeWidth="0.4" fill="none" opacity="0.35" />
      <polygon points="31,46 38,52 31,58 24,52" stroke="url(#archGlow)" strokeWidth="0.7" fill="none" opacity="0.6" />
      <polygon points="31,50 36,52 31,54 26,52" stroke="url(#archGlow)" strokeWidth="0.4" fill="none" opacity="0.35" />

      {/* Urdu text — انگن */}
      <text
        x="80"
        y="34"
        fontFamily="'Noto Nastaliq Urdu', serif"
        fontSize="26"
        fill="#4A2C1A"
        fontWeight="500"
      >
        انگن
      </text>

      {/* BY BELLA subtext */}
      <text
        x="80"
        y="54"
        fontFamily="'Karla', sans-serif"
        fontSize="8.5"
        fill="#7A6A57"
        letterSpacing="4"
        fontWeight="400"
      >
        BY BELLA
      </text>

      {/* Gold diamond accent between lines */}
      <polygon points="76,42 78,44 76,46 74,44" fill="#B08D5B" opacity="0.5" />
    </svg>
  )
}
