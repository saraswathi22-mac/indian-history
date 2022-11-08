import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <button className="btn" onClick={() => navigate('/ancient_history')}>Ancient History</button>
      <button className="btn" onClick={() => navigate('/medieval_history')}>Medieval History</button>
    </>
  )
}

export default Home