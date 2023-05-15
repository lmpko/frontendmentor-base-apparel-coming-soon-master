import React, { useState ,useEffect } from 'react'
import logo from "/images/logo.svg"
import arrow from "/images/icon-arrow.svg"
import errorIMG from "/images/icon-error.svg"

const CardComponent = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
        setError('Email is invalid');

        const emailError = document.getElementById('input-email')
        emailError.classList.add('is-invalid');
        } else {
        setError(null);
        document.getElementById('input-email').classList.remove('is-invalid');
        }

        setEmail(event.target.value);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
       console.log("submitted email:", email)
       setEmail('');
    }

  return (
    <section className='card'>
        <img src={logo} alt="logo" className='logo' />
        <div className='img-container'>
            
        </div>
        <div className='overview'>
            <h1><span>We're</span> coming soon</h1>
                <p>
                    Hello fellow shoppers! We're currently building our new fashion store. 
                    Add your email below to stay up-to-date with announcements and our launch deals.
                </p>
        </div>
        <form className='form-area' onSubmit={handleSubmit}>
            <div className='input-container'>
                <input type="email" placeholder='Email Address' 
                    value={email}
                    onChange={handleChange}
                    required
                    id='input-email'
                    />
                {error && email && <img src={errorIMG} alt="error" className='image'/>}
                <button className='arrow' type='submit '>
                    <img src={arrow} alt="arrow" />
                </button>
            </div>
                {error && email && <span className="error">Pleae provide a valid email</span>}
        </form>
    </section>
  )
}

export default CardComponent