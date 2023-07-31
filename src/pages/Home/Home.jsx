import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home-info'>
        <h1>NAUCZ SIĘ JEŹDZIĆ W 3 MIESIĄCE</h1>
        <p>
          Naucz się jeździć w 3 miesiące. Już 15 lat zapewniamy wysokiej jakości lekcje
          jazdy , które kończy ponad 150 kursantów miesięcznie.
        </p>
        <Link className='home-info-link'>Zapisz się →</Link>
      </div>
      <div className="home-img">

      </div>
    </div>
  )
}

export default Home
