import React from 'react';
import './StoryReel.css';
import Story from './Story';


function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
            image='https://th.bing.com/th/id/R.ef7819a58d414c3e81e7daa6489d5366?rik=aRAYFYZM1NnweA&pid=ImgRaw&r=0'
            profileSrc='https://th.bing.com/th/id/OIP.zKLtoSM0baAMrKmbQ1rn8gHaGU?w=188&h=180&c=7&r=0&o=5&dpr=1.38&pid=1.7'
            title="Alexandre' Davis"
        />
        <Story
            image='https://pbs.twimg.com/media/DSzrZmNXkAAK_kb.jpg:large'
            profileSrc='https://th.bing.com/th/id/OIP.v54jEUoUSJxKFWGRt_xoOwHaHa?pid=ImgDet&w=187&h=187&c=7&dpr=1.38'
            title='Lightskin Keisha'
        />
        <Story
            image='https://th.bing.com/th/id/R.2772bb197dbaf3165313214454f8c3e7?rik=rRBdruyYF%2fYI0g&pid=ImgRaw&r=0'
            profileSrc='https://th.bing.com/th/id/R.547da03c1f943d37dbead510fa156237?rik=PF52D%2b3ImLZwng&pid=ImgRaw&r=0'
            title='Rihanna'
        />
        <Story
            image='https://townsquare.media/site/812/files/2022/05/attachment-Drake.jpg?w=980&q=75'
            profileSrc='https://th.bing.com/th/id/R.ae984a3761d7111b335b2903da30fc2b?rik=xzdkVRXN%2fgYHlw&pid=ImgRaw&r=0'
            title='Drake'
        />
    </div>
  )
}

export default StoryReel;
