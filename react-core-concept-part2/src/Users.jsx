import { useEffect, useState } from "react";

export default function Users() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);
  return (
    <div>
      <h3>Users : {users.length}</h3>
    </div>
  );
}

/**
 * 1. Declare a state to hold the data
 * 2. Use effect with callback dependancy array
 * 3. use fetch to load data
 */
