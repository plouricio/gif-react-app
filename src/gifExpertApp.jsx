import React, {useState} from 'react'
import { AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const addCategory = (newCategory)=>{
        if(categories.includes(newCategory)) return;
        console.log("agregando nueva categoria ==>",newCategory);
        setCategories([newCategory, ...categories])
    };


  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            //setCategories={setCategories}
            onNewCategory={ event => addCategory(event) }
        />
        {
            categories.map( category => (
                (<GifGrid 
                    key={category} 
                    category={category} 
                />)
            ))
        }

    </>
    
  )
}
