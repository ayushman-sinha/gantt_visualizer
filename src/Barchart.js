import React,{useState,useEffect} from 'react'
import './barStyle.css';

const Barchart=(props)=>{    
  let sel = props.selected_val; 
 let arrivalTime=props.arrivalArray; //Array containing the Arrival Times
 let burstTime=props.burstArray;//Array containing the Burst Times
 let arrivalCount=props.countA;
 let burstCount=props.countB;
//console.log(burstCount);
/* console.log( arivalTime);
 console.log(burstTime);*/

let ar1=arrivalTime;

  let ans=[];
  function getColor(k)
  {
    var arColor=['#498331','#7D1538','#ED254E','#153B50','#D77A61','#393D3F','#34C2FC','#011936'];
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
function calcualteBurst(index)
{
  let sum=parseInt(0);
  for(let i=0;i<=index;i++)
  {
     if(burstTime[i]!==null)
     sum+=Number(burstTime[i]);
  }
  return sum;
}
//if(burstCount==sel)
 for (let i = 1; i <= sel; i++)  
 {
   if(i===1)
   ans[i]=(<> <div className='time_container'   >
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
                <div className='gantt_time'><div className='timeDisp'>{calcualteBurst(i-1)}ms
                </div>
                </div>
                </div>      
              </>);
        else
            ans[i]=(<><div className='gantt1'
            key={arrivalTime[i]}
            style={{ background: getColor(i), 
            color: `white`, 
            width: getWidth(i - 1) + `%` }}>
             P{i - 1}
            </div>

            <div className='time_container'>
             <div className='gantt_time'>
              <div className='timeDisp'>{calcualteBurst(i-1)}ms
              </div>
              
              </div>
              </div>
           </>);

}
function sortArrival(e)
{
  console.log(ar1);
 let tmp=[];
 var c=0;
 for(let i=0;i<8;i++)
 {
    if(ar1[i]!=="")
    {
    tmp.push(ar1[i]);   
    }
    else
    c++;
 }
 if(c===0)
 return;
 
    ar1=tmp;
    //ar1.sort((a,b)=>a-b);
  console.log(ar1);
}
/*
for (let i =0; i < sel-1; i++)  
{
 for(let j=0;j<sel-i-1;j++)
 {
   if(arrivalTime[j]>arrivalTime[j+1])
   {
     let tmp=arrivalTime[j];
     arrivalTime[j]=arrivalTime[j+1];
     arrivalTime[j+1]=tmp;
     let tmp1=ans[j];
     ans[j]=ans[j+1];
     ans[j+1]=tmp1;
   }
 }
}*/



        return (<div>
            <button onClick={(e)=>sortArrival(e)}>Click Me</button>
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
