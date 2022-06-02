import React from 'react'

function Saludar({msg, quien, hacerUnAlert}) {
  return (
    <div onClick={() => hacerUnAlert()}>{msg+ " "+quien}</div>
  )
}

export default Saludar