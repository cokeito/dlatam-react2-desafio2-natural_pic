import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {

  const { gallery } = useContext(Context)

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {
          gallery.filter((photo) => { return photo.favorite }).map((photo) => (
            <div
              key={photo.id}
              className="foto"
              style={{ backgroundImage: `url(${photo.src})` }}
            >
            </div>

          ))
        }
      </div>
    </div>
  );
}
