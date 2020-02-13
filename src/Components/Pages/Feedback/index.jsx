import React from 'react';
import ValueLabelComponent from "../../MaterialUiParts/ValueLabelComponent";
import img2 from '../../../Images/Moeto2.jpg'

class Feedback extends React.Component{
    render(){

        return(
            <div>
                <img src={img2} alt="顔写真"/>
                <ul>
                        話の内容 <br/>
                        <ValueLabelComponent />
                        使う言葉 <br/>
                        <ValueLabelComponent />
                        ジェスチャー <br/>
                        <ValueLabelComponent />
                        表情 <br/>
                        <ValueLabelComponent />
                        声の調子 <br/>
                        <ValueLabelComponent />
                        促す <br/>
                        <ValueLabelComponent />
                        姿勢 <br/>
                        <ValueLabelComponent />
                        質問 <br/>
                        <ValueLabelComponent />
                        相手の非言語 <br/>
                        <ValueLabelComponent />
                </ul>

            </div>
        )
    }
}

export default Feedback;