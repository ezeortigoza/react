import React from 'react'
import Item from './Item'

function ItemLIst({celulares}){
  return (
    <div className='container d-flex justify-content-center my-5   '>
      <div className='row '>
        {celulares?.map(celulares => (
          <div className='col-md-4 my-5'>
        <Item key={celulares.id} celulares={celulares}/>
        </div>
        ))
      }
        </div>
    </div>
  )
}

export default ItemLIst