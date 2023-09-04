// Write your code here
// Write your code here
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import 'reactjs-popup/dist/index.css'
import './index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

const Header = () => (
  <div className="container">
    <div className="nav-bar">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>

      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="ham-btn"
              data-testid="hamburgerIconButton"
            >
              <GiHamburgerMenu className="ham-icon" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <>
              <button
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
                className="close"
              >
                <IoMdClose />
              </button>

              <Link to="/" onClick={() => close()} className="wrap-popup-btn">
                <AiFillHome className="home-icon-popup" />
                <p className="popup-text">Home</p>
              </Link>
              <Link
                to="/about"
                onClick={() => close()}
                className="wrap-popup-btn"
              >
                <BsInfoCircleFill className="about-icon-popup" />
                <p className="popup-text">About</p>
              </Link>
            </>
          )}
        </Popup>
      </div>
    </div>
    <hr className="hr-line" />
  </div>
)

export default withRouter(Header)
