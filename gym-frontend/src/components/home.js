import React, {useState, useEffect} from 'react';
import gym_pic from "../images/gym_pic.jpg";

const Home=()=>{

    const [msg, setMsg] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/api/home')
        .then(res => res.json())
        .then(data => setMsg(data.message))
        .catch(err => console.error(err));
    }, []);

return (
  <>
    <div
      className="homepic"
      style={{ backgroundImage: `url(${gym_pic})` }}
    >
      <div className="hero">
        <div className="tagline">Smart Training. Real Results.</div>
        <div className="backend-msg" style={{ color: "white" }}>
          {msg}
        </div>
        <button className="start">Start Workout ---</button>
      </div>
    </div>

    <div className="features">
      <div className="feature-title">Why Choose MYGYM ?</div>
      <div className='feature-cards'>
        <div className='card'>
            <h3>AI Personal Trainer</h3>
          <p>Smart coaching that adapts to your body and goals.</p>
        </div>

         <div className='card'>
            <h3>Smart Workout Tracking</h3>
          <p>Track every rep, set, and calorie in real time.</p>
        </div>

         <div className="card">
          <h3>Personalized Fitness Plans</h3>
          <p>Custom workouts and diet plans made for you.</p>
        </div>


      </div>
      <div className="footer">
        <p>📧 support@mygym.ai</p>
        <p>📞 +91 98765 43210</p>
        <p>📍 India</p>
      </div>
    </div>
  </>
);
}

export default Home;
