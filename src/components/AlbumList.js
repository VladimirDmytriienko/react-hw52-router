import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const { userId } = useParams();

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
      );
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

export default AlbumList;
