import React from 'react'
import './Modal.css'

const Modal = ({ email, onClose }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>Dziękujemy za e-mail</h2>
        <p>
          Niezwłocznie prześlemy propozycje na adres <b>{email}</b> .
        </p>
        <button
          className='close-button'
          onClick={onClose}
        >
          Zamknij
        </button>
      </div>
    </div>
  )
}

export default Modal
