
export default function SideBar({handleAddProjectClick}) {

  return (
    <>
    <h3>Add Project</h3>
    <button onClick={handleAddProjectClick}>Add</button>
    <ul>
      <li><button>Project 1</button></li>
      <li><button>Project 2</button></li>
      <li><button>Project 3</button></li>
    </ul>
    </>
  )
}
