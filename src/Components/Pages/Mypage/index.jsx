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
                <img src={profileImg} alt="face photo"/>
                <h1 className="userName">{name}</h1>

                <div className="challengeList">
                <h3>Challenge List</h3>
                    <li>
                        {chalengeListArr.map(listName=> {
                            return( 
                                <div className="list">
                                    <ul><CheckboxLabels listName={listName}/></ul>
                                </div>
                         ) })}
                    </li>
                </div>

            </div>
        )
    }
}
export default Mypage;