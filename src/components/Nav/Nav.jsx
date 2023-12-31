import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { GiSteeringWheel } from 'react-icons/gi'
import './Nav.css'

const Nav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className='nav'>
      <Link
        className='link link-logo'
        to={'/'}
      >
        <div className='img'>
          <GiSteeringWheel size={30} />
        </div>
        <h1>Szkoła Jazdy</h1>
      </Link>

      <ul className={!isOpen ? 'wrapper' : 'wrapper navbar-none'}>
        <Link
          className='link link-text'
          to={'/kategorie'}
        >
          Kategorie i ceny
        </Link>
        <Link
          className='link link-text'
          to={'/zgloszenie'}
        >
          Zgłoszenie
        </Link>
        <Link
          className='link link-text'
          to={'/kontakt'}
        >
          Kontakt
        </Link>
      </ul>
      <div className='hamburger'>
        <Hamburger
          size={30}
          duration={0.3}
          distance='md'
          color={isOpen ? '#ff3f34' : '#1e272e'}
          easing='ease-in'
          rounded
          label='Show menu'
          onToggle={(toggled) => {
            setOpen(true)
            if (toggled) {
              // open a menu
            } else {
              setOpen(false)
            }
          }}
        />
      </div>
    </nav>
  )
}

export default Nav
