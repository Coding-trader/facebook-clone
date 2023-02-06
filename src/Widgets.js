import React from 'react';
import './Widgets.css'

function Widgets() {
  return (
    <div className='widgets'>
      <iframe
        src='https://www.iheart.com/'
        width='340'
        height='50%'
        style={{ border: 'none', overflow: 'hidden' }}
        frameborder='0'
        allowTransparency='true'
        allow='encrypted-media'
      >  
      </iframe>
      
      <div className='youtube__videos'>
        <iframe className='video1'
            width="340" 
            height="315" 
            src="https://www.youtube.com/embed/znTyGFD2GJ4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        ></iframe>
        <iframe className='video2'
            width="340" 
            height="315" 
            src="https://www.youtube.com/embed/VjMKmJDT_qU" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

export default Widgets;
