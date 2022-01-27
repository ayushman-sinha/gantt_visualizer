import React,{useState} from 'react'
import './barStyle.css';
import SelectProcess from './SelectProcess';
const App=()=>{
  const[schedule,setSchedule]=useState(0);
  function scheduleSelect(e){
    setSchedule(e.target.value);
  }
 return (    
      <div >
          <div className='containerBig'>
          <select value={schedule} onChange={(e)=>scheduleSelect(e)}>
             <option value='1'>First Come First Served</option>
             <option value='2'>Shortest Job First [Preemptive]</option>
             <option value='3'>Shortest Job First [Non-Preemptive]</option>
             <option value='4'>Priority Scheduling [Preemptive]</option>
             <option value='5'>Priority Scheduling [Non-Preemptive]</option>
             <option value='6'>Round Robin Scheduling</option>  
          </select> 
          </div>

        <div className='containerBig'>
        <button type='submit'>Submit</button>
        </div>
        <SelectProcess scheduleType={schedule}></SelectProcess>
      </div>
     );
   }

export default App
