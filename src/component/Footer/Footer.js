import React from 'react'
import footerstyle from './Footer.css'
import frame from '../../assets/img/Frame.png'

const Footer = () => {
  return (
    <div className="container-fluid pb-3 footer">
            <div className="row text-center">
                <div className="col-lg-3 col-sm-6 mb-4">
                    <img src={frame} alt=""/>
                </div>
                <div className="col-lg-3 col-sm-6 mod d-none d-sm-block">
                    <h5 className="mb-3">ABOUT</h5>
                    <h5 className="mb-3">SERVICES</h5>
                    <h5 className="mb-3">TECHNOLOGIES</h5>
                    <h5 className="mb-3">HOW TO</h5>
                    <h5>JOIN HYDRA</h5>
                </div>
                <div className="col-lg-3 col-sm-6 mod2 d-none d-sm-block">
                    <h5 className="mb-4">F.A.Q</h5>
                    <h5 className="mb-4">SITEMAP</h5>
                    <h5 className="mb-4">CONDITIONS</h5>
                    <h5>LICENSES</h5>
                </div>
                <div className="col-lg-3 col-sm-6">
                    <div><h6>SOCIALIZE WITH HYDRA</h6></div>
                    <div className="mt-3 mt-sm-5 mb-4 mb-sm-5">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter mx-3"></i>
                        <i className="fa-brands fa-linkedin me-3"></i>
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-instagram mx-3"></i>
                        <i className="fa-brands fa-pinterest"></i>
                    </div>
                    <div>
                        <button className="btn sbtn">BUILD YOUR WORLD</button>
                    </div>
                </div>
            </div>
            <hr/>
            <p className="text-center d-none d-sm-block footer-text">2023 &copy; HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
            <p className="text-center d-none d-sm-block footer-text">MADE WITH <span className="text-danger">❤</span> BY GBAYI$</p>
            <div className="d-block d-sm-none text-center">
                <p>2023 &copy; HYDRA LANDING PAGE</p>
                <p>BY ZINE. E. FALOUTI</p>
                <p>ALL RIGHTS RESERVED</p>
                <p> MADE WITH ❤ BY GBAYI$</p>
            </div>
        </div>
  )
}

export default Footer