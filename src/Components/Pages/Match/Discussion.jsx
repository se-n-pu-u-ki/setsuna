import React from 'react';
import {Timer} from './Timer'
import {TimerButton} from './TimerButton'
import './index.css'
import img1 from "../../../Images/Moeto1.jpg";
import img2 from "../../../Images/Moeto2.jpg";
import img3 from "../../../Images/Moeto3.jpg";
import img4 from "../../../Images/Moeto4.jpg";

import AlarmIcon from '@material-ui/icons/Alarm';
import Button from '@material-ui/core/Button';

class Discussion extends React.Component {
    render(){
        const user1 = {
            name: "もえやん"
        }
        const user2 = {
            name: "みっちー"
        }
        const user3 = {
            name: "きょん！"
        }
        const user4 = {
            name: "たくみん"
        }
        return (
            <div className="discussion">
                <div className="parent">
                    <div className="user1">
                        <img src={img1} alt="user1.image"/>
                        {/* <p>{user1}</p> */}
                        <p>{user1.name}</p>
                    </div>
                    <div className="user2">
                        <img src={img2} alt="user2.image" witdh="5px" height="5px"/>
                        {/* <p>{user2}</p> */}
                        <p>{user2.name}</p>
                    </div>

                    <div className='Timer'>
                        <AlarmIcon color="secondary"/>
                    <Timer minutes={'00'} seconds={'00'} ref='timer' />
                    <div className='timer-button-container'>
                        <Button variant="outlinedSecondary"><TimerButton text={'START'} handleClick={() => this.refs.timer.start()} /></Button>
                        <Button variant="outlinedSecondary"><TimerButton text={'STOP'} handleClick={() => this.refs.timer.stop()} /></Button>
                        {/* <TimerButton text={'RESET'} handleClick={() => this.refs.timer.reset()} /> */}
                    </div>
                </div>

                    <div className="user3">
                        <img src={img3} alt="user3.image"/>
                        {/* <p>{user3}</p> */}
                        <p>{user3.name}</p>
                    </div>
                    <div className="user4">
                        <img src={img4} alt="user4.image"/>
                        {/* <p>{user4}</p> */}
                        <p>{user4.name}</p>
                    </div>
                </div>

            </div>
        )
    }
}
export default Discussion;