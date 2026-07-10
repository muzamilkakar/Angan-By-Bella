interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width="200"
      height="60"
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angan by Bella"
    >
      {/* Urdu Text: انگن */}
      <text
        x="0"
        y="32"
        fontFamily="'Noto Nastaliq Urdu', serif"
        fontSize="28"
        fill="#4A2C1A"
        fontWeight="600"
        letterSpacing="1.5"
      >
        انگن
      </text>

      {/* BY BELLA subtext */}
      <text
        x="0"
        y="52"
        fontFamily="'Karla', sans-serif"
        fontSize="9"
        fill="#7A6A57"
        letterSpacing="4.5"
        fontWeight="400"
      >
        BY BELLA
      </text>
    </svg>
  )
}
