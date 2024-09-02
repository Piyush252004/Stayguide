// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
// // import { Link } from "react-router-dom";

// export const Navbar = () => {
//     return (
//     <div className="header sticky-top">
//         <nav className="navbar navbar-expand-md navbar-light">
//             <a className="navbar-brand" href="index.html">
//                 <img src="/img/logo-removebg-preview.png" />
//             </a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-navbar">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse justify-content-end" id="my-navbar">
//                 <ul className="navbar-nav">
//                     <li className="nav-item">
//                         <a className="nav-link" href="#" data-toggle="modal" data-target="#signup-modal">
//                             <i className="fas fa-user"></i>Signup
//                         </a>
//                         {/* <Link to='/' className='nav-link' data-toggle="modal" data-target="#signup-modal">
//                         <i className="fas fa-user"></i>Signup</Link> */}
//                     </li>
//                     <div className="nav-vl"></div>
//                     <li className="nav-item">
//                         <a className="nav-link" href="#" data-toggle="modal" data-target="#login-modal">
//                             <i className="fas fa-sign-in-alt"></i>Login
//                         </a>
//                         {/* <Link to='/about' className='nav-link' data-toggle="modal" data-target="#login-modal">
//                         <i className="fas fa-sign-in-alt"></i>Login</Link> */}
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//         <div className="modal fade" id="signup-modal" tabindex="-1" role="dialog" aria-labelledby="signup-heading" aria-hidden="true">
//     <div className="modal-dialog" role="document">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title" id="signup-heading">Signup with StayGuide</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>

//             <div className="modal-body">
//                 <form id="signup-form" className="form" role="form">
//                     <div className="input-group form-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 <i className="fas fa-user"></i>
//                             </span>
//                         </div>
//                         <input type="text" className="form-control" name="full_name" placeholder="Full Name" maxlength="30" required />
//                     </div>

//                     <div className="input-group form-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 <i className="fas fa-phone-alt"></i>
//                             </span>
//                         </div>
//                         <input type="text" className="form-control" name="phone" placeholder="Phone Number" maxlength="10" minlength="10" required />
//                     </div>

//                     <div className="input-group form-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 <i className="fas fa-envelope"></i>
//                             </span>
//                         </div>
//                         <input type="email" className="form-control" name="email" placeholder="Email" required />
//                     </div>

//                     <div className="input-group form-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 <i className="fas fa-lock"></i>
//                             </span>
//                         </div>
//                         <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required />
//                     </div>

//                     <div className="input-group form-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 <i className="fas fa-university"></i>
//                             </span>
//                         </div>
//                         <input type="text" className="form-control" name="college_name" placeholder="College Name" maxlength="150" required />
//                     </div>

//                     <div className="form-group">
//                         <span>I'm a</span>
//                         <input type="radio" className="ml-3" id="gender-male" name="gender" value="male" /> Male
//                         <label for="gender-male">
//                         </label>
//                         <input type="radio" className="ml-3" id="gender-female" name="gender" value="female" />
//                         <label for="gender-female">
//                             Female
//                         </label>
//                     </div>

//                     <div className="form-group">
//                         <button type="submit" className="btn btn-block btn-primary">Create Account</button>
//                     </div>
//                 </form>
//             </div>

//             <div className="modal-footer">
//                 <span>Already have an account?
//                     <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Login</a>
//                 </span>
//             </div>
//         </div>
//     </div>
// </div>

// <div className="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-heading" aria-hidden="true">
//     <div className="modal-dialog modal-dialog-centered" role="document">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title" id="login-heading">Login with StayGuide</h5>
//                 <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>

//             <div className="modal-body">
//                 <form id="login-form" className="form" role="form">
//                     <div className="input-group form-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 <i className="fas fa-user"></i>
//                             </span>
//                         </div>
//                         <input type="email" className="form-control" name="email" placeholder="Email" required />
//                     </div>

//                     <div className="input-group form-group">
//                         <div className="input-group-prepend">
//                             <span className="input-group-text">
//                                 <i className="fas fa-lock"></i>
//                             </span>
//                         </div>
//                         <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required />
//                     </div>

//                     <div className="form-group">
//                         <button type="submit" className="btn btn-block btn-primary">Login</button>
//                     </div>
//                 </form>
//             </div>

//             <div className="modal-footer">
//                 <span>
//                     <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#signup-modal">Click here</a>
//                     to register a new account
//                 </span>
//             </div>
//         </div>
//     </div>
// </div>
//     </div>
    
//     )
// }

import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';


export const Navbar = () => {
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <div className="header sticky-top">
      <nav className="navbar navbar-expand-md navbar-light">
        <a className="navbar-brand" href="index.html">
          <img src="/img/logo-removebg-preview.png" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#my-navbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="my-navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => setShowSignupModal(true)} style={{ cursor: 'pointer' }}>
                <i className="fas fa-user"></i> Signup
              </a>
            </li>
            <div className="nav-vl"></div>
            <li className="nav-item">
              <a className="nav-link" onClick={() => setShowLoginModal(true)} style={{ cursor: 'pointer' }}>
                <i className="fas fa-sign-in-alt"></i> Login
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" onClick={() => setShowLoginModal(true)} style={{ cursor: 'pointer' }}>
                <i className="fas fa-user"></i> Profile
              </a>
            </li> */}
          </ul>
        </div>
      </nav>

      {/* Signup Modal */}
      <Modal id="signup-modal" aria-labelledby="signup-heading" aria-hidden="true" show={showSignupModal} onHide={() => setShowSignupModal(false)}>
        <ModalHeader closeButton>
          <h5 className="modal-title" id="signup-heading">Signup with StayGuide</h5>
        </ModalHeader>
        <ModalBody>
          <form id="signup-form" className="form" role="form">
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              <input type="text" className="form-control" name="full_name" placeholder="Full Name" maxlength="30" required />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-phone-alt"></i>
                </span>
              </div>
              <input type="text" className="form-control" name="phone" placeholder="Phone Number" maxlength="10" minlength="10" required />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input type="email" className="form-control" name="email" placeholder="Email" required />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required />
            </div>

            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-university"></i>
                </span>
              </div>
              <input type="text" className="form-control" name="college_name" placeholder="College Name" maxlength="150" required />
            </div>

            <div className="form-group">
              <span>I'm a</span>
              <input type="radio" className="ml-3" id="gender-male" name="gender" value="male" /> Male
              <label for="gender-male">
              </label>
              <input type="radio" className="ml-3" id="gender-female" name="gender" value="female" />
              <label for="gender-female">
                Female
              </label>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-block btn-primary">Create Account</button>
            </div>
          </form>
        </ModalBody>

        <ModalFooter>
          <span>Already have an account?
            <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Login</a>
          </span>
        </ModalFooter>
      </Modal>

      {/* Login Modal */}
<Modal id="login-modal" aria-labelledby="login-heading" aria-hidden="true" show={showLoginModal} onHide={() => setShowLoginModal(false)}>
  <ModalHeader closeButton>
    <h5 className="modal-title" id="login-heading">Login with StayGuide</h5>
  </ModalHeader>
  <ModalBody>
    <form id="login-form" className="form" role="form">
      <div className="input-group form-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-envelope"></i>
          </span>
        </div>
        <input type="email" className="form-control" name="email" placeholder="Email" required />
      </div>

      <div className="input-group form-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fas fa-lock"></i>
          </span>
        </div>
        <input type="password" className="form-control" name="password" placeholder="Password" minlength="6" required />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-block btn-primary">Login</button>
      </div>

      <div className="form-group">
        <span>Don't have an account?
          <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#signup-modal">Signup</a>
        </span>
      </div>
    </form>
  </ModalBody>
</Modal>
</div>
)
}
