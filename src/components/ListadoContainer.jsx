import React from 'react'
import ListadoMostrar from './ListadoMostrar';

function ListadoContainer() {
    let array = ["Pedro","Maria","Jose"];
    array.push("Mailen");
  return (
    <ListadoMostrar  array= {array}/>
  )
}

export default ListadoContainer