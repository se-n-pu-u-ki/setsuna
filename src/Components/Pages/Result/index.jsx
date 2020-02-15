import React from 'react';
import './index.css';
import ApexChart from '../../MaterialUiParts/chart';

class Result extends React.Component{
    render(){

        return(
            <React.Fragment>
                
            　　<div className="horizontal_scroll_wrap">
                    <ul className="scroll_lst">
                        <li className="scroll_item">
                            <ApexChart />
                        </li>
                        <li className="scroll_item">
                            <ApexChart />
                        </li>
                        <li className="scroll_item">
                            <ApexChart />
                        </li>
                        <li className="scroll_item">
                            <ApexChart />
                        </li>
                        <li className="scroll_item">
                            <ApexChart />
                        </li>
                    </ul>
                    </div>
            </React.Fragment>

        )
    }
}

export default Result;

