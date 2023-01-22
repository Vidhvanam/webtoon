import logo from './logo3.png'
import './header.css'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className='logo me-5' src={logo} />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to="/genres">Genres</NavLink>
              </li>

              <li className="nav-item me-3">
                <NavLink className="nav-link" to='/popular'>Popular</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to='/contact'>Contact us</NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
            </ul>
            <button type="button" className="btn btn-dark me-2">Publish</button>
            <button className="btn btn-outline-success me-2 login-btn" type="button">
              <NavLink to='/login' className=''>login</NavLink>
            </button>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>

          </div>
        </div>
      </nav>
    </>


  )
}
export default Header

