import React from 'react'
import { CoverImg } from './CoverImg';
import { AlbumName } from './AlbumName';
import { ArtistName } from './ArtistName';
import data from 'data.json';

console.log(data);

export const AlbumList = () => {
  return (
    <section className='app-body'>
        {data.albums.items.map((item) => (
         <article className='album-card' key={item.id}>
            <CoverImg
               item={item}
             />
             <div className='album-artist-container'>
            <AlbumName
               item={item}
            />
            <ArtistName
               item={item}
            />
            </div>
         </article>
        ))}
    </section>
  )
}

// key={item.id}

// <img src={item.images[1].url} className="album-image"/>
          
// <p className="artist-name">{item.artists[0].name}</p> 
// <div className=""></div>