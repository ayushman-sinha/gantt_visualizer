import React,{useState,useEffect} from 'react'
import './barStyle.css';

const Barchart=(props)=>{    
  let sel = props.selected_val; 
 let arrivalTime=props.arrivalArray; //Array containing the Arrival Times
 let burstTime=props.burstArray;//Array containing the Burst Times

let ar1=[...arrivalTime];//Array containing the Arrival Times[DUPLICATE]
let ar2=[...burstTime];//Array containing the Burst Times [DUPLICATE]

ar1.splice(sel);
ar2.splice(sel);//Removing the empty elements
ar1=ar1.map((x)=>+x);
ar2=ar2.map((x)=>+x);
for(let i=0;i<ar1.length;i++)//Bubble sorting values of burstTime according to their arrival TImes for FCFS
{
  for(let j=0;j<ar1.length-i-1;j++)
  {
    if(ar1[j]>ar1[j+1])
    {
      let tmp1=ar1[j];
      ar1[j]=ar1[j+1];
      ar1[j+1]=tmp1;

      tmp1=ar2[j];
      ar2[j]=ar2[j+1];
      ar2[j+1]=tmp1;
    }
  }
}
console.log(ar1);
  let ans=[];
  function getColor(k)
  {
    var arColor=['#498331','#7D1538','#ED254E','#153B50','#D77A61','#393D3F','#34C2FC','#014936','#0112FC','#011538'];
    return arColor[k];
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
  for(let i=0;i<ar2.length;i++)
  {
     if(ar2[i]!='')
     sum+=Number(ar2[i]);
     if(ar1[i]==''&&ar2[i]=='')
     sum+=Number(burstTime[i]);
  }
  if(ar1[0]==='')
  sum=(burstTime[index]/sum)*100;
   if(ar1[0]!==''&&ar2[0]!=='')
  sum=(ar2[index]/sum)*100;

  sum=Math.ceil(sum);
 // console.log(sum);
  return sum;
}
function calcualteBurst(index)
{
  let sum=parseInt(0);
  for(let i=0;i<=index;i++)
  {
     if(ar2[i]!=='')
     sum+=Number(ar2[i]);
     if(ar1[0]==='')
     sum+=Number(burstTime[i]);
  }
  if(ar1[0]=='')
  return sum/2;
  return sum;
}
function calculateProcessTime(index)
{
  if(ar1[0]=='')
  return index;
  for(let i=0;i<ar2.length;i++)
  {     
       if(ar2[index]==burstTime[i])
       return i;
  }
  return 0;
}


 for (let i =0; i < sel; i++)  
 {  
   if(i===0)
   ans[i]=(<> <div className='time_container'   >
     <div className='gantt_time'><div className='timeDisp'>0ms</div></div>
     </div>

          <div className='gantt1'
          key={i}
            style={{ background: getColor(i), 
            color: `white`, 
            width: getWidth(i) + `%` }}>
              P{calculateProcessTime(i)}
              </div> 

                <div className='time_container'>
                <div className='gantt_time'><div className='timeDisp'>{calcualteBurst(i)}ms
                </div>
                </div>
                </div>      
              </>);
        else
            ans[i]=(<><div className='gantt1'
            key={i}
            style={{ background: getColor(i), 
            color: `white`, 
            width: getWidth(i) + `%` }}>
             P{calculateProcessTime(i)}
            </div>

            <div className='time_container'>
             <div className='gantt_time'>
              <div className='timeDisp'>{calcualteBurst(i)}ms
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
