import React from 'react'

export const AlbumName = (props) => {
  return (
    <div className="album-name"> 
      <a href={props.item.external_urls.spotify}>
        {props.item.name} 
      </a>
      </div>
  )
}