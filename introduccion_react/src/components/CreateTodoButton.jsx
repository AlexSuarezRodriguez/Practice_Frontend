import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton() {
  const handleClick=()=>{
    alert('aqui se deberia abrir el modal')
  };
  return (
    <button 
      className='CreateTodoButton'
      onClick={handleClick} 
    >
    +
    </button>
  )
}

export {CreateTodoButton}