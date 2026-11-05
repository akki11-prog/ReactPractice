import { useState, useRef, useEffect } from "react";
import "./App.css";

// export default function App() {
// const [seconds, setSeconds] = useState(0);

// const timerRef = useRef(null);

// function startTimer() {
//   if (timerRef.current) return; // Prevent multiple intervals

//   timerRef.current = setInterval(() => {
//     setSeconds((prevSeconds) => prevSeconds + 1);
//   }, 1000);
// }

// function stopTimer() {
//   clearInterval(timerRef.current);
//   timerRef.current = null;

// }
//   return (
//     <>
//     <h1>Seconds : {seconds}</h1>
//     <button onClick={startTimer}>Start</button>
//     <button onClick={stopTimer}>Stop</button>
//     <button onClick={() => setSeconds(0)}>Reset</button>
//     </>
//   );
// }

// export default function App() {
//   const [email, setEmail] = useState("NEw@123.com");
//   const [password, setPassword] = useState("");
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   useEffect(() => {
//     passwordRef.current.focus();
//     console.log("Email Input Ref:", emailRef.current.type);
//   }, []);
//   return (
//     <div className="header-container">
//       <input
//         ref={emailRef}
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Enter your Email"
//       />
//       <input
//         ref={passwordRef}
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Enter your Password"
//       />
//       <button>Login</button>
//       <button>Register</button>
//     </div>
//   );
// }

export default function App() {
  const [user, setUser] = useState([
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Alice Johnson", age: 28 },
    { name: "Bob Brown", age: 35 },
    { name: "Charlie Davis", age: 32 },
    { name: "Eve Wilson", age: 29 },
    { name: "Frank Miller", age: 31 },
    { name: "Grace Lee", age: 27 },
    { name: "Hannah Taylor", age: 33 },
    { name: "Ian Anderson", age: 34 },
  ]);
  const [selectedUserID, setSelectedUserID] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");


  function selectUser(userIndex) {
    setSelectedUserID(userIndex);
    console.log("Selected User ID:", user[userIndex].name);
    setEditName(user[userIndex].name);
    setEditAge(user[userIndex].age.toString());
  }

  function updateUserDetails() {
    if (selectedUserID !== null) {
      const updatedUser = { ...user[selectedUserID] };
      updatedUser.name = editName;
      updatedUser.age = parseInt(editAge);
      const newUserList = [...user];
      newUserList[selectedUserID] = updatedUser;
      setUser(newUserList);
    }
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {user.map((user, index) => (
          <li key={index}>
            <button onClick={() => selectUser(index)}>
              {user.name} - Age: {user.age}
            </button>
          </li>
        ))}
      </ul>
      {selectedUserID !== null && (
        <div>
          <h2>Selected User Details</h2>
          <input 
           type="text"
            value={editName}      
            onChange={
(e) => {
              setEditName(e.target.value);
            }}
           />
          <input  type="text" value={editAge} onChange={(e) => {
            setEditAge(e.target.value);
          }} />
          <button onClick={updateUserDetails}>Update</button>
        </div>
      )}
    </div>
  );
}
