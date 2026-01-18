import React, {useState, useEffect} from 'react';
import gym_pic from "../images/gym_pic.jpg";

const Home=()=>{

    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/message')
        .then(res => res.json())
        .then(data => setMsg(data.message))
        .catch(err => console.error(err));
    }, []);

    return(
        <div className='homepic' style={{ backgroundImage: `url(${gym_pic})` }}
>           <div className='hero'>
            <div className='tagline'>Smart Training. Real Results.</div>
            <div className='backend-msg' style={{ color: 'white' }}> {msg} </div>
            <button className='start'>Start Workout --- </button>
</div>
       
        </div>
    );
}

export default Home;
