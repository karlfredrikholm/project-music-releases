import AlbumName from 'components/AlbumName';
import ArtistName from 'components/ArtistName';
import CoverImg from 'components/CoverImg';
import Header from 'components/Header';
import React from 'react';
import data from './data.json';

console.log(data);

export const App = () => {
  return (
    <div>
      {}
      <Header />
      <CoverImg />
      <ArtistName />
      <AlbumName />
    </div>
  );
}

