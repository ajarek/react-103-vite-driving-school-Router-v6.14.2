import data from '../../assets/data.json'
import { Link } from 'react-router-dom'
import './Category.css'

const Category = () => {
  return (
    <div className='category'>
      {data.map((el) => {
        return (
          <div
            key={el.id}
            className='card'
          >
            <h3>
              Kategoria <span>{el.category}</span>
            </h3>
            <div className='img'>
              <img
                src={el.src}
                alt='car model'
              />
            </div>
            <div className='price'>
              💸Cena: <b>{el.price}</b> PLN w tym paliwo
            </div>
            <div className='theory'>
              📖Teoria: <b>{el.theory}</b> m-c
            </div>
            <div className='practice'>
              🚘Praktyka: <b>{el.practice}</b> m-c
            </div>
            <Link
              to={'/zgloszenie'}
              className='card-link'
            >
              Zapisz się →
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Category
