import './Registration.css'
import {FormRegistration} from '../../components/FormRegistration/FormRegistration'
const Registration = () => {
  const handleSubmit=(e)=>{
   console.log(e);
  }
  return (
    <div className='registration'>
      <h1>Szczegółowy wniosek o szkolenie</h1>
      <FormRegistration onSubmit={handleSubmit}/>
    </div>
  )
}

export default Registration