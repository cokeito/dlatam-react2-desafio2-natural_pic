import React from 'react'
import { useContext, useEffect } from "react";
import "../assets/css/galeria.css";
import Heart from "./Heart";
import Context from "../Context";


const Gallery = () => {
  const { gallery, setGallery } = useContext(Context)

  useEffect(() => {
    console.log('gallery', gallery)
  }, [])

  const setFavorite = (id) => {
    console.log(id);
    const galleryIndex = gallery.findIndex((photo) => photo.id === id);
    gallery[galleryIndex].favorite = !gallery[galleryIndex].favorite;
    setGallery([...gallery]);
  };

  return (
    <div className="galeria grid-columns-5 p-3">
      {
        gallery.map((photo) => (
          <div
            key={photo.id}
            className="foto"
            onClick={() => setFavorite(photo.id)}
            style={{ backgroundImage: `url(${photo.src})` }}
          >
            <Heart filled={photo.favorite} />
            <p>{photo.description}</p>


          </div>

        ))
      }
    </div>
  );
}

export default Gallery
