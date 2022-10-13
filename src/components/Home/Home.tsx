import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn" onClick={() => navigate('/ancient_history')}>Ancient History</button>
    </>
  )
}

export default Home