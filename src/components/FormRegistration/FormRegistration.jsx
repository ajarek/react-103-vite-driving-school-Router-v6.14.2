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
    category: yup.string().required('Pole jest wymagane!'),
    time: yup.string().required('Pole jest wymagane!'),
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
      <div className='form-registration-wrapper'>
        <div className='wrapper-input'>
          <label htmlFor='name'>Imię Nazwisko</label>
          <input
            type='phone'
            placeholder='Wpisz swoje imie i nazwisko'
            autoFocus={true}
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
      <div className='form-registration-wrapper'>
        <h3>Wybierz kategorie:</h3>
        <p>{errors.category?.message}</p>
        <div className='radio'>
          <input
            type='radio'
            id={'B'}
            value={'B'}
            {...register('category')}
          />
          <label htmlFor={'B'}> B(samochód osobowy)</label>
        </div>
        <div className='radio'>
          <input
            type='radio'
            id={'C'}
            value={'C'}
            {...register('category')}
          />
          <label htmlFor={'C'}>C(samochód ciężarowy)</label>
        </div>
        <div className='radio'>
          <input
            type='radio'
            id={'CE'}
            value={'CE'}
            {...register('category')}
          />
          <label htmlFor={'CE'}>CE(przyczepa ciężarówki)</label>
        </div>
        <div className='radio'>
          <input
            type='radio'
            id={'D'}
            value={'D'}
            {...register('category')}
          />
          <label htmlFor={'D'}>D(autobusy)</label>
        </div>
        <h3>Wybierz porę dnia:</h3>
        <p>{errors.time?.message}</p>
        <div className='wrapper-row'>
          <div className='radio'>
            <input
              type='radio'
              id={'Poranek'}
              value={'Poranek'}
              {...register('time')}
            />
            <label htmlFor={'Poranek'}>Poranek</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              id={'Dzień'}
              value={'Dzień'}
              {...register('time')}
            />
            <label htmlFor={'Dzień'}>Dzień</label>
          </div>
          <div className='radio'>
            <input
              type='radio'
              id={'Wieczór'}
              value={'Wieczór'}
              {...register('time')}
            />
            <label htmlFor={'Wieczór'}>Wieczór</label>
          </div>
        </div>
      </div>
      <div className='submit-wrapper'>
        <input
          type='submit'
          value='Zapisuje się'
        />
      </div>
    </form>
  )
}
