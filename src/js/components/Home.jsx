import React, { useState, useEffect } from 'react';

function Home() {
  const [activeLight, setActiveLight] = useState('red');

 //logica de cambio de luces
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLight(prev => {
        if (prev === 'red') return 'yellow';
        if (prev === 'yellow') return 'green';
        return 'red';
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
    
  //Style 
  const trafficLightStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#000',
    padding: '20px',
    borderRadius: '10px',
    width: '100px',
    margin: '0 auto'
  };

  const lightStyle = (color, isActive) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: isActive ? color : '#444',
    opacity: isActive ? 1 : 0.3,
    boxShadow: isActive ? `0 0 20px ${color}` : 'none',
    transition: 'all 0.3s ease'
  });

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Semáforo</h1>
      <div style={trafficLightStyle}>
        <div style={lightStyle('red', activeLight === 'red')} />
        <div style={lightStyle('yellow', activeLight === 'yellow')} />
        <div style={lightStyle('green', activeLight === 'green')} />
      </div>
      <p style={{ marginTop: '20px' }}>
        Luz actual: <strong>{activeLight}</strong>
      </p>
    </div>
  );
}

export default Home;