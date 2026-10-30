import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useRef } from 'react';
 

export default function AddProject({ ref, onClose, updateList }) {
//   const [inputValues, setInputValues] = useState({
//     title: '',
//     description: '',
//     date: ''
//   });

  const inputValues = useRef({
    title :'',
    description: '',
    date:''
  });

  // Generic handler for all inputs
  function handleChange(e) {
    const { name, value } = e.target;
    inputValues.current = {
      ...inputValues.current,
      [name]: value
    };
  }

  function handleCreateProject() {
    console.log('Creating project with values:', inputValues);
    updateList(inputValues);
    ref.current.close();
    // Add submission logic or pass inputValues back to parent
  }

  return createPortal(

    <dialog ref={ref} className="add-project-dialog" onClose={onClose}>
            {console.log("Dialoging")}
      <section className="create-project">
        <h2>Create New Project</h2>

        <div>
          <label htmlFor="projectTitle">Title: </label>
          <input
            type="text"
            id="projectTitle"
            name="title"
            placeholder="Project Title"
            value={inputValues.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="projectDescription">Description: </label>
          <textarea
            id="projectDescription"
            name="description"
            placeholder="Project Description"
            value={inputValues.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="projectDate">Date: </label>
          <input
            type="date"
            id="projectDate"
            name="date"
            value={inputValues.date}
            onChange={handleChange}
            required
          />
        </div>

        <button onClick={handleCreateProject}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </section>
    </dialog>,
    document.getElementById('modal-root')
  );
}