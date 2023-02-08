import React from 'react'

export const GifItem = ({id,title,url}) => {
  return (
    <div className="card">
                <p>{title}</p>
                <img src={url}/>
    </div>
  )
}
