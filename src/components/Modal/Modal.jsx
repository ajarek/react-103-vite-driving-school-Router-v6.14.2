import React from 'react'
import './Modal.css'

const Modal = ({ onClose, title, text }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2>{title}</h2>
        <p>{text}</p>
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
