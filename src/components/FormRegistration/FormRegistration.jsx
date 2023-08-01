import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import './FormRegistration.css'

export const FormRegistration = ({ onSubmit }) => {
  const schema = yup.object().shape({
    name: yup.string().required('Pole jest wymagane!'),
    age: yup.number().min(18).max(99).required('Pole jest wymagane!'),
    phone: yup.string().required('Pole jest wymagane!'),
    email: yup.string().email().required('Pole jest wymagane!'),
    
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  return (
    <form
      className='form-registration'
      onSubmit={handleSubmit(onSubmit)}
    > 
    <div className="form-registration-wrapper">
    <div className='wrapper-input'>
      <label htmlFor='name'>Imię Nazwisko</label>
      <input
        type='phone'
        placeholder='Wpisz swoje imie i nazwisko'
        {...register('name')}
      />
      <p>{errors?.name?.message}</p>
      </div>
      <div className='wrapper-input'>
      <label htmlFor='age'>Wiek</label>
      <input
        type='number'
        placeholder='Wpisz wiek'
        {...register('age')}
      />
      <p>{errors?.age?.message}</p>
      </div>
      <div className='wrapper-input'>
      <label htmlFor='phone'>Numer telefonu</label>
      <input
        type='phone'
        placeholder='Wprowadź nr telefonu'
        {...register('phone')}
      />
      <p>{errors?.phone?.message}</p>
      </div>
      <div className='wrapper-input'>
      <label htmlFor='email'>E-mail</label>
      <input
        type='email'
        placeholder='Wprowadź email'
        {...register('email')}
      />
      <p>{errors.email?.message}</p>
      </div>
      </div>
      <div className="form-registration-wrapper">
      <div className='wrapper-input'>
      <label htmlFor='email'>Wybierz kategorię</label>
        </div> 
      </div>
      <div className="submit-wrapper">
      <input
        type='submit'
        value='Zapisuje się'
      />
      </div>
    </form>
  )
}
