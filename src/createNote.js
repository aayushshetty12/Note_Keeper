import React from 'react';
import AddIcon from '@mui/icons-material/Add';

export default function CreateNote(props){

  return (
    <form>
      {props.show && <input placeholder='Title' id='title' value={props.change.title} onChange={props.input}/>}
      <textarea placeholder={!props.show?'Add a note...':'Description'} rows={props.show?'3':'1'} id='content' value={props.change.content} onChange={props.input} onClick={props.set}/>
      {props.show && <button onClick={props.submit}><AddIcon/></button> }
    </form>
  )
}
