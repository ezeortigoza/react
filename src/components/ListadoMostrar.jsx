import React from 'react'




function ListadoMostrar({array}) {
  return (
    <>
        {array.map((item) =>(
            <p className='violet'>{item}</p>
         ))}
    </>
  );
}

export default ListadoMostrar