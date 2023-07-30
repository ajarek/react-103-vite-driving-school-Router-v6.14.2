import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
  FaFacebook,
  FaPhoneAlt,
  FaMailBulk,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormContact } from '../../components/FormContact/FormContact'
import Modal from '../../components/Modal/Modal'
import './Contact.css'
export const Contact = () => {
  const [showModal, setShowModal] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (data) => {
    setUserEmail(data.email)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    navigate('/')
  }
  return (
    <div className='contact'>
      {showModal ? (
        <Modal
          email={userEmail}
          onClose={handleCloseModal}
        />
      ) : null}
      <div className='left-wrapper'>
        <h1>Kontakt</h1>
        <p>
          Jeśli masz jakiekolwiek pytania lub chciałbyś umówić się na
          konsultację z jednym z naszych ekspertów ds. nieruchomości, nie wahaj
          się z nami skontaktować:
        </p>
        <a
          className={'link'}
          href='tel:+48573219230'
        >
          <FaPhoneAlt /> +48 573 219 230
        </a>
        <a
          className={'link'}
          href='mailto:ajarek@poczta.onet.pl'
        >
          <FaMailBulk /> ajarek@poczta.onet.pl
        </a>
        <a
          className={'link'}
          href='#'
        >
          <FaMapMarkerAlt /> Poland Kołobrzeg{' '}
        </a>
      </div>
      <div className='right-wrapper'>
        <p>Napisz do Nas 🖊️ :</p>
        <FormContact onSubmit={handleSubmit} />
      </div>
      <div className='footer'>
        <Link
          className={'link'}
          to={'/'}
        >
          <div className='logo'>
            <img
              src='/logo.png'
              alt='logo'
            />
            Biuro
          </div>
        </Link>
        <div className='socials'>
          <div className='social'>
            <a href='#'>
              <FaGithub />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaFacebook />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaLinkedinIn />
            </a>
          </div>
          <div className='social'>
            <a href='#'>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
