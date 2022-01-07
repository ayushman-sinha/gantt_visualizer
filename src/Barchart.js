import React,{useState,useEffect} from 'react'
import './barStyle.css';

const Barchart=(props)=>{    
  const sel = props.selected_val;  
  console.log(sel);
  var ans=[];
  function getColor(k)
  {
    var arColor=['#DACC3E','#7D1538','#ED254E','#153B50','#D77A61','#393D3F','#74C2FC','#011936'];
    return arColor[k-1];
  }
function getRandomColor(k) {
  console.log(k);
  var letters = '0123456789ABCDEF';  
  var color = '#';
  if(k%2==0)
  color+='F';
  else
  color+='2'
  for (var i = 0; i < 5; i++) {    
    var ind=Math.floor(Math.random() * 16);
 
    color += letters[ind];
  }
  return color;
}
  for (var i = 1; i <= sel; i++) {
    ans.push(<div className='gantt1' key={i} style={{background:getColor(i)}}> </div>);
}
  

        return (<div>
            <div className='gantt_container'>
            <div className='gantt_main'>
           {ans}
        </div>
            </div>
            </div>);
    }

export default Barchart;
