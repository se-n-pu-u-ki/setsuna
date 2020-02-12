import React from 'react';
import './index.css';
import FormControlLabelPosition from '../../MaterialUiParts/FormControlLabelPosition';

class Mypage extends React.Component {
    render(){
        const chalengeListArr = ["one","two","three"]
        const name = "鈴木萌斗"
        return(
            <div className='Mypage'>
                <img src="../../Images/Moeto.jpg" alt="face photo"/>
                <h1>{name}</h1>
                <div className="challengeList">
                    <li>
                        {chalengeListArr.map(x=> {
                            return( 
                                <div className="list">
                                    <ul>
                                       <FormControlLabelPosition /> <p className="listName">{x}</p>
                                    </ul>
                                </div>
                         ) })}
                    </li>
                </div>
            </div>
        )
    }
}
export default Mypage;