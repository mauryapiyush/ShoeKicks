import React, { useRef } from 'react'
import './Contact.css'
import FacebookIcon from '../../assets/facebook-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ejzh4xm', 'template_lvv4adc', form.current, '8yr3ZtPnOuRh7vH26')
        .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
        }, (error) => {
              console.log(error.text);
        });
    };
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Get in Touch</h1>
                <span className="contactDesc">Have a question about our shoes? Fill out the form below and we’ll get back to you!</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email' />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submmit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        <img src={InstagramIcon} alt="Instagram" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
