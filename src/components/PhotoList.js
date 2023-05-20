import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PhotoList() {
  const [photos, setPhotos] = useState([]);
  const { albumId } = useParams();

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
      );
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

export default PhotoList;
