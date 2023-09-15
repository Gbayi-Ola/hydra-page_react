import React from 'react'
import Homestyle from './Home.css'
import { Link } from 'react-router-dom'
import maskgroup from '../../assets/img/Mask-group.png'
import component1 from '../../assets/img/Component 1.png'
import maskgroup2 from '../../assets/img/Mask-group 2.png'
import pexelshvet from '../../assets/img/pexels-shvets-production-7561969 1.png'
import pexelmikha from '../../assets/img/pexels-mikhail-nilov-7887140 1.png'
import pexelrodne from '../../assets/img/pexels-rodnae-productions-8098263 1.png'
import pexelmali from '../../assets/img/pexels-mali-maeder-756439 1.png'
import Component1 from '../../assets/img/Component 1.png'
import HydraTech1 from '../../assets/img/Hydra-Tech1 1.png'
import HydraTech2 from '../../assets/img/Hydra-Tech2 1.png'
import HydraTech3 from '../../assets/img/Hydra-Tech3 1.png'
import HydraTech4 from '../../assets/img/Hydra-Tech4 1.png'


const boxes = document.querySelectorAll('.sliding')

window.addEventListener('scroll', checkBoxes)

checkBoxes();
function checkBoxes() {
    const triggerBottom = window.innerHeight / 6 * 4

    for(const box of boxes){
        const boxTop = box.getBoundingClientRect().top

        const Result = (boxTop < triggerBottom)?box.classList.add('show'):box.classList.remove('show');
    }

}

const Home = () => {
  return (
    <>
        <div class="container-fluid dive">
            <div class="row">
                <div class="col-sm-6 px-0 dcol1 ">
                    <h6 class="mb-0"><span class="dcolor">Dive</span> Into The Depths <h6>Of <span class="dcolor">Virtual Reality</span></h6></h6>
                    <p class="pe-5 my-4 d-none d-md-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium molestiae neque adipisci dicta laborum qui explicabo sed tempora, atque eveniet a mollitia, fugit amet magnam, possimus corporis error magni repudiandae.</p>
                    <div class="d-flex">
                        <button class="btn sbtn">Build Your World</button>
                        <Link href="" class="text-decoration-none fa-solid fa-arrow-right fa fa-3x d-none d-md-block"></Link>
                    
                    </div>  
                </div>
                <div class="col-sm-6 ps-sm-5 order-first order-sm-last">
                    <img class="img-fluid" src={maskgroup} alt=""/>
                </div>
            </div>

            <div class="d-none d-lg-block">
                <div class="row contus mt-5 ">
                
                    <div class="col-lg-4 col-sm-6 my-auto">
                        <div class="d-flex mt-sm-5 mt-lg-4 border-end">
                            <div>
                                <i class="fa-solid fa-location-dot fa fa-4x md-mt-5"></i>
                            </div>
                            <div>
                                <h5>Pay Us a Visit</h5>
                                <p>Union St, Seattle, WA 90110, United States</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 my-auto">
                        <div class="d-flex mt-sm-5 mt-lg-4 border-end">
                            <div>
                                <i class="fa-solid fa-location-dot fa fa-4x"></i>
                            </div>
                            <div>
                                <h5>Give Ua a Call</h5>
                                <p>(110) 1111-1010</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 my-auto ">
                        <div class="d-flex mt-sm-3 mt-lg-4">
                            <div>
                                <i class="fa-solid fa-location-dot fa fa-4x"></i>
                            </div>
                            <div>
                                <h5>Give Ua a Call</h5>
                                <p>(110) 1111-1010</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

            <div class="d-none d-sm-block d-lg-none">
                <div class="row contus mt-5 ">
                
                    <div class="col-lg-4 col-sm-6 my-auto">
                        <div class="d-flex mt-sm-5 mt-lg-4 ">
                            <div>
                                <i class="fa-solid fa-location-dot fa fa-4x md-mt-5"></i>
                            </div>
                            <div>
                                <h5>Pay Us a Visit</h5>
                                <p>Union St, Seattle, WA 90110, United States</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 my-auto">
                        <div class="d-flex mt-sm-5 mt-lg-4">
                            <div>
                                <i class="fa-solid fa-location-dot fa fa-4x"></i>
                            </div>
                            <div>
                                <h5>Give Ua a Call</h5>
                                <p>(110) 1111-1010</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 my-auto mx-auto ">
                        <div class="d-flex mt-sm-3 mt-lg-4 mx-auto">
                            <div>
                                <i class="fa-solid fa-location-dot fa fa-4x"></i>
                            </div>
                            <div>
                                <h5>Give Ua a Call</h5>
                                <p>(110) 1111-1010</p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

            <div class="d-block d-sm-none">
                <div class="row contus mt-5">
                    <div id="carouselExample" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="d-flex mt-5 border-sm-end">
                                <div>
                                    <i class="fa-solid fa-location-dot fa fa-4x md-mt-5 "></i>
                                </div>
                                <div>
                                    <br/>
                                    <p>Union St, Seattle, WA 90110, United States</p>
                                </div>
                            </div>
                            
                          </div>
                          <div class="carousel-item">
                            <div class="d-flex mt-5 border-sm-end">
                                <div>
                                    <i class="fa-solid fa-location-dot fa fa-4x md-mt-5"></i>
                                </div>
                                <div>
                                    <br/>
                                    <p>Union St, Seattle, WA 90110, United States</p>
                                </div>
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="d-flex mt-5 border-sm-end">
                                <div>
                                    <i class="fa-solid fa-location-dot fa fa-4x md-mt-5"></i>
                                </div>
                                <div>
                                    <br/>
                                    <p>Union St, Seattle, WA 90110, United States</p>
                                </div>
                            </div>
                          </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                          <span class="carousel-control-next-icon " aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>          
        </div>



        <div className="container-fluid mt-5 intro d-sm-none d-md-block">
            <div className="row">
                <div className="col-md-6 col-sm-7 sliding">
                    <h3 className="h1 mb-0 mt-md-4 mt-lg-0">INTRODUCTION</h3>
                    <p ><span className="h1span">TO HYDRA VR</span> <img className="img-fluid img-arrow" src={component1} alt=""/>  </p>
                    
                    
                    <img className="img-fluid mt-3 mt-sm-5 hydra-img" src={maskgroup2} alt=""/>
                    
                </div>
                <div className="col-md-6 col-sm-5 intro-right sliding">
                    <p className="p1">Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                    </p>
                    <h3>ABOUT</h3>
                    <p className="pr2">HYDRA VR</p>
                    <p className="pr3 mt-4">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
                        sed. Consequat semp
                        er viverra nam libero justo laoreet sit amet. Aliquam 
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </p>
                    <button className="btn sbtn mt-3">LET'S GET IN TOUCH</button>
                </div>
            </div>
    
        </div>
        {/*  DISPLAY ON SM TO MD ALONE  */}
        <div className="container-fluid mt-5 intro row d-none d-sm-block d-md-none">
            <div className="row">
                <div className="col-md-6 col-sm-6 sliding">
                    
                    <img className="img-fluid hydra-img" src={maskgroup2} alt=""/>
                    
                </div>
                <div className="col-md-6 col-sm-6 mt-3 sliding">
                    
                    <h3>ABOUT HYDRA VR</h3>
                    
                    <p className="">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
                        urna neque viverra justo.
                    </p>
                    <button className="btn sbtn mt-3">GET IN TOUCH</button>
                </div>
            </div>
    
        </div>



        <div class="container-fluid build intro mt-5">
            <div class="row">
                <div class="col-md-6 col-sm-5 mt-3 mt-lg-2 sliding">
                    <h3 class="h1 mb-0 mt-md-4 mt-lg-0">WHY BUILD</h3>
                    <p ><span class="h1span">WITH HYDRA?</span> <img class="img-fluid img-arrow" src={component1} alt=""/>  </p>
                </div>
                <div class="col-md-6 col-sm-7 d-none d-sm-block sliding">
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>


                
            </div>
            
            <div class="d-none d-sm-block">
                <div class="row mt-5">
                    <div class="col-lg-3 col-sm-6 text-center mb-4 sliding">
                        <div class="card shadow">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelshvet} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">SIMULATION</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 text-center mb-4 sliding">
                        <div class="card shadow">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelmikha} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">EDUCATION</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 text-center sliding">
                        <div class="card shadow">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelrodne} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">SELF-CARE</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 text-center mb-5 sliding">
                        <div class="card shadow">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelmali} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">OUTDOOR</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-block d-sm-none mt-2">
                <div id="carouselCard" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div class="card shadow text-center">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelshvet} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">SIMULATION</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="card shadow text-center">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelmikha} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">EDUCATION</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="card shadow text-center">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelrodne} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">SELF-CARE</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div class="card shadow text-center">
                            <div class="card-img-top">
                                <img class="img-fluid   rounded-circle border border-dark p-2 mt-3" src={pexelmali} alt=""/>
                            </div>
                            <div class="card-body text-white">
                                <h4 class="card-title">OUTDOOR</h4>
                                <hr class="w-75 mx-auto"/>
                                <p class="card-text px-5 px-sm-0">Vitae sapien pellentesque habitant morbi
                                nunc. Viverra aliquet  porttitor rhoncus 
                                libero justo laoreet sit amet vitae.</p>
                                <button class="btn btn-card mb-3">TRY IT NOW</button>
                            </div>
                        </div>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselCard" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselCard" data-bs-slide="next">
                      <span class="carousel-control-next-icon " aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>



        <div className="container-fluid tech mt-5">
            <div className="bgimg position-relative rounded-pill text-center pt-5  d-none d-sm-block">
                <h4 className="pt-5">TECHNOLOGIES & HARDWARE</h4>
                <p>USED BY HYDRA VR.</p>
                <i className="fa-2x fa fa-chevron-down mt-5 position-absolute bottom-0 rounded-circle text-dark p-2 border border-5 border-dark"></i>
            </div>
                    {/* DISPLAY ON SM ONLY */}
            <div className="bgimg rounded-pill text-center mx-auto d-sm-none">
                <h4 className="pt-5">TECHNOLOGIES & HARDWARE</h4>
                <p>USED BY HYDRA VR.</p>
            </div>
        </div>

        <div class="container-fluid techcont">
            <div class="d-none d-sm-block">
                <div class="row ms-5 me-2">
                    <div class="col-lg-3 col-sm-6 unreal sliding">
                        <img class="img-fluid mt-5" src={HydraTech1} alt=""/>
                    </div>
                    <div class="col-lg-3 col-sm-6 unity sliding">
                        <img class="img-fluid mt-3" src={HydraTech3} alt=""/>
                    </div>
                    <div class="col-lg-3 col-sm-6 oculus sliding">
                        <img class="img-fluid mt-3" src={HydraTech2} alt=""/>
                    </div>
                    <div class="col-lg-3 col-sm-6 vive sliding">
                        <img class="img-fluid mt-2" src={HydraTech4} alt=""/>
                    </div>
                </div>
            </div>

            <div class="d-block d-sm-none mt-5">
                <div id="carouseltech" class="carousel slide">
                    <div class="carousel-inner">
                      <div class="carousel-item active text-center">
                        <img class="img-fluid " src={HydraTech1} alt=""/>
                      </div>
                      <div class="carousel-item text-center">
                        <img class="img-fluid mt-3" src={HydraTech3} alt=""/>
                      </div>
                      <div class="carousel-item text-center">
                        <img class="img-fluid mt-3" src={HydraTech2} alt=""/>
                      </div>
                      <div class="carousel-item text-center">
                        <img class="img-fluid mt-2" src={HydraTech4} alt=""/>
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouseltech" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouseltech" data-bs-slide="next">
                      <span class="carousel-control-next-icon " aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
        
        
        
        <div class="container-fluid build2 mt-lg-3 pb-0  pb-sm-5">
            <div class="row">
                <div class="col-md-6 col-sm-5 mt-3 mt-lg-2 col1">
                    <h3 class=" mb-0 mt-md-4 mt-lg-0">HOW WE BUILD</h3>
                    <p ><span class="hv">WITH HYDRA VR?</span> <img class="img-fluid img-arrow" src={Component1} alt=""/>  </p>
                </div>
                <div class="col-md-6 col-sm-7 d-none d-sm-block">
                    <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
                        nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
                        quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
                        lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
                </div>
            </div>
            
        </div>
        <div class="container-fluid build2b">
            <div class="row d-none d-sm-flex">
                <div class="col-lg-3 col-sm-6 mb-5 sliding">
                    <div class="mb-5 text-center">
                        <i class="rounded-circle p-4 border border-dark border-5"> 01</i>
                    </div>
                    <div class="text-center">
                        <span class="fa-solid fa-arrow-right fa fa-2x fc"></span>
                        <span class="d3">3D Conception</span>
                        <p class="p">& Design</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-5 sliding">
                    <div class="mb-5 text-center">
                        <i class="rounded-circle p-4 border border-dark border-5"> 02</i>
                    </div>
                    <div class="text-center">
                        <span class="fa-solid fa-arrow-right fa fa-2x fc"></span>
                        <span class="d3">Interaction</span>
                        <p class="p">Design</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 sliding">
                    <div class="mb-5 text-center">
                        <i class="rounded-circle p-4 border border-dark border-5"> 03</i>
                    </div>
                    <div class="text-center">
                        <span class="fa-solid fa-arrow-right fa fa-2x fc"></span>
                        <span class="d3">VR World</span>
                        <p class="p">User Testing</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 sliding">
                    <div class="mb-5 text-center">
                        <i class="rounded-circle p-4 border border-dark border-5"> 04</i>
                    </div>
                    <div class="text-center">
                        <span class="fa-solid fa-arrow-right fa fa-2x fc"></span>
                        <span class="d3">Hydra VR</span>
                        <p class="p">Deploy</p>
                    </div>
                </div>
                
            </div>
            <div class="row">
                <div class="d-block d-sm-none mt-5">
                    <div id="carouselnumb" class="carousel slide">
                        <div class="carousel-inner">
                          <div class="carousel-item active text-center">
                            <div class=" text-center">
                                <i class="rounded-circle p-4 border border-dark border-5"> 01</i>
                            </div>
                            <div class="mb-5 text-center">
                                <span class="">
                                    <span class="d3">3D Conception</span>
                                    <p class="p">& Design</p>
                                </span>
                            </div>
                          </div>
                          <div class="carousel-item text-center">
                            <div class=" text-center">
                                <i class="rounded-circle p-4 border border-dark border-5"> 02</i>
                            </div>
                            <div class="mb-5 text-center">
                                <span class="">
                                    <span class="d3">Interaction</span>
                                    <p class="p">Design</p>
                                </span>
                            </div>
                          </div>
                          <div class="carousel-item text-center">
                            <div class=" text-center">
                                <i class="rounded-circle p-4 border border-dark border-5"> 03</i>
                            </div>
                            <div class="mb-5 text-center">
                                <span class="">
                                    <span class="d3">VR World</span>
                                    <p class="p">User Testing</p>
                                </span>
                            </div>
                          </div>
                          <div class="carousel-item text-center">
                            <div class=" text-center">
                                <i class="rounded-circle p-4 border border-dark border-5"> 04</i>
                            </div>
                            <div class="mb-5 text-center">
                                <span class="">
                                    <span class="d3">Hydra VR</span>
                                    <p class="p">Deploy</p>
                                </span>
                            </div>
                          </div>
                        </div>
                        <button class="carousel-control-prev prev" type="button" data-bs-target="#carouselnumb" data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next next" type="button" data-bs-target="#carouselnumb" data-bs-slide="next">
                          <span class="carousel-control-next-icon " aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            
        </div>



        <div className="card p-5 text-white join mt-0 mt-sm-4 mt-lg-0">
            <div className="text-center">
                <h4>JOIN HYDRA</h4>
                <hr className="w-25 mx-auto"/>
                <p className="mb-3 mb-sm-4 mb-md-5">Let’s Build Your VR Experience</p>
            </div>
            <div className="row text-white">
                <div className="col-sm-6 sliding">
                    <form action="">
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-pill p-3" placeholder="First Name"/>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6 sliding">
                    <form action="">
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-pill p-3" placeholder="Last Name"/>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6 sliding">
                    <form action="">
                        <div className="mb-3">
                            <input type="email" className="form-control rounded-pill p-3" placeholder="Email"/>
                        </div>
                    </form>
                </div>
                <div className="col-sm-6 sliding">
                    <form action="">
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-pill p-3" placeholder="Phone Number"/>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 sliding">
                    <form action="">
                        <div className="mb-3">
                            <input type="text" className="form-control rounded-pill p-3" placeholder="Subject"/>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12 sliding">
                    <form action="">
                        <div className="mb-5">
                            <textarea className="form-control rounded rounded-5" name="" id="" cols="30" rows="10" placeholder="Tell Us Something..."></textarea>   
                        </div>
                    </form>  
                </div>
                <div className=" text-center">
                    <button className="btn sbtn">SEND ME TO HYDRA</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home