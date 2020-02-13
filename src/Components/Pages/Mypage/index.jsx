import React from 'react';
import './index.css';
import CheckboxLabels from '../../MaterialUiParts/FormControlLabel';
import profileImg from '../../../Images/Moeto1.jpg'

class Mypage extends React.Component {
    render(){
        const chalengeListArr = ["one","two","three"]
        const name = "鈴木萌斗"
        return(
            <div className='Mypage'>
                <div className="profile">
                    <img src={profileImg} alt="face photo"/>
                    <h1 className="userName">{name}</h1>
                </div>
                <div className="challengeList">
                <h2>Challenge List！</h2>
                    {chalengeListArr.map(listName=> {
                        return( 
                            <div className="list">
                                <ul><CheckboxLabels listName={listName}/></ul>
                            </div>
                        ) })}
                </div>

            </div>
        )
    }
}
export default Mypage;