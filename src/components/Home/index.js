import React from 'react';
import coverPhoto from '../image/cover.jpg';

const Home = () => {
  return (
    <div id='home'>
      <div style={{ textAlign: 'center' }}>
        <img
          src={coverPhoto}
          alt="Cover"
          style={{ width: '100%', maxHeight: '100vh', objectFit: 'cover' }}
        />
        <h1
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'black',
            fontSize: '3em',
            textShadow: '2px 2px 4px #000000',
          }}
        >
          Learn Explore and grow
        </h1>
      </div>
    </div>
  );
};

export default Home;
