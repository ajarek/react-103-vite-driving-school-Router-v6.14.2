import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Registration.css'
import {FormRegistration} from '../../components/FormRegistration/FormRegistration'
import Modal from '../../components/Modal/Modal'
const Registration = () => {
  const [showModal, setShowModal] = useState(false)
  const [userData, setUserData] = useState([{}])
  const navigate = useNavigate()
  const handleSubmit=(data)=>{
    setUserData(data);
   setShowModal(true)
  }
  const handleCloseModal = () => {
    setShowModal(false)
    navigate('/')
  }
  return (
    <div className='registration'>
      {showModal ? (
        <Modal
          onClose={handleCloseModal}
          title={`${userData.name} dziękujemy  za rejestracje.`}
          text={`Wybrany kurs: ${userData.category},
           pora dnia: ${userData.time},
            szczegóły prześlemy na adres email: ${userData.email}
             oraz sms-em na nr ${userData.phone}`}
        />
      ) : null}
      <h1>Szczegółowy wniosek o szkolenie</h1>
      <FormRegistration onSubmit={handleSubmit}/>
    </div>
  )
}

export default Registration