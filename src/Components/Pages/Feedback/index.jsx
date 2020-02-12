import React from 'react';

class Feedback extends React.Component{
    render(){

        return(
            <div>
                <img src="" alt="顔写真"/>
                <ul>
                    <li>
                        話の内容 <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('talk_content').value=this.value"/>
                        <output id="talk_content">1</output>
                    </li>
                    <li>
                        使う言葉 <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('language').value=this.value"/>
                        <output id="language">1</output>
                    </li>
                    <li>
                        ジェスチャー <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('gesture').value=this.value"/>
                        <output id="gesture">1</output>
                    </li>
                    <li>
                        表情 <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('expression').value=this.value"/>
                        <output id="expression">1</output>
                    </li>
                    <li>
                        声の調子 <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('voice').value=this.value"/>
                        <output id="voice">1</output>
                    </li>
                    <li>
                        促す <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('response').value=this.value"/>
                        <output id="response">1</output>
                    </li>
                    <li>
                        姿勢 <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('pose').value=this.value"/>
                        <output id="pose">1</output>
                    </li>
                    <li>
                        質問 <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('question').value=this.value"/>
                        <output id="question">1</output>
                    </li>
                    <li> 
                        相手の非言語 <br/>
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('understand').value=this.value"/>
                        <output id="understand">1</output>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Feedback;