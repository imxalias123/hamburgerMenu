// Write your code here
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => (
  <div>
    <img
      src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
      alt="website logo"
      className="logo"
    />
    <button type="button" data-testid="hamburgerIconButton">
      <GiHamburgerMenu />
    </button>
  </div>
)

export default <Header />
