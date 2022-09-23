import React from 'react'

export const AlbumName = (props) => {
  return (
    <div className="album-name"> 
      <h2 href={props.item.external_urls.spotify}>
        {props.item.name} 
      </h2>
      </div>
  )
}