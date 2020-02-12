import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import Column from '../Pages/Column/index';
import Feedback from '../Pages/Feedback/index';
import Match from '../Pages/Match/index';
import Mypage from '../Pages/Mypage/index';
import Result from '../Pages/Result/index';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import FeedbackRoundedIcon from '@material-ui/icons/FeedbackRounded';
import ViewColumnRoundedIcon from '@material-ui/icons/ViewColumnRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `3px solid ${theme.palette.divider}`,
    display: "inline-block",
    width: "100%"

  },
  toolbarTitle: {
    width:"20%",
    height:'60px',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontFamily:'arial black',
    fontSize:"20px"	

  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  sighup:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    width:"20%"
  },
  tabs:{
    width:"10%",
    height:"30px",
    background: 'white',
    fontFamily:'arial black',
    fontSize:"14px"	
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Router>
      <Toolbar className={classes.toolbar}>
        <NavLink to="/"><Button size="small" className={classes.toolbarTitle}>Setsuna</Button></NavLink>
            
        <NavLink to="Column"><Button className={classes.tabs}><ViewColumnRoundedIcon /></Button></NavLink>
        <NavLink to="Feedback"><Button className={classes.tabs}><FeedbackRoundedIcon /></Button></NavLink>
        <NavLink to="Match"><Button className={classes.tabs}><GroupAddRoundedIcon /></Button></NavLink>
        <NavLink to="Mypage"><Button className={classes.tabs}><AccountCircleIcon/></Button></NavLink>
        <NavLink to="Result"><Button className={classes.tabs}><TrendingUpRoundedIcon /></Button></NavLink>
        <IconButton>
        </IconButton>
        <Button variant="outlined" size="small" className={classes.signup}>Sign up</Button>
      </Toolbar>
          <div className="mainpageArea">
            <Route exact path="/" component={Mypage}></Route>
            <Route path="/Mypage" component={Mypage}></Route>
            <Route path="/Match" component={Match}></Route>
            <Route path="/Column" component={Column}></Route>
            <Route path="/Feedback" component={Feedback}></Route>
            <Route path="/Result" component={Result}></Route>
          </div>
      </Router>

    </React.Fragment>
  );
}