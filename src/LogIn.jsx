import React, { useState } from 'react';

import Helmet from 'react-helmet';
import Logo from './images/logo.png';

import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import ConfettiGenerator from "confetti-js";

import './Login.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function logIn(emailP, passwordP) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      await logIn(email, password);
      navigate('/strip-maker');
    } catch (e) {
      alert('משתמש לא קיים');
    }
  };
  React.useEffect(() => {
    const confettiSettings = { target: 'my-canvas',size:1.2,rotate:true,max:200 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
   
    return () => confetti.clear();
  }, []) // add the var dependencies or not

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#000000',
      }}
      className="position-relative"
    >
      <canvas className='position-absolute top-0' id="my-canvas"></canvas>

      <Helmet>
        <title>Cheers - magnets background | LogIn</title>
        {/* <meta name='' /> */}
      </Helmet>
      <img src={Logo} style={{ height: 180, width: 180 }} alt="" />

      <div className="form-bg" style={{zIndex:"9999"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3">
              <div className="form-container">
                <div className="form-icon">
                  <i className="fa fa-user"></i>
                </div>
                <h3 className="title">התחברות למערכת</h3>

                <form className="form-horizontal clearfix">
                  <div className="form-group">
                    <span className="input-icon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="מייל"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="form-group">
                    <span className="input-icon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="סיסמה"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </div>
                  <button type="button" className="btn btn-default" onClick={handleLogin}>
                    <i className="fa fa-arrow-right"></i>כניסה
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Container> */}
      {/* <input type="email" value={email} onChange={handleEmailChange} />
        <input type="password" value={password} onChange={handlePasswordChange} /> */}
      {/* </Container> */}
    </div>
  );
};

export default LogIn;
