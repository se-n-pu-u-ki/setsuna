import React from 'react';
import ReactApexChart from "react-apexcharts";


class ApexChart extends React.Component {
    constructor(props) {
      super(props);
      this.state1 = {
        series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 10,20,30,40]
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
          },
          title: {
            text: '2019/12/1のフィードバック結果'
          },
          xaxis: {
            categories: ['話の内容', '相手の非言語', '質問力', '姿勢', '促す', '声の調子','表情','ジェスチャー','言葉遣い']
          }
        },
      };

      this.state2 = {
        series: [{
          name: 'Series 1',
          data: [80, 80, 80, 80, 80, 100,80,80,80]
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
          },
          title: {
            text: '2020/12/15のフィードバック結果'
          },
          xaxis: {
            categories: ['話の内容', '相手の非言語', '質問力', '姿勢', '促す', '声の調子','表情','ジェスチャー','言葉遣い']
          }
        },
      };

    }

    render() {
      return (
        <div id="chart">
            <ReactApexChart options={this.state1.options} series={this.state1.series} type="radar" height={350} />
            <ReactApexChart options={this.state2.options} series={this.state2.series} type="radar" height={350} />
        </div>
      );
    }
}
export default ApexChart;