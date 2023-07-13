import {Link} from "react-router-dom"

import './index.css'

const Header = () =>{
    return(
      <div className="bg-container">
        <div className="header-logo-heading">
          <a href="https://www.youtube.com/channel/UCOE8HMgcjpPGo0zLfxTY37w" rel="noreferrer" target="_blank">
            <img
              className="logo"
              alt="logo"
              src="https://res.cloudinary.com/dne55va8l/image/upload/v1689139531/WhatsApp_Image_2023-07-08_at_01.37.36-removebg-preview_ncbxwp.png"
            />
          </a>
          <h2 id="heading">ONESTOP SOLUTION</h2>
        </div>
        <Link className="tab-item" to="/">
            Home
            </Link>
            <Link className="tab-item" to="/links">
            Links
            </Link>
            <Link className="tab-item" to="/videos">
            Videos
            </Link>
        <hr />
      </div>
    )
}

export default Header