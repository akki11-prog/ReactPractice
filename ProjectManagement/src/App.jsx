import SideBar from "./components/SideBar";
import ProjectDetails from "./components/ProjectDetails";
import AddProject from "./components/AddProject";
import ProjectHome from "./components/ProjectHome";
import { useState, useRef } from "react";
function App() {
  const dialogRef = useRef(null);
  const [projectInfo, setProjectInfo] = useState();
  const [projects, setProjects] = useState([]);
  const [displayProject, setDisplayProject] = useState(false);

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

  function updateArray(item) {
    const newProjects = {
      ...item.current,
      id: Math.random().toString(),
    };
    setProjects((prevProjects) => [...prevProjects, newProjects]);
  }

  function displayProjectDetails(projectId) {
    const selectedProject = projects.find(
      (project) => project.id === projectId,
    );
    setProjectInfo(selectedProject);
  }
  return (
    <>
      <AddProject
        ref={dialogRef}
        onClose={handleCloseDialog}
        updateList={updateArray}
      />

      {console.log("Refreshinggggg")}
      <div className="container">
        <section className="sidebar">
          <SideBar
            handleAddProjectClick={handleAddProjectClick}
            projects={projects}
            openProject={displayProjectDetails}
          />
        </section>

        <section className="main-content">
          {projectInfo ? (
            <ProjectDetails projectInfo={projectInfo} updateArray={updateArray} />
          ) : (
            <ProjectHome handleAddProjectClick={handleAddProjectClick} />
          )}
        </section>
      </div>
    </>
  );
}

export default App;
