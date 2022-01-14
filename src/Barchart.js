import React,{useState,useEffect} from 'react'
import './barStyle.css';

const Barchart=(props)=>{    
  let sel = props.selected_val; 
 let arivalTime=props.arrivalArray; //Array containing the Arrival Times
 let burstTime=props.burstArray;//Array containing the Burst Times
 let arrivalCount=props.countA;
 let burstCount=props.countB;
console.log(burstCount);
/* console.log( arivalTime);
 console.log(burstTime);*/
 

  let ans=[];
  function getColor(k)
  {
    var arColor=['#498331','#7D1538','#ED254E','#153B50','#D77A61','#393D3F','#74C2FC','#011936'];
    return arColor[k-1];
  }
function getRandomColor(k) {
  //console.log(k);
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

function getWidth(index)
{
  let sum=parseInt(0);
  for(let i=0;i<8;i++)
  {
     if(burstTime[i]!==null)
     sum+=Number(burstTime[i]);
  }

  sum=(burstTime[index]/sum)*100;

  sum=Math.ceil(sum);
 // console.log(sum);
  return sum;
}
//if(burstCount==sel)
 for (let i = 1; i <= sel; i++)  
 {
   if(i===1)
   ans[i]=(<> <div className='time_container'>
     <div className='gantt_time'><div className='timeDisp'>0ms</div></div>
     </div>

          <div className='gantt1'
          key={i}
            style={{ background: getColor(i), 
            color: `white`, 
            width: getWidth(i - 1) + `%` }}>
              P{i - 1}
              </div> 

                <div className='time_container'>
                <div className='gantt_time'><div className='timeDisp'>{burstTime[i-1]}ms
                </div>
                </div>
                </div>      
              </>);
        else
            ans[i]=(<><div className='gantt1'
            key={i}
            style={{ background: getColor(i), 
            color: `white`, 
            width: getWidth(i - 1) + `%` }}>
             P{i - 1}
            </div>

            <div className='time_container'>
             <div className='gantt_time'>
              <div className='timeDisp'>{burstTime[i-1]}ms
              </div>
              
              </div>
              </div>
           </>);

}
 

        return (<div>
            <div className='gantt_container'>
            <div className='ganttLay'>
            <div className='gantt_main'>
             
           {ans}
           </div>
        </div>
            </div>
            
            </div>);
    }

export default Barchart;
