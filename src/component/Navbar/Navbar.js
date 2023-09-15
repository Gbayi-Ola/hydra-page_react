import React from 'react'
import Navbarcss from './Navbar.css'
import {Link} from 'react-router-dom'
import Frame from '../../assets/img/Frame.png'
import Group from '../../assets/img/Group.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl">
            <Link to='/' className="navbar-brand">
                <img style={{width: "102px", height: "103px"}} src={Frame} alt=""/>
                <img style={{width: "76px", height: "46px"}} src={Group} alt=""/>
            </Link>
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end offcanvas-bg" id="offcanvasNavbar">
                <div className="offcanvas-header">
                    <button className="btn-close bg-white" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to='/about' className="nav-link text-white me-4">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/service" className="nav-link text-white me-4">SERVICES</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tech" className="nav-link text-white me-4">TECHNOLOGY</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/join" className="nav-link text-white ">HOW TO</Link>
                        </li>
                    </ul>
                    <div className="dblock">
                        <Link to='/about' className="btn text-white mt-0  me-3 border rounded-pill px-5 ">Contact</Link>
                        <Link to='/join' className="btn text-white mt-0  border rounded-pill px-5 navbtn">JOIN HYDRA</Link>
                    </div>
                        
                </div>
            </div>
        </nav>
  )
}

export default Navbar