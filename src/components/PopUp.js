import React, { useState } from 'react'
import './popup.css'
import axios from 'axios';
import { border } from '@mui/system';
export default function PopUp(props) {
    const [taskName, setTaskName] = useState('');
    const [comment, setComment] = useState('');
    const [dateFields, setDataFields] = useState('');

    function saveUser() {
        console.warn({ taskName, comment, dateFields });
        let data = (taskName, comment, dateFields)
       axios.post("https://todo-rest-api-production.up.railway.app/addtodoCards",{
        name: taskName,
        comment: comment,
        date: dateFields
       })
       .then((response)=>{
        alert('Data Successfully added in Database , Please reload the page!');
       })
       .catch((error)=>{
        console.log(error)
       });
    }


    return (props.trigger) ? (



        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>

                <h1>Enter Task Todo </h1>
                <input style={{margin:'10px', width:'60%'}} type="text" value={taskName} onChange={(e) => (setTaskName(e.target.value))} name="taskName" /> <br />
                <input style={{margin:'10px', width:'60%'}} type="text" value={comment} onChange={(e) => (setComment(e.target.value))} name="comment" /> <br />
                <input style={{margin:'10px'}} type="date" value={dateFields} onChange={(e) => (setDataFields(e.target.value))} name="dateFields" /> <br />
                <button style={{padding:'8px 20px' ,margin:'10px', borderRadius:'10px', border:'1px solid'}}type="button" onClick={saveUser} >Save</button>
            </div>
        </div>


    ) : "";
}
