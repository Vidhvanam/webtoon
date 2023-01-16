import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom"
// import { GoogleRegistration } from 'react-google-Registration';
// import { gapi } from 'gapi-script';


const emailRegex =/^[A-Za-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const Registration = ({ setRegistrationUser }) => {
  const [user,setUser] = useState({
    userName:"",
    email:"",
    phone:"",
    password: "",
    conformPass : ""
})
const [error ,setError] = useState({
    errEmail :'',
    errPass :''
})

const formValidation = (e) =>{
  const {name , value} = e.target
  const newError = error
  switch(name){
    case 'email':
     newError.errEmail = emailRegex.test(value) ? '' :'Enter valid email'
      break;
    case 'pass':
     
    newError.errPass = value.length < 6 ? 'Password should be at least 6 character long' :''
      break;

  
  }
  setUser({...user , [name] : value})
  setError(newError)
}
  return (
    <section className="main-container">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-Registration-form/draw2.webp"
              className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Registrater to webtoon</p>

          </div>    
              <div className="form-outline  mt-5 mb-3">
                <input type="email" id="form3Example3" className=" form-control form-control-lg"
                  name='phone'
                  placeholder="Enter user name" 
                  onChange={formValidation}/>
              </div>
              <div className="form-outline mb-3">
                <input type="email" id="form3Example3" className=" form-control form-control-lg"
                  name='email'
                  placeholder="Enter a valid email address" 
                  onChange={formValidation}/>
                  {error.errEmail.length > 0 && <small className='invalid-feedback d-block'>{error.errEmail}</small>}
              </div>
              <div className="form-outline  mb-3">
                <input type="email" id="form3Example3" className=" form-control form-control-lg"
                  name='phone'
                  placeholder="Enter phone number" 
                  onChange={formValidation}/>
              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  name='password'
                  placeholder="Enter password" 
                  onChange={formValidation}/>
                  {error.errPass.length > 0 && <small className='invalid-feedback d-block'>{error.errPass}</small>}

              </div>
              <div className="form-outline mb-3">
                <input type="password" id="form3Example4" className="form-control form-control-lg"
                  name='conformPass'
                  placeholder="Conform Password" 
                  onChange={formValidation}/>
                  {error.errPass.length > 0 && <small className='invalid-feedback d-block'>{error.errPass}</small>}

              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                  <label className="form-check-label" htmlFor="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-body">Forgot password?</a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="button" className="btn  btn-lg main-btn">Registration</button>
                <p className="small fw-bold mt-2 pt-1 mb-0">Have an account? <NavLink to="/login"
                  className="link-danger">LOGIN</NavLink></p>
              </div>

            </form>
          </div>
        </div>
      </div>

    </section>
  )

}
export default Registration