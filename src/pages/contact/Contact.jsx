import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';

import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookF,
    FaTwitter,
    FaYoutube,
    FaInstagram,
} from 'react-icons/fa';

import { FiSend } from 'react-icons/fi';

import './contact.css'

/**
 * Renders a contact form and contact information.
 * @returns {JSX.Element} The Contact component.
 */
const Contact = () => {
  const form = useRef();

  /**
   * Sends an email using the emailjs library.
   * @param {Event} e - The form submission event.
   */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_l8qp1bt',
      'template_zdseqbl',
      form.current,
      'L54symhlMZvpVrYEy'
    )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
      e.target.reset();
  };

  return (
    <section className='contact section'>
      <h2 className='section__title'>
        Get In <span>Touch</span>
      </h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be shy !</h3>

          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />

              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>ktnsisodiya05@gmail.com</h4>
              </div>
            </div>

            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />

              <div>
                <span className='info__title'>Call Me</span>
                <h4 className='info__desc'>+91-8878595414</h4>
              </div>
            </div>
          </div>

          <div className='contact__socials'>
            <a href='https://facebook.com' className='contact__social-link'>
              <FaFacebookF />
            </a>

            <a href='https://twitter.com' className='contact__social-link'>
              <FaTwitter />
            </a>

            <a href='https://youtube.com' className='contact__social-link'>
              <FaYoutube />
            </a>

            <a href='https://instagram.com' className='contact__social-link'>
              <FaInstagram />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className='contact__form'>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input
                type='text'
                name='name'
                placeholder='Your Name'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='form__control'
              />
            </div>

            <div className='form__input-div'>
              <input
                type='text'
                name='subject'
                placeholder='Your Subject'
                className='form__control'
              />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea
              placeholder='Your Message'
              name='message'
              className='form__control textarea'
            ></textarea>
          </div>

          <button className='button'>
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

