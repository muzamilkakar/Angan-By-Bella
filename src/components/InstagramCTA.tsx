import { instagramCTAUrl } from '../config'

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

interface InstagramCTAProps {
  label?: string;
  className?: string;
}

export default function InstagramCTA({ label = "Ask on Instagram", className = "" }: InstagramCTAProps) {
  return (
    <a
      href={instagramCTAUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`cta-button instagram-ask-btn ${className}`.trim()}
    >
      <InstagramIcon size={18} />
      {label}
    </a>
  )
}
