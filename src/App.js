import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar/index';
import SignIn from './Components/Pages/SignIn/index'

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import  { firestore }  from './plugins/firebase';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLogin: false,
    }    
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
      this.setState({
        isLogin: true,
      });}

    });
  }


  render(){
    return(<SignIn />)

    // if(this.state.isLogin){
    // return (
    //   <div className="App">
    //     <NavBar />
    //   </div>
    // );
    // }
    // else{
    //   return(
    //   <SignIn />
    //   )
    // }
   }
}

export default App;