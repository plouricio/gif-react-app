import React from 'react'
import { useEffect, useState } from 'react';
import { getGifsFromCategory } from '../utils/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async ()=>{
      const images =  await getGifsFromCategory(category);
      setImages( images );
      setIsLoading(false);
    };
  
      //Use effect se usa para ejecutar efectos secundarios
      //cuando algo suceda en la aplicacion.
      //Toma como parametro una funcion o callback, y una lista de dependencias.
      //*Si se dejan las dependencias vacias, Reeat ejecutara este efecto la primera vez que se renderice
      // lo similar a un ngOnInit en Angular*
      useEffect( ()=>{
        getImages();
      }, [])

      return {
        images:images,
        isLoading
      }
}
