import React from 'react'
import logo from "/images/logo.svg"
import hero from "/images/hero-mobile.jpg"
import arrow from "/images/icon-arrow.svg"

const CardComponent = () => {
  return (
    <section className='card'>
        <img src={logo} alt="logo" className='logo' />
        <img src={hero} alt="hero" className='hero'/>
        <div className='overview'>
            <h1><span>We're</span> coming soon</h1>
                <p>
                    Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
        </div>
        <form>
            <div className='input-container'>
                <input type="email" placeholder='Email Address'/>
                <img src={arrow} alt="arrow" className='arrow' />
            </div>
        </form>
    </section>
  )
}

export default CardComponent