import React from 'react'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Service from "./components/service"
import Gallery from './components/Gallery'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Herosection/>
      <Service/>
      <Gallery/>
      <Footer/>
    </div>
  )
}

export default App
