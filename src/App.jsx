import "./styles.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";

function App() {
  const endpoint = "/fotos.json";
  const [gallery, setGallery] = useState([])

  const getPhotos = async () => {
    const response = await fetch(endpoint);
    let { photos } = await response.json();

    const allPhotos = photos.map((photo) => ({
      id: photo.id,
      src: photo.src.tiny,
      description: photo.alt,
      favorite: false
    }));

    setGallery(allPhotos);
  };

  useEffect(() => {
    getPhotos();
  }, [])


  return (
    <div className="App">
      <Context.Provider value={{ gallery, setGallery }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App
