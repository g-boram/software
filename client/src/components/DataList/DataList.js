import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  BarChart, Bar, RadialBarChart, RadialBar, RadarChart, 
  PolarGrid, PolarAngleAxis, Radar, PolarRadiusAxis, ScatterChart, ZAxis, Scatter
} from 'recharts';



const data = [
  { 분야: '일식', 여성: 32760, 남성: 34000 },
  { 분야: '중식', 여성: 30480, 남성: 56000 },
  { 분야: '양식', 여성: 27250, 남성: 23000 },
  { 분야: '한식', 여성: 49870, 남성: 67000 },
  { 분야: '태국식', 여성: 3420, 남성: 3500 },
  { 분야: '인도식', 여성: 2420, 남성: 1500 },
  { 분야: '베트남식', 여성: 1420, 남성: 5000 },
  { 분야: '기타', 여성: 9420, 남성: 8000 },
];

const data1 = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

const data2 = [
  {
    "name": "18-24",
    "uv": 31.47,
    "pv": 2400,
    "fill": "#8884d8"
  },
  {
    "name": "25-29",
    "uv": 26.69,
    "pv": 4567,
    "fill": "#83a6ed"
  },
  {
    "name": "30-34",
    "uv": -15.69,
    "pv": 1398,
    "fill": "#8dd1e1"
  },
  {
    "name": "35-39",
    "uv": 8.22,
    "pv": 9800,
    "fill": "#82ca9d"
  },
  {
    "name": "40-49",
    "uv": -8.63,
    "pv": 3908,
    "fill": "#a4de6c"
  },
  {
    "name": "50+",
    "uv": -2.63,
    "pv": 4800,
    "fill": "#d0ed57"
  },
  {
    "name": "unknow",
    "uv": 6.67,
    "pv": 4800,
    "fill": "#ffc658"
  }
]

const data3 = [
  {
    "subject": "Math",
    "A": 120,
    "B": 110,
    "C": 100,
    "fullMark": 150
  },
  {
    "subject": "Chinese",
    "A": 98,
    "B": 130,
    "C": 140,
    "fullMark": 150
  },
  {
    "subject": "English",
    "A": 86,
    "B": 130,
    "C": 140,
    "fullMark": 150
  },
  {
    "subject": "Geography",
    "A": 99,
    "B": 100,
    "C": 110,
    "fullMark": 150
  },
  {
    "subject": "Physics",
    "A": 85,
    "B": 90,
    "C": 90,
    "fullMark": 150
  },
  {
    "subject": "History",
    "A": 65,
    "B": 85,
    "C": 100,
    "fullMark": 150
  }
]
const data01 = [
  {
    "x": 100,
    "y": 200,
    "z": 200
  },
  {
    "x": 120,
    "y": 100,
    "z": 260
  },
  {
    "x": 170,
    "y": 300,
    "z": 400
  },
  {
    "x": 140,
    "y": 250,
    "z": 280
  },
  {
    "x": 150,
    "y": 400,
    "z": 500
  },
  {
    "x": 110,
    "y": 280,
    "z": 200
  }
];
const data02 = [
  {
    "x": 200,
    "y": 260,
    "z": 240
  },
  {
    "x": 240,
    "y": 290,
    "z": 220
  },
  {
    "x": 190,
    "y": 290,
    "z": 250
  },
  {
    "x": 198,
    "y": 250,
    "z": 210
  },
  {
    "x": 180,
    "y": 280,
    "z": 260
  },
  {
    "x": 210,
    "y": 220,
    "z": 230
  }
];

export default class DataList extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <>
      <div className="ct1 af">
        {/* <div style={{display:"flex", width:"100%", marginBottom:20}}>
          <div style={{width:600, backgroundColor:"pink", marginLeft:50}}></div>
          <div><img src={require("../img/main/main-bg.png")} alt="" height={300}/></div>
          <div style={{width:600, backgroundColor:"pink", marginLeft:50}}></div>
        </div> */}
        <div style={{margin:30,padding:10, width:"100%",height:700,display:"flex"}}>
        
        <RadarChart outerRadius={220} width={530} height={600} data={data3}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.1} />
          <Radar name="Boram" dataKey="C" stroke="#828282" fill="#828282" fillOpacity={0.1} />
          <Legend iconType="line"/>
        </RadarChart>
      
       
        <ScatterChart width={880} height={450}
          margin={{ top: 150, right: 20, bottom: 0, left: 120 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" name="stature" unit="cm" />
          <YAxis dataKey="y" name="weight" unit="kg" />
          <ZAxis dataKey="z" range={[64, 144]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data01} fill="#8884d8" />
          <Scatter name="B school" data={data02} fill="#82ca9d" />
        </ScatterChart>
      
        </div>
        <div style={{width:"100%", display:"flex"}}>
        <RadialBarChart 
          width={700} 
          height={300} 
          position={"center"}
          outerRadius="80%" 
          data={data2} 
          startAngle={180} 
          endAngle={0}
        >
          <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
          <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='center' align="right" />
          <Tooltip />
        </RadialBarChart>
        <BarChart width={730} height={250} data={data1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        </div>
        <div>
        <LineChart width={1500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="분야" /><YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="여성" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="남성" stroke="#82ca9d" />
        </LineChart>
        </div>
      </div>
      </>
    );
  }
}
