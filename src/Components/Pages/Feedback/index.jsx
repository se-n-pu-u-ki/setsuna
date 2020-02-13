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
                        <ValueLabelComponent />
                        <p>使う言葉 </p>
                        <ValueLabelComponent />
                        <p>ジェスチャー</p>
                        <ValueLabelComponent />
                        <p>表情</p>
                        <ValueLabelComponent />
                        <p>声の調子</p>
                        <ValueLabelComponent />
                        <p>促す</p>
                        <ValueLabelComponent />
                        <p>姿勢</p>
                        <ValueLabelComponent />
                        <p>質問</p>
                        <ValueLabelComponent />
                        <p>相手の非言語</p>                        
                        <ValueLabelComponent />
                </ul>

            </div>
        )
    }
}

export default Feedback;