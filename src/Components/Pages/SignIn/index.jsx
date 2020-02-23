import React from "react";

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firestore } from '../../../plugins/firebase';

// TextField from Material-UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      address: '',
      image: '',
      isLogin: false,
    }    
    this.getName = this.getName.bind(this);
    this.getAddress = this.getAddress.bind(this);
    this.getImage = this.getImage.bind(this);
    this.addData = this.addData.bind(this);
    this.logOut = this.logOut.bind(this);
    }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isLogin: true,
      });
    });
  }

  getName(event) {
    this.setState({
      name: event.target.value,
    });
  };

  getAddress(event) {
    this.setState({
      address: event.target.value,
    });
  };

  getImage(event){
    let image = event.target.files[0];
    this.setState({
      image: image,
    });
  }

  addData(){ 
    firestore.collection('users').add({
    name: this.state.name,
    address: this.state.address,
    }).then(() => {
    this.setState({
      name: '',
      address: '',
    });
  })
   let storageRef = firebase.storage().ref().child(this.state.name+`.png`);
   storageRef.put(this.state.image)
   .then(function(snapshot) {
    alert("送信されました");
   });
   console.log("登録ボタン");
  }


  logOut(){
    this.setState({
      isLogin: false,
    });
  }



    render(){
        return(
          <React.Fragment>
            <form>
              <TextField  label="名前" 
              value= {this.state.name} 
              onChange={(event)=>{this.getName(event)}}/> 
              <br/>

              <TextareaAutosize 
              aria-label="住所" 
              rowsMax={4} 
              placeholder="住所" 
              value= {this.state.address} 
              onChange={(event)=>{this.getAddress(event)}}
              />;
              <br/>
              <input type = "file" 
              onChange={(event)=>{this.getImage(event)}}>
              </input>
              <br/>
              <Button variant="contained" color="primary" onClick={this.addData}>登録</Button>
            </form>
            </React.Fragment>
        )
    }
}
export default SignIn;