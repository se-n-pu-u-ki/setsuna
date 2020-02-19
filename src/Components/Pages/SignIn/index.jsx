import React from "react";
import './index.css'

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import { firestore } from '../../../plugins/firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// TextField from Material-UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SignIn extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',

    }
    this.getName = this.getName.bind(this);
    this.addData = this.addData.bind(this);
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
    
      addData(){ 
        firestore.collection('users').add({
        name: this.state.name,
        }).then(() => {
        this.setState({
          name: '',
        });
      })};

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
            <div className="SignIn">
                <form  noValidate autoComplete="off">
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                
                <div className='InitialSetting'>
                <p>ニックネーム</p>
                <TextField id="outlined-basic" label="ニックネーム" variant="outlined" value= {this.state.name} onChange={(event)=>{this.getName(event)}}> </ TextField>
                <p>年齢</p>
                <TextField id="outlined-basic" label="年齢" variant="outlined"> </ TextField>
                <p>性別</p>
                <select name="sex">
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                </select>
                <Button onClick={this.addData}>登録</Button>
                </div>
                </form>
              </div>
        )
    }
}
export default SignIn;