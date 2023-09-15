import React from 'react'

const Join = () => {
  return (
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
  )
}

export default Join