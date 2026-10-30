import SideBar from "./components/SideBar";
import ProjectDetails from "./components/ProjectDetails";
import AddProject from "./components/AddProject";
import ProjectHome from "./components/ProjectHome";
import { useState, useRef } from "react";
function App() {
  const dialogRef = useRef(null);
  const [projects, setProjects] = useState([
    {title : '',
      description : '',
      date : ''
    }
  ]);

    function handleAddProjectClick() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }
  function handleCloseDialog() {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  }

  function updateArray(item){
    const newProjects = {
      ...item.current,
      id: Math.random().toString()
    };
    setProjects(prevProjects => [...prevProjects, newProjects]);
    console.log("NEw project List :", projects)
  }
  return (
    <>
    {console.log("Refreshinggggg")}
      <div className="container">
        <section className="sidebar">
          <SideBar handleAddProjectClick={handleAddProjectClick} />
        </section>

        <section className="main-content">
          <ProjectHome handleAddProjectClick={handleAddProjectClick} />
          <AddProject ref={dialogRef} onClose={handleCloseDialog} updateList = {updateArray} />
          <ProjectDetails />
          <div key={projects[0].id}>
                <h3>{projects[0].title}</h3>
                <p>{projects[0].description}</p>
                <small>{projects[0].date}</small>
              </div>
        </section>
      </div>
    </>
  );
}

export default App;
