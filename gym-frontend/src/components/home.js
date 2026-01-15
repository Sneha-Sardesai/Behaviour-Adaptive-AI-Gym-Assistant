import React from 'react';
import gym_pic from "../images/gym_pic.jpg";



const Home=()=>{
    return(
        <div className='homepic' style={{ backgroundImage: `url(${gym_pic})` }}
>        <div className='hero'>
     <div className='tagline'>Smart Training. Real Results.</div>
        <button className='start'>Start Workout ---></button>
</div>
       
        </div>
    );

}

export default Home;