import React from "react";

import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// TextField from Material-UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

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
          const classes = useStyles();

        return(
            <React.Fragment>
                <form className={classes.root} noValidate autoComplete="off">
                <p>Please sign-in:</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                
                <div className='InitialSetting'>
                <p>ニックネーム</p>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"> </ TextField>
                <p>年齢</p>
                <TextField id="outlined-basic" label="Outlined" variant="outlined"> </ TextField>
                <p>性別</p>
                <select name="sex">
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                </select>
                <a href="#">登録</a>
                </div>

                </form>
              </React.Fragment>
        )
    }
}
export default SignIn;