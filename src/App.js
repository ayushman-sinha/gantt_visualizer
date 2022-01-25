import React,{useState} from 'react'
import EntryTable from './EntryTable';
import './barStyle.css';
const App=()=>{
  const[selects,setSelects]=useState(0); 
   function handleChange(e)
   {
     //console.log('clicked');
    // const tmp=e.target.value
 // console.log(tmp);
    setSelects(e.target.value);
   }
  // let i=1;
   //const option_map=[Array(6).fill( <option>{i}</option>)];
  
    return (    
      <div className='Main_Container' >  
       <select value={selects} onChange={(e)=>handleChange(e)}>
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
       </select> 
       <EntryTable numOfEntries={selects}></EntryTable>
     
       </div> 
            
     );
   }
/*<Dropdown className={`drop_downWidth`} options={options}  value={options[selects]} onChange={e=>handleChange(e)} placeholder="Select an option" /> */
export default App
