import React,{useState,useEffect} from 'react'
import './barStyle.css';

const Barchart=(props)=>{    

       const sel=props.selected_val;
     const a=5;
       console.log(sel);
      const arrayGantt=[Array(a).fill(<div className='gantt1'></div>)];
      
       
      
        return (<div>
            <div className='gantt_container'>
            <div className='gantt_main'>
            {arrayGantt.map((num)=>num)}
        </div>
            </div>
            </div>);
    }

export default Barchart;
