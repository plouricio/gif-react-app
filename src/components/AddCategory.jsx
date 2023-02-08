
import '../styles.css'
import { useState } from 'react'

export const AddCategory = ( {onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event)=>{
    //setea el evento que entrega la propiedad onchange del input
    setInputValue(event.target.value) 
  };

  const onSubmit = (event)=>{
    //previene el refresh de la pagina al hacer submit
    event.preventDefault();
    //Sale de la funcion si el input es vacio.
    if(inputValue.trim().length <= 1 ) return;
    //Recibe setCategories por los props
    //Ademas se puede usar el callback de la funcion para acceder a los valores que ya tiene
    //el setCategories del componente padre.
    //setCategories( categories => [inputValue, ...categories])
    onNewCategory( inputValue.trim() ); 
    //Setea el input en un string vacio.
    setInputValue('');
  }

 
  return (
    <form onSubmit={ (event) => onSubmit(event)} >
      <input
        type="text"
        placeholder="Buscar Gif's "
        value={inputValue}
        onChange={ (event)=> onInputChange(event) }
        />
    </form>
  
  )
}
