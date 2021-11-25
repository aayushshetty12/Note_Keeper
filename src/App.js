import NoteAddIcon from '@mui/icons-material/NoteAdd';
import './App.css';
import CreateNote from './createNote.js'
import Note from './Note.js';
import {useState} from 'react';

function App() {

  const [change,setChange]=useState({
    title:'',
    content:'',
    date:''
  });
  const [notes,setNotes]=useState([])
  const [show,setShow]=useState(false);

  const input=e=>{
    let name=e.target.id;
    console.log(typeof(name));
    setChange({...change,[name]:e.target.value});
    console.log(change);
  }

  const submit=(e)=>{
    let d= new Date();
    d = d.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
    change.date=d;
    setNotes([...notes,change])
    //console.log(notes)
    e.preventDefault();
    setChange({
      title:'',
      content:'',
      date:''
    });
    setShow(false);
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
        <CreateNote
          show={show}
          change={change}
          input={input}
          submit={submit}
          set={()=>setShow(true)}
        />
      </div>
      <div className='main'>
        {notes.slice(0).reverse().map((note,x)=>
          <Note
          title={note.title}
          content={note.content}
          index={x}
          deleteNote={deleteNote}
          date={note.date}
          />
        )}
      </div>
    </div>
  );
}

export default App;
