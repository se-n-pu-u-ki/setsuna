import React from 'react';

class InitialSetting extends React.Component {
    render(){
        return(
            <div className='InitialSetting'>

                <p>ニックネーム</p>
                <textarea name="name" id="" cols="10" rows="1"></textarea>

                <p>年齢</p>
                <textarea name="" id="" cols="10" rows="1"></textarea>
                <p>性別</p>

                <select name="sex">
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                </select>

                <p>メールアドレス</p>
                <textarea name="mailaddress" id="" cols="30" rows="1"></textarea>

                <p>パスワード</p>
                <textarea name="password" id="" cols="30" rows="1"></textarea>
                
                <a href="#">登録</a>
            </div>
        )
    }
}
export default InitialSetting;