import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div key={tour.id} className='single-tour'>
      <img src={tour.image} alt={tour.id} className='img' />
      <span className='tour-price'>{tour.price}</span>
      <div className='tour-info'>
        <h5>{tour.name}</h5>
        <p>
          {readMore ? tour.info : `${tour.info.slice(0, 200)}...`}
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? " ReadLess" : " ReadMore"}
          </button>
        </p>
        <button
          className='btn btn-block delete-btn'
          onClick={() => removeTour(tour.id)}
        >
          Not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
