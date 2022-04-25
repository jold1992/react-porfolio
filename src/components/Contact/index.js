import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

//Libreria de mapas
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    //template_bq3nfke
    //service_k6phb7j
    //UIRvVl4DHs1YgFkc8
    emailjs
      .sendForm(
        'service_k6phb7j',
        'template_bq3nfke',
        refForm.current,
        'UIRvVl4DHs1YgFkc8'
      )
      .then(
        () => {
          alert('Email sent successfully!')
          window.location.reload(false)
        },
        (err) => {
          alert('Send email failed, please try again!')

          console.log(err)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me via the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Enter subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="message"
                    placeholder="Enter message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          John Lomas
          <br />
          Quito, Ecuador
          <span>jold1992@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-0.176618, -78.479401]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-0.176618, -78.479401]}>
              <Popup>John is here, come over and say hi! 🍺</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
