import React from 'react';
import Google from '../../../home-decoration/Image_Icon/Icon/Group 573.png';
import './GoogleLogin.css';
const GoogleLogin = ({ handleGoogleLogin }) => {

  return (
    <>
      <p>Or Using Other</p>
      <button onClick={() => handleGoogleLogin()} className="login-btn">
        <img src={Google} alt="" />
        <p className="login-title">Continue with Google</p>
      </button>
    </>
  );
};

export default GoogleLogin;