import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = response.data;
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user.id} className='container'>
          <h3 className='user-title'>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;
