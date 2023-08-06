import React from 'react'
import '../App.css'

const ImageBlock=(props)=> {


  return (
    <div className='image-card'>
        <a href={props.src} target="_blank"><img  key={props.key} src={props.src} alt={props.alt}></img></a>

    </div>
  )
}

export default ImageBlock;
