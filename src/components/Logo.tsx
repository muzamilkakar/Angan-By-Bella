interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width="280"
      height="96"
      viewBox="0 0 280 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angan by Bella"
    >
      <defs>
        <linearGradient id="goldPrimary" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C4A06A" />
          <stop offset="40%" stopColor="#B08D5B" />
          <stop offset="100%" stopColor="#8A6D3F" />
        </linearGradient>
        <linearGradient id="goldWarm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D4B47A" />
          <stop offset="100%" stopColor="#A6844E" />
        </linearGradient>
        <linearGradient id="archBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A2C1A" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#B08D5B" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="glowOrb" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#C4A06A" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C4A06A" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* ── Emblem: Courtyard Arch with Jali ── */}

      <g transform="translate(8, 10)">
        {/* Ambient glow behind arch */}
        <ellipse cx="32" cy="34" rx="38" ry="34" fill="url(#glowOrb)" />

        {/* Outer arch — main silhouette */}
        <path
          d="M5 68 Q5 0 32 0 Q59 0 59 68"
          stroke="url(#goldPrimary)"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />

        {/* Middle arch layer */}
        <path
          d="M11 68 Q11 10 32 10 Q53 10 53 68"
          stroke="url(#goldWarm)"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />

        {/* Arch floor line */}
        <line x1="5" y1="68" x2="59" y2="68" stroke="url(#goldPrimary)" strokeWidth="1.2" opacity="0.6" />

        {/* ── Jali Lattice: 4 tiers of diamonds ── */}

        {/* Tier 1 — top */}
        <polygon points="32,16 39,21 32,26 25,21" stroke="url(#goldPrimary)" strokeWidth="0.7" fill="none" opacity="0.55" />
        <polygon points="32,18 37,21 32,24 27,21" stroke="url(#goldPrimary)" strokeWidth="0.4" fill="none" opacity="0.3" />

        {/* Tier 2 — upper middle */}
        <polygon points="32,28 39,33 32,38 25,33" stroke="url(#goldPrimary)" strokeWidth="0.7" fill="none" opacity="0.55" />
        <polygon points="32,30 37,33 32,36 27,33" stroke="url(#goldPrimary)" strokeWidth="0.4" fill="none" opacity="0.3" />

        {/* Tier 3 — lower middle */}
        <polygon points="32,40 39,45 32,50 25,45" stroke="url(#goldPrimary)" strokeWidth="0.7" fill="none" opacity="0.55" />
        <polygon points="32,42 37,45 32,48 27,45" stroke="url(#goldPrimary)" strokeWidth="0.4" fill="none" opacity="0.3" />

        {/* Tier 4 — bottom */}
        <polygon points="32,52 39,57 32,62 25,57" stroke="url(#goldPrimary)" strokeWidth="0.7" fill="none" opacity="0.55" />
        <polygon points="32,54 37,57 32,60 27,57" stroke="url(#goldPrimary)" strokeWidth="0.4" fill="none" opacity="0.3" />

        {/* Centerline diamond column accents */}
        <circle cx="32" cy="21" r="1.5" fill="url(#goldPrimary)" opacity="0.4" />
        <circle cx="32" cy="33" r="1.5" fill="url(#goldPrimary)" opacity="0.4" />
        <circle cx="32" cy="45" r="1.5" fill="url(#goldPrimary)" opacity="0.4" />
        <circle cx="32" cy="57" r="1.5" fill="url(#goldPrimary)" opacity="0.4" />
      </g>

      {/* ── Urdu Text: انگن ── */}
      <text
        x="98"
        y="40"
        fontFamily="'Noto Nastaliq Urdu', serif"
        fontSize="32"
        fill="#4A2C1A"
        fontWeight="600"
        letterSpacing="2"
      >
        انگن
      </text>

      {/* ── English sub-brand ── */}
      <text
        x="98"
        y="62"
        fontFamily="'Karla', sans-serif"
        fontSize="10"
        fill="#7A6A57"
        letterSpacing="5"
        fontWeight="400"
      >
        BY BELLA
      </text>

      {/* ── Divider jewel between Urdu and English ── */}
      <g transform="translate(94, 49)">
        <line x1="0" y1="0" x2="130" y2="0" stroke="#B08D5B" strokeWidth="0.5" opacity="0.15" />
        <polygon points="60,-3 63,0 60,3 57,0" fill="#B08D5B" opacity="0.4" />
      </g>

      {/* ── Small decorative elements ── */}

      {/* Top-right star/diamond cluster */}
      <g transform="translate(240, 14)" opacity="0.2">
        <polygon points="8,0 10,8 8,16 6,8" fill="url(#goldPrimary)" />
        <polygon points="4,4 8,6 4,8 0,6" fill="url(#goldPrimary)" opacity="0.5" />
        <polygon points="12,4 16,6 12,8 8,6" fill="url(#goldPrimary)" opacity="0.5" />
      </g>

      {/* Bottom-right scatter */}
      <g transform="translate(245, 70)" opacity="0.15">
        <circle cx="0" cy="0" r="2" fill="#B08D5B" />
        <circle cx="12" cy="-6" r="1.5" fill="#B08D5B" />
        <circle cx="20" cy="2" r="1" fill="#B08D5B" />
      </g>
    </svg>
  )
}
