import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornments from '../../MaterialUiParts/InputAdornments'
import './index.css'

class InitialSetting extends React.Component {
    render(){
        return(
            <div className='InitialSetting'>

                <p>ニックネーム</p>
                <TextField id="filled-basic" label="Filled" variant="filled" />

                <p>年齢</p>
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <p>性別</p>

                <select name="sex">
                    <option value="male">男性</option>
                    <option value="female">女性</option>
                </select>

                <p>メールアドレス</p>
                <TextField id="filled-basic" label="Filled" variant="filled" />

                <p>パスワード</p>
                <InputAdornments /><br />
                
                <a href="#">登録</a>
            </div>
        )
    }
}
export default InitialSetting;