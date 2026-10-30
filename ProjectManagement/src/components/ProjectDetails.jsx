export default function ProjectDetails() {
  return (
    <section className="project-details">
      <h1>
        Project 1{" "}
        <span>
          <button>Delete</button>
        </span>
      </h1>
      <h4>Date</h4>
      <article>Description</article>
      <h1>Tasks</h1>
      <span>
        <input type="text" placeholder="Add a new task..." />
        <button>Add</button>
      </span>
      <section className="task-list">
        <ul>
          <li>
            <input type="checkbox" /> Task 1{" "}
            <span>
              <button>Clear</button>
            </span>
          </li>
          <li>
            <input type="checkbox" /> Task 2{" "}
            <span>
              <button>Clear</button>
            </span>
          </li>
          <li>
            <input type="checkbox" /> Task 3{" "}
            <span>
              <button>Clear</button>
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
}
