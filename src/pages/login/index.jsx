import React, { Component } from 'react'
import firebaseConfig from '../../config/firebaseConfig';
import * as firebaseui from "firebaseui";
import firebase from "firebase";
class Login extends Component {
  componentDidMount() {
    const fbase = firebase.initializeApp(firebaseConfig);
    const uiConfig = {
      signInSuccess: [

      ],
      signInSuccessUrl: "/", //This URL is used to return to that page when we got success response for phone authentication.
      signInOptions: [
        {
          provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          fullLabel: 'Đăng nhập bằng số điện thoại',
          defaultCountry: 'VN',
          recaptchaParameters: {
            type: 'image',
            size: 'compact',
            badge: 'inline'
          }
        },
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          fullLabel: 'Đăng nhập bằng tài khoản Google',
        }, {

          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          fullLabel: 'Đăng nhập bằng tài khoản Facebook',
        },
      ],
      tosUrl: "https://netflix-clone-ankur.herokuapp.com/"
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
  render() {
    return (
      <div>
        <h1 >OTP</h1>
        <div id="firebaseui-auth-container"></div>
      </div>
    )
  }
}

export default Login