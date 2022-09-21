import AlbumName from 'components/AlbumName';
import ArtistName from 'components/ArtistName';
import CoverImg from 'components/CoverImg';
import Header from 'components/Header';
import React from 'react';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div className="App">
      <div className='app-body'>
        {data.albums.items.map(item => {
        return <div className="album-card"key={item.id}>
          <img src={item.images[1].url} className="album-image"/>
          <h2 className="album-name">{item.name}</h2>
          <p className="artist-name">{item.artists[0].name}</p> 
          <div className=""></div>
          </div>
      })}
      </div>
     </div>
    
  );
}

// {}
// <Header />
// <CoverImg />
// <ArtistName />
// <AlbumName />

// 
{/* <AlbumName name={data.albums} /> */}