import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/context";
import { data } from "./Friend";

export default function FavoriteFeriends() {
  const [favorites, setFavorites] = useState([]);
  const { state } = useContext(AuthContext);


  useEffect(() => {
    setFavorites(data);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);
  
  return (
    <>
      <h1>Favorite list</h1><ul>
        {favorites.map(item => state.favorite === true ? <li key={item.id}>{item.name}</li> : null
        )}
      </ul>
    </>
  )
}