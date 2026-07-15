import { useState, useEffect } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`preloader${hidden ? ' hidden' : ''}`}>
      <div className="preloader-inner">
        <span className="preloader-logo">انگن</span>
        <div className="preloader-line" />
        <span className="preloader-sub">by bella</span>
      </div>
    </div>
  )
}
