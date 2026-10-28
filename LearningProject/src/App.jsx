import Table from './components/Table'
import Header from './components/Header'
import Inputs from './components/Inputs'
import {useState} from 'react'
function App() {
const [notes, setNotes] = useState([]);
  function handleAddNote(note) {
    console.log('Note added from App:', note);
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
      <Header />
      <Inputs onAddNote={handleAddNote} />
      <Table notes={notes} deleteNote={handleDeleteNote} />
    </>
  )
}

export default App
