import React from 'react'
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Culture from './Culture';
import Operations from './Operations';
import Business from './Business';
import Partners from './Partners';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <Hero />
        <About />
        <Culture />
        <Operations />
        <Business />
        <Partners />
        <Footer />
    </div>
  )
}

export default Home;