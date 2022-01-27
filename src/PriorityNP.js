import React,{useState} from 'react';
import './tableEdit.css';
import Barchart from './Barchart';

const PriorityNP = ({numOfEntries}) => {
    let entry=numOfEntries;
    const [inputArrival, setInputArrival] = useState(Array(10).fill(""));
    const [inputBurst, setInputBurst] = useState(Array(10).fill(""));      
    function changeArrival(index) {     
      return (e) => {          
        setInputArrival((values) =>
          values.map((value, i) => (i === index ? e.target.value : value)));
       };
    }
    function changeBurst(index) {
      return (e) => {         
        setInputBurst((values) =>
          values.map((value, i) => (i === index ? e.target.value : value))         
        );        
      };
      
    }
   
    const ArrayEntry = Array.from({ length: entry}).map((_, i) => (
      <tr key={i}>
          <td className="row_editContent">P{i}</td>
          <td className="row_editContent">
            <input
              className="input_edit"
              placeholder="0"
              type="number"
              value={inputArrival[i]}
              onChange={changeArrival(i)}
              min={0}
              max={50}
            />
            
          </td>
          <td className="row_editContent">
            <input
              className="input_edit"
              placeholder="0"
              type="number"
              value={inputBurst[i]}
              onChange={changeBurst(i)}
              min={0}
              max={50}
            />
            ms
          </td>
        </tr>
    ));

    return (
      <div  className='Main_Container'>
        <table className="MainTableContainer">
          <thead>
            <tr>
              <th className="row_editHeading">Process</th>
              <th className="row_editHeading">Priority</th>
              <th className="row_editHeading">Burst Time</th>
            </tr>
          </thead>
          <tbody>{ArrayEntry}</tbody>
        </table>
      
        <Barchart selected_val={entry} arrivalArray={inputArrival} burstArray={inputBurst} ></Barchart>
      </div>
    );
};

export default PriorityNP;
