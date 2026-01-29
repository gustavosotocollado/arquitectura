import React from 'react'
import './styles/App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import VideoShowcase from './components/VideoShowcase'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Gallery />
        <VideoShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
