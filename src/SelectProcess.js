import React,{useState} from 'react'
import EntryTable from './EntryTable';
import SJFnp from './SJFnp';
import PriorityNP from './PriorityNP';
import './barStyle.css';
const SelectProcess = (props) => {
    const[selects,setSelects]=useState(0); 
    function handleChange(e)
    {    
     setSelects(e.target.value);
    }
    const typeSchedule=props.scheduleType;
    console.log(typeSchedule);
    const selVal=(<select value={selects} onChange={(e)=>handleChange(e)}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    <option>9</option>
    <option>10</option>
    </select>);
    if(typeSchedule=='1')//FCFS
  return ( <div className='Main_Container' > 
  {selVal}
  <EntryTable numOfEntries={selects}></EntryTable>
  </div> );
  else if(typeSchedule=='2')//SJF-P
  return ( <div className='Main_Container' > 
  {selVal}

  </div>);
   else if(typeSchedule=='3')//SJF-NP
   return ( <div className='Main_Container' > 
   {selVal}
   <SJFnp numOfEntries={selects}></SJFnp>
   </div>);
    else if(typeSchedule=='5')//Priority-NP
    return ( <div className='Main_Container' > 
    {selVal}
    <PriorityNP numOfEntries={selects}></PriorityNP>
    </div>);
  else
  return(<></>)

};

export default SelectProcess;
