interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`logo-link ${className}`.trim()}>
      <img
        src="/images/logo.png"
        alt="Angan by Bella"
        className="header-logo-img"
      />
      <span className="header-logo-label">By Bella</span>
    </div>
  )
}
