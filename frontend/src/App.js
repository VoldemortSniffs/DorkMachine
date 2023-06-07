import React from 'react'
import { Navbar, CTA, Brand } from './components';
import { Header, Dmac, Exploitdb, BlogSection, Footer } from './containers';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Brand />
        <Dmac />
        <Exploitdb />
      </div>
        <Footer />
    </div>
  )
}

export default App