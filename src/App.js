import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AddIcon from '@mui/icons-material/Add';
import './App.css';
import Note from './Note.js';
import {useState} from 'react';
function App() {

  const [change,setChange]=useState({
    title:'',
    content:''
  });

  const [notes,setNotes]=useState([])
  const [show,setShow]=useState(false);

  const input=e=>{
    let name=e.target.id;
    setChange({...change,[name]:e.target.value});
    //console.log(change);
  }

  const submit=(e)=>{
    setNotes([...notes,change])
    console.log(notes)
    e.preventDefault();
    setChange({
      title:'',
      content:''
    });

  }

  const deleteNote=(x)=>{
      setNotes(notes.filter((note,index)=>index!==x))
  }

  return (
    <div className="App">
      <header>
        <h1><NoteAddIcon/>Note Keeper</h1>
      </header>
      <div className='input'>
        <form>
          {show && <input placeholder='Title' id='title' value={change.title} onChange={input}/>}
          <textarea placeholder={!show?'Add a note...':'Description'} rows={show?'3':'1'} id='content' value={change.content} onChange={input} onClick={()=>setShow(true)}/>
          {show && <button onClick={submit}><AddIcon/></button> }
        </form>
      </div>

      {notes.map((note,x)=><Note
      title={note.title}
      content={note.content}
      index={x}
      deleteNote={deleteNote}/>)
    }

    </div>
  );
}

export default App;
