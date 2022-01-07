import React,{useState} from 'react';
import './tableEdit.css';
const EntryTable = (props) => {
    const entry=props.numOfEntries;
    const[inputArrival,SetinputArrival]=useState('');
    const[inputBurst,SetinputBurst]=useState('');
 
    function changeArrival(e)
    {
        console.log(e.target.value+"A");
        SetinputArrival(e.target.value);
    }
    function changeBurst(e)
    {
        console.log(e.target.value+"B");
        SetinputBurst(e.target.value);
    }
   
   // console.log(entry);
    var ArrayEntry=[];
    for(var i=1;i<=entry;i++)
    ArrayEntry.push( <tr>                       
        <td className='row_editContent'>P{i}</td>
        <td className='row_editContent'><input className='input_edit' placeholder='0' onChange={(e)=>changeArrival(e)}></input>ms</td>
        <td className='row_editContent'><input className='input_edit' placeholder='0' onChange={(e)=>changeBurst(e)}></input>ms</td>
        </tr>);

        return (
        <div>
            <table className='MainTableContainer' >
                <thead>
                    <tr >
                        <th className='row_editHeading'>Process</th>
                        <th className='row_editHeading'>Arrival Time</th>
                        <th className='row_editHeading'>Burst Time</th>
                    </tr>
                </thead>
                <tbody> 
                    {ArrayEntry}
                </tbody>
            </table>
        </div>
    )
}

export default EntryTable
