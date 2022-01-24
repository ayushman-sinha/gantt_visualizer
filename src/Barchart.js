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

let ar1=[...arrivalTime];
let ar2=[...burstTime];

for(let i=0;i<8;i++)//Bubble sorting values of burstTime according to their arrival TImes for FCFS
{
  for(let j=0;j<8-i-1;j++)
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
console.log(ar1,sel)
//console.log(ar1);
ar1.splice(0,8-sel);
ar2.splice(0,8-sel);

  let ans=[];
  function getColor(k)
  {
    var arColor=['#498331','#7D1538','#ED254E','#153B50','#D77A61','#393D3F','#34C2FC','#011936'];
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
     if(ar2[i]!==null)
     sum+=Number(ar2[i]);
     if(ar1[0]=='')
     sum+=Number(burstTime[i]);
  }
  return sum;
}
function calculateProcessTime(index)
{
  if(ar1[0]=='')
  return index;
  for(let i=0;i<ar2.length;i++)
  {     
       if(ar2[index]===burstTime[i])
       return i;
  }
  return 0;
}

//if(burstCount==sel)
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

//ar1.sort((a,b) => a-b);

//console.log(ar1);
//console.log(arrivalTime);
/*
let sortStore=[-1,-1,-1,-1,-1,-1,-1,-1];
for(let i=0;i<sel;i++)
{
 // console.log(sortStore);
  if(ar1[0]==='')
  break;
   for(let j=0;j<sel;j++)
   {
     if(sortStore[j]===-1&&ar1[i]===arrivalTime[j])
     {      
       sortStore[i]=j;
       let tmp=ans[i];
       ans[i]=ans[j];
       ans[j]=tmp;
       
       break;
     }
   }
}

if(ar1[0]!=='')
{
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
               P{i}
               </div> 
 
                 <div className='time_container'>
                 <div className='gantt_time'><div className='timeDisp'>{ar2(i)}ms
                 </div>
                 </div>
                 </div>      
               </>);
         else
             ans[i]=(<><div className='gantt1'
             key={arrivalTime[i]}
             style={{ background: getColor(i), 
             color: `white`, 
             width: getWidth(i) + `%` }}>
              P{i}
             </div>
 
             <div className='time_container'>
              <div className='gantt_time'>
               <div className='timeDisp'>{calcualteBurst(i)}ms
               </div>              
               </div>
               </div>
            </>);
 
 }

}

*/









const sortArrival=(e)=>
{

 let tmp=[];
 var c=0;
 for(let i=0;i<8;i++)
 {
    if(ar1[i]!==null&&ar1[i]!==undefined)
    {
    tmp.push(ar1[i]);   
    }
    else
    c++;
 }
  ar1=tmp;
    //ar1.sort((a,b)=>a-b);
  console.log(ar1);
}


/*console.log(ar1);
console.log(ar2);*/
//console.log(ans);
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
