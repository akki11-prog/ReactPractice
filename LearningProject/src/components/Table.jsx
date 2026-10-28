export default function Table({notes, deleteNote}) {
  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Notes</th>
            <th>Edit/Delete</th>
          </tr>
        </thead>
        <tbody>
          {!notes || notes.length === 0 ? (
            <tr>
              <td colSpan="3">No notes available</td>
            </tr>
          ) : (
            notes.map((note, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{note}</td>
                <td>
                  <button onClick={() => {
                    deleteNote(index);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );    
}
