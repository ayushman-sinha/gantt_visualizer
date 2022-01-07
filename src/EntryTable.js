import React,{useState} from 'react';
import './tableEdit.css';
const EntryTable = (props) => {
    const entry=props.numOfEntries;
    const[inputTab,SetinputTab]=useState('');
    function inputChange(e){
        SetinputTab(e.target.value);
        console.log(e.target.value);
    }
   // console.log(entry);
    var ArrayEntry=[];
    for(var i=1;i<=entry;i++)
    ArrayEntry.push( <tr>                       
        <td className='row_editContent'>P{i}</td>
        <td className='row_editContent'><input className='input_edit' placeholder='0'></input>ms</td>
        <td className='row_editContent'><input className='input_edit' placeholder='0'></input>ms</td>
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
