import React from 'react'
import logo from "/images/logo.svg"
import hero from "/images/hero-mobile.jpg"

const CardComponent = () => {
  return (
    <section>
        <img src={logo} alt="logo" />
        <img src={hero} alt="hero" />
        <div className='ovrview'>
            <h1>We're coming soon</h1>
                <p>
                    Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
        </div>
        <form>
            <input type="email" placeholder='Email Address'/>
        </form>
    </section>
  )
}

export default CardComponent