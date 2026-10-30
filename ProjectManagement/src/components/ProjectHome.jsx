export default function ProjectHome({ handleAddProjectClick }) {
    return (
        <>
        
          <img src="https://img.icons8.com/ios/50/000000/project-management.png" alt="Project Management Icon" />
          <h1>Project Management</h1>
          <p>Select a project to view its details or Create a New Project</p>
          <button onClick={handleAddProjectClick}>Create New Project</button>
        </>
    );
}