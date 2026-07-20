import { useEffect, useState } from 'react'

interface PreloaderProps {
  visible: boolean;
}

export default function Preloader({ visible }: PreloaderProps) {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => setHidden(true), 800)
      return () => clearTimeout(timer)
    }
    setHidden(false)
  }, [visible])

  if (hidden) return null

  return (
    <div className={`preloader ${visible ? '' : 'preloader-fade'}`}>
      <div className="preloader-inner">
        <span className="preloader-logo">انگن</span>
        <div className="preloader-line" />
        <span className="preloader-sub">by bella</span>
      </div>
    </div>
  )
}
