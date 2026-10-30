import { useState } from "react";
import { useRef } from "react";

export default function ProjectDetails({projectInfo, updateArray}) {

    const inputValues = useRef({
    title : projectInfo.title,
    description: projectInfo.description,
    date:projectInfo.date,
    tasks : projectInfo.tasks || []
  });

  const inputTask = useRef();
  const [tasks, setTasks] = useState([]);

  function AddTasks(){
const enteredTask = inputTask.current.value;
inputValues.current.tasks = [...inputValues.current.tasks, enteredTask];
console.log(inputValues);
setTasks((prevTasks) => [...prevTasks, inputValues.current.tasks]);
inputTask.current.value ='';
  }


  return (
    <section className="project-details">
      <h1>
{projectInfo.title}
        <span>
          <button>Delete</button>
        </span>
      </h1>
      <h4>{projectInfo.date}</h4>
      <article>{projectInfo.description}</article>
      <h1>Tasks</h1>
      <span>
        <input type="text"  ref={inputTask} placeholder="Add a new task..." />
        <button onClick={AddTasks}>Add</button>
      </span>
      <section className="task-list">
        {console.log("Tasks added : ", tasks)}
        {tasks ? (
<ul>
        {tasks.map((task, index) => (
          <li key={index}>
              <span><li>{task}</li></span>
          </li>
        ))}
      </ul>
        ) : (<h3> You can enter tasks to this project</h3>)}
      </section>
    </section>
  );
}
