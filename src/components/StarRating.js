import React, { useState } from 'react'
import Star from './Star'

function StarRating() {
  const [rating, setRating] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);

  const displayText = [
    'Try again',
    'Could be Better',
    'Well Done',
    'Great!',
    'Perfect!'
  ];

  function updateRating(value, index) {
    setRating(value);
    setActiveIndex(index);
  }

  return (
    <section className='star-rating'>
      <div>
        {displayText.map((v, i) => (
          <Star
            key={i}
            funct={() => updateRating(v, i)}
            isActive={i <= activeIndex}
          />
        ))}
      </div>
      <h2>{rating}</h2>
    </section>
  )
}

export default StarRating
