import React from 'react'
import Header from './components/header/Header'
import Nav from './components/Nav/Nav' 
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Services from './components/services/Services'
import Portfolio from  './components/Portfolio/Portfolio'
import Testmonials from './components/testimonials/Testmonials'
import Contact from  './components/contact/Contact'
import Footer from './components/footer/Footer'
const  App= () => {
   return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiences />
      <Services />
      <Portfolio />
      <Testmonials />
      <Contact />
      <Footer />
    </>
   )
 }
 
 export default  App