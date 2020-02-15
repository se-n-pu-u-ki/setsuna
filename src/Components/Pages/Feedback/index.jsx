import React from 'react';
import ValueLabelComponent from "../../MaterialUiParts/ValueLabelComponent";
import img2 from '../../../Images/Moeto2.jpg'
import './index.css'

class Feedback extends React.Component{
    render(){

        return(
            <div>
                <img src={img2} alt="顔写真"/>
                <ul className="feedbackList">
                        <p>話の内容</p>
                        <ValueLabelComponent className = "slider" />
                        <p>使う言葉 </p>
                        <ValueLabelComponent className = "slider" />
                        <p>ジェスチャー</p>
                        <ValueLabelComponent className = "slider" />
                        <p>表情</p>
                        <ValueLabelComponent className = "slider" />
                        <p>声の調子</p>
                        <ValueLabelComponent className = "slider" />
                        <p>促す</p>
                        <ValueLabelComponent className = "slider" />
                        <p>姿勢</p>
                        <ValueLabelComponent className = "slider" />
                        <p>質問</p>
                        <ValueLabelComponent className = "slider" />
                        <p>相手の非言語</p>                        
                        <ValueLabelComponent className = "slider" />
                </ul>

            </div>
        )
    }
}

export default Feedback;