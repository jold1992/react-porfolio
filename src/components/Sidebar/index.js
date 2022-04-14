import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoJ} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logoJohn" />
      </Link>
      <nav>
        <NavLink
          exact="true"
          to="/"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          to="/about"
          className={({ isActive }) =>
            isActive ? 'active about-link' : 'about-link'
          }
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'active contact-link' : 'contact-link'
          }
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jold1992"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jold1992"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/jold92">
            <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
