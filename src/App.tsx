import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import About from './pages/About'
import NotFound from './components/NotFound'

export default function App() {
  const location = useLocation()
  const [preloader, setPreloader] = useState(true)
  const [initial, setInitial] = useState(true)

  const duration = location.pathname === '/' ? 2300 : 1500

  const trigger = useCallback((ms: number) => {
    setPreloader(true)
    const timer = setTimeout(() => setPreloader(false), ms)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (initial) {
      setInitial(false)
      return
    }
    const cleanup = trigger(duration)
    return cleanup
  }, [location.pathname])

  useEffect(() => {
    const path = location.pathname
    const ms = path === '/' ? 2300 : 1500
    const timer = setTimeout(() => setPreloader(false), ms)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader visible={preloader} />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <BackToTop />
      <Footer />
    </>
  )
}
