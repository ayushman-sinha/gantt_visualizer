import React,{useState,useEffect} from 'react'
import './barStyle.css';

const Barchart=(props)=>{    
  const sel = props.selected_val; 
  const [arrayGantt, setArrayGantt] = useState([]); 
  console.log(sel);
  useEffect(()=>{
    setArrayGantt([Array(sel).fill(<div className='gantt1'></div>)])
  }, [sel]);
  // console.log(arrayGantt);

  //
  
        return (<div>
            <div className='gantt_container'>
            <div className='gantt_main'>
            {arrayGantt.map((sel)=>sel)}
        </div>
            </div>
            </div>);
    }

export default Barchart;
