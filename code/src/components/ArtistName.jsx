import React from 'react';

export const ArtistName = (props) =>{
  
  return(
    <>
     {props.item.artists.map((artist, index) => {
        return (
        <a className='artist-name underline'
        key={artist.id}
        href={artist.external_urls.spotify}>
          {artist.name}
          <span>{props.item.artists.length -1 > index? ', ' : ''}</span>  
          </a>
        )
      })
     }
     </>
  )
};