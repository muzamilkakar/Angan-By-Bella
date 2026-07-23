interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      className={className}
      width="180"
      height="52"
      viewBox="0 0 180 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Angan by Bella"
    >
      <text
        x="0"
        y="28"
        fontFamily="'Noto Nastaliq Urdu', serif"
        fontSize="24"
        fill="#4A2C1A"
        fontWeight="600"
      >
        انگن
      </text>
      <text
        x="0"
        y="46"
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
