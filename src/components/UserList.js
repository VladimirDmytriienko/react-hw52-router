import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          {user.email}
          <Link to={`/albums/${user.id}`}>Album</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
