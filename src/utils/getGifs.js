import { environment } from "../enviroments/enviroments";

export const getGifsFromCategory = async (category)=>{

    const url = `${environment.api_url}?api_key=${environment.api_key}&q=${category}&limit=20`;
    const res = await fetch(url);
    const {data} = await res.json();
   

    const listGifs = data.map( img => ({
        id:     img.id,
        title:  img.title,
        url:    img.images.downsized_medium.url,
    }))

    console.log("list gifs", listGifs);
    return listGifs;
};