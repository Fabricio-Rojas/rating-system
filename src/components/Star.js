import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function Star({funct = f => f, isActive }) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <>
      <FaStar
        onClick={funct}
        color={isActive || hover ? '#ffba08' : '#ffffff66'}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
    />
    </>
  )
}

export default Star
