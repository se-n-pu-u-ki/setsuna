import React from "react";

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class SignIn extends React.Component{
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          this.setState({
            isLogin: true,
          });
        });
      }

    render(){
        const uiConfig = {
            signInFlow: 'popup',
            signInSuccessUrl: '/',
            signInOptions: [
              firebase.auth.GoogleAuthProvider.PROVIDER_ID,
              firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ]
          };
        return(
            <div>
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        )
    }
}
export default SignIn;