import React from 'react';
import './App.css';
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

//①でモジュール化したfirebase.jsをインポート
import { firestore } from './plugins/firebase';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// pageのimport 
import NavBar from './Components/NavBar/index';
import SignIn from './Components/Pages/SignIn/index'

class App extends React.Component{
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
    created_at: new Date(),
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
    const uiConfig = {
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ]
    };
　　
    //空の変数を定義してifでログイン／ログアウト時の表示画面を切り替える
    let successfulUser;

    if(this.state.isLogin){
      successfulUser=(
        <div className="App">
          <Button variant="contained" color="secondary" onClick={this.logOut}>ログアウト</Button> 
            <NavBar />
        </div>
        
      );
     }else{
      successfulUser=(
        <div className="App">

        <Button variant="contained" color="secondary" onClick={this.logOut}>ログアウト</Button> 

        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        
        <SignIn />
        </div>
       );
      }   

     return(
　　　　//最終的な表示画面
       <div>
          {successfulUser}   
       </div>
      );
    }
}
export default App;