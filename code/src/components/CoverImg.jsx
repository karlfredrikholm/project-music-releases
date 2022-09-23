import React from 'react'

export const CoverImg = (props) => {
  return (
    
      <div className='album-image'>
        <img src = {props.item.images[1].url} alt='album cover'></img>
        <div className='image-overlay'>
          <div className='icons'>
            <img className='heart-icon' src='/icons/heart.svg' alt='heart button'/>
            <img className='heart-icon' src='/icons/play.svg' alt='play button'/>
            <img className='heart-icon' src='/icons/dots.svg' alt='dots button'/>
          </div>
        </div>
      </div>
    
  )
}