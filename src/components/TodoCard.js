import React from 'react'

export default function TodoCard(props) {
  return (
    
    <>
    <div style={{padding:"20px", backgroundColor:"#ffffffbb" ,margin:'10px',width:'15vw', borderRadius:'20px'}}>

        <p style={{padding:'5px'}}>{props.name}</p>
        <p style={{padding:'5px'}}>{props.comment}</p>
        <p style={{padding:'5px'}}>{props.date.split("T")[0]}</p>
    </div>
    
    
    </>
  )
}
