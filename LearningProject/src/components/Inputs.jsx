import {useState} from 'react'
export default function Inputs({onAddNote}) {
    const [note, setNote] = useState('');

    function handleInputChange(event) {
        setNote(event.target.value);
        
    }

  return (
    <section id="user-input">
      <input type="text" placeholder="Add Notes" value={note} onChange={handleInputChange} />
      <button onClick={() => 
        {
        onAddNote(note)
        setNote('')}}>Add Note</button>
    </section>
  );
}
