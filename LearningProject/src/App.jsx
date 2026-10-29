import Table from './components/Table'
import Header from './components/Header'
import Inputs from './components/Inputs'
import {useState} from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
function App() {
const [notes, setNotes] = useState([]);
const count = useRef(0);

useEffect(() => {
  count.current += 1;
  console.log('Render count from effect:', count.current);
});
  function handleAddNote(note) {
    const addNote = note.trim();
    if (addNote !== '') {
      setNotes(prevNotes => [...prevNotes, addNote]);
    }
  }

  function handleDeleteNote(index) {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
  }

  

  return (
    <>
    <h1>Render Count: {count.current}</h1>
    {console.log('Render count:', count.current)}
      <Header />
      <input type="text" placeholder="Add Notes" onChange={() => (count.current += 1)}/>
      <Inputs onAddNote={handleAddNote} />
      <Table notes={notes} deleteNote={handleDeleteNote} />
    </>
  )
}

export default App
