import React, { useEffect, useState } from "react"


export const data =[ 
  {id: 1, name: 'Sasha'},
  {id: 1, name: 'Petya'},
  {id: 1, name: 'Vasya'},
  {id: 1, name: 'Andry'},
]

export default function Friend () {
  const [items, setItems] = useState(data);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setItems(items);
    }
  }, []);
return(
  <>
  
  </>
)
}