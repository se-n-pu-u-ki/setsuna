import React from 'react';
import './index.css';
import ApexChart from '../../MaterialUiParts/chart';

class Result extends React.Component{
    render(){

        return(
            <React.Fragment>
                
            　　<div class="horizontal_scroll_wrap">
                    <ul class="scroll_lst">
                        <li class="scroll_item">
                            <ApexChart />
                        </li>
                        <li class="scroll_item">
                            <ApexChart />
                        </li>
                        <li class="scroll_item">
                            <ApexChart />
                        </li>
                        <li class="scroll_item">
                            <ApexChart />
                        </li>
                        <li class="scroll_item">
                            <ApexChart />
                        </li>
                    </ul>
                    </div>
            </React.Fragment>

        )
    }
}

export default Result;

