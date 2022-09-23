import React from 'react'

export const CoverImg = (props) => {
  
  return (

  <div className='cover-image-container'>
        <a href={props.item.external_urls.spotify}>
          <img className='cover-image' src={props.item.images[0].url} alt='album cover'/>
          </a>

          <div className='image-overlay'>
            <div className='icons-container'>
              <img className='heart-icon' src='/icons/heart.svg' alt='heart button'/>
              <img className='play-icon' src='/icons/play.svg' alt='play button'/>
              <img className='dots-icon' src='/icons/dots.svg' alt='dots button'/>
            </div>
          </div>
      </div>
      )
};