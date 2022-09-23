import React from 'react'
import { ArtistName } from './ArtistName';
import { CoverImg } from './CoverImg';
import { AlbumName } from './AlbumName';
import data from 'data.json';

console.log(data);

export const Albumlist = () => {
  return (
        <>
    <div className='app-body'>
        {data.albums.items.map((item) => (
         <div className="album-card" key={item.id}>
            <CoverImg
               item={item}
             />
            <AlbumName
               item={item}
            />
            <ArtistName
               item={item}
            />
         </div>
        ))}
    </div>
    <div></div>
        </>
  )
}




// key={item.id}

// <img src={item.images[1].url} className="album-image"/>
          
// <p className="artist-name">{item.artists[0].name}</p> 
// <div className=""></div>