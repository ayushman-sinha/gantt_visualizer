import React,{useState} from 'react';
import './tableEdit.css';
const EntryTable = (props) => {
    const entry=props.numOfEntries;
    const[inputTab,SetinputTab]=useState('');
    function inputChange(e){
        SetinputTab(e.target.value);
        console.log(e.target.value);
    }
    console.log(entry);
    const ArrayEntry=[];
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
                    <tr>
                    <td className='row_editContent'>P1</td>
                    <td className='row_editContent'><input className='input_edit' placeholder='0' value={inputTab} onChange={(e)=>inputChange(e)}></input>ms</td>
                    <td className='row_editContent'><input className='input_edit' placeholder='0'></input>ms</td>
                    </tr>
                    <tr>
                    <td className='row_editContent'>P2</td>
                    <td className='row_editContent'><input className='input_edit' placeholder='0'></input>ms</td>
                    <td className='row_editContent'><input className='input_edit' placeholder='0'></input>ms</td>
                    </tr>
                    <tr>
                    <td className='row_editContent'>P3</td>
                    <td className='row_editContent'><input className='input_edit' placeholder='0'></input>ms</td>
                    <td className='row_editContent'><input className='input_edit' placeholder='0'></input>ms</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EntryTable
