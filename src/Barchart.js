import React,{useState,useEffect} from 'react'
import './barStyle.css';

const Barchart=(props)=>{    
  const sel = props.selected_val;   
  const [arrayGantt, setArrayGantt] = useState([]); 
  console.log(sel);
  const barMap=4;
  var ans=[];
  for (var i = 0; i <= sel; i++) {
    ans.push(<div className='gantt1' key={i}></div>);
}
  
  useEffect(()=>{
    setArrayGantt([Array(sel).fill(barMap)])
  },[]);
        
        return (<div>
            <div className='gantt_container'>
            <div className='gantt_main'>
           {ans}
        </div>
            </div>
            </div>);
    }

export default Barchart;
