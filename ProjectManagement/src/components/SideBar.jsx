
export default function SideBar({handleAddProjectClick, projects, openProject}) {

  return (
    <>
    <h3>Add Project</h3>
    <button onClick={handleAddProjectClick}>Add</button>
    {/* Loop through the projects array */}
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button onClick={() => openProject(project.id)}>
              {project.title}
              {console.log(project)}
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
