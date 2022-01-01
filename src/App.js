import React,{useState} from 'react'
import Barchart from './Barchart'

import './barStyle.css';

const App=()=>{
  

  const[selects,setSelects]=useState(0);
 
   function handleChange(e)
   {
     //console.log('clicked');
     const tmp=e.target.value
 // console.log(tmp);
    setSelects(e.target.value);
   }
  // let i=1;
   //const option_map=[Array(6).fill( <option>{i}</option>)];
   if(selects==0)
   {
    return (    
      <div >  
       <select value={selects} onChange={(e)=>handleChange(e)}>
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
       </select> 
       </div>      
     );
    
   }
   else{
    return(<Barchart selected_val={selects}></Barchart>);
   }
}
/*<Dropdown className={`drop_downWidth`} options={options}  value={options[selects]} onChange={e=>handleChange(e)} placeholder="Select an option" /> */
export default App
