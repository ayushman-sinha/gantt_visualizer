import React from 'react';
import './tableEdit.css';
const EntryTable = (props) => {
    const entry=props.numOfEntries;
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
                    <td className='row_editContent'>0ms</td>
                    <td className='row_editContent'>3 ms</td>
                    </tr>
                    <tr>
                    <td className='row_editContent'>P2</td>
                    <td className='row_editContent'>0 ms</td>
                    <td className='row_editContent'>5 ms</td>
                    </tr>
                    <tr>
                    <td className='row_editContent'>P3</td>
                    <td className='row_editContent'>0 ms</td>
                    <td className='row_editContent'>8 ms</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default EntryTable
