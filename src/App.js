import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams  } from "react-router-dom"

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setUsers(result);
        },
        (error) => {
          console.log(error);
        }
      )
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

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const {userId} = useParams()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setAlbums(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [userId]);

  return (
    <div>
      {albums.map(album => (
        <div key={album.id}>
          {album.title}
          <Link to={`/photos/${album.id}`}>Photos</Link>
        </div>
      ))}
    </div>
  );
}

function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const {albumId} = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(res => res.json())
      .then(
        (result) => {
          setPhotos(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [albumId]);

  return (
    <div>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.url} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}

function App() {
  return ( 
    <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<UserList/>} />
          <Route path="/albums/:userId" element={<AlbumList/>} />
          <Route path="/photos/:albumId" element={<PhotoList/>} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
