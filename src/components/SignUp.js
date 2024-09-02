import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API or perform signup logic here
    console.log('Signup form submitted:', {
      fullName,
      phone,
      email,
      password,
      gender,
    });
    navigate('/login', {replace : true});
  };

  return (
    <Modal id="signup-modal" aria-labelledby="signup-heading" aria-hidden="true" show={true} onHide={() => console.log('Modal closed')}>
      <ModalHeader closeButton style={{ backgroundColor: '#337ab7', color: '#fff' }}>
        <h5 className="modal-title" id="signup-heading" style={{ fontSize: 24, fontWeight: 'bold' }}>
          Signup with StayGuide
        </h5>
      </ModalHeader>
      <ModalBody style={{ padding: 20 }}>
        <form id="signup-form" className="form" role="form" onSubmit={handleSubmit}>
          <div className="input-group form-group" style={{ marginBottom: 20 }}>
            <div className="input-group-prepend">
              <span className="input-group-text" style={{ backgroundColor: '#fff', border: 'none', borderRadius: 5 }}>
                <i className="fas fa-user" style={{ fontSize: 16, color: '#666' }}></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="full_name"
              placeholder="Full Name"
              maxLength="30"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                border: 'none',
                borderRadius: 5,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>

          <div className="input-group form-group" style={{ marginBottom: 20 }}>
            <div className="input-group-prepend">
              <span className="input-group-text" style={{ backgroundColor: '#fff', border: 'none', borderRadius: 5 }}>
                <i className="fas fa-phone-alt" style={{ fontSize: 16, color: '#666' }}></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              maxLength="10"
              minLength="10"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                border: 'none',
                borderRadius: 5,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>

          <div className="input-group form-group" style={{ marginBottom: 20 }}>
            <div className="input-group-prepend">
              <span className="input-group-text" style={{ backgroundColor: '#fff', border: 'none', borderRadius: 5 }}>
                <i className="fas fa-envelope" style={{ fontSize: 16, color: '#666' }}></i>
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                border: 'none',
                borderRadius: 5,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>

          <div className="input-group form-group" style={{ marginBottom: 20 }}>
            <div className="input-group-prepend">
              <span className="input-group-text" style={{ backgroundColor: '#fff', border: 'none', borderRadius: 5 }}>
                <i className="fas fa-lock" style={{ fontSize: 16, color: '#666' }}></i>
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                border: 'none',
                borderRadius: 5,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>

          <div className="form-group">
            <span>I'm a</span>
            <input
              type="radio"
              className="ml-3"
              id="gender-male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="gender-male">Male</label>
            <input
              type="radio"
              className="ml-3"
              id="gender-female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
            />
            <label for="gender-female">Female</label>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-block btn-primary">Create Account</button>
          </div>
        </form>
      </ModalBody>

      <ModalFooter>
        <span>Already have an account?</span>
        <a href="#" data-dismiss="modal" data-toggle="modal" data-target="#login-modal">Login</a>
      </ModalFooter>
    </Modal>
  );
};