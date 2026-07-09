import { instagramCTAUrl } from '../config'

interface InstagramCTAProps {
  label?: string;
}

export default function InstagramCTA({ label = "Ask on Instagram" }: InstagramCTAProps) {
  return (
    <a
      href={instagramCTAUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="cta-button instagram-ask-btn"
    >
      {label}
    </a>
  )
}
