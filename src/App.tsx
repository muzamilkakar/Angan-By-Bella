import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import Home from './pages/Home'
import Category from './pages/Category'
import Product from './pages/Product'
import About from './pages/About'

export default function App() {
  const location = useLocation()
  const [preloader, setPreloader] = useState(true)
  const [initial, setInitial] = useState(true)

  const trigger = useCallback(() => {
    setPreloader(true)
    const timer = setTimeout(() => setPreloader(false), 2300)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (initial) {
      setInitial(false)
      return
    }
    const cleanup = trigger()
    return cleanup
  }, [location.pathname])

  useEffect(() => {
    const timer = setTimeout(() => setPreloader(false), 2300)
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
        </Routes>
      </main>
      <Footer />
    </>
  )
}
