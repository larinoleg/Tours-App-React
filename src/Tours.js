import React from 'react';
import Tour from './Tour';
const Tours = ({tours,removeTour}) => {
  return ( 
  <section>
    <div className="tittle">
      <h2> Ours Tours</h2>
      <div className="underline"></div>
    </div>

    <div>
      {tours.map((tour)=> {
      return <Tour key={tour.id} {...
      tour} removeTour = {removeTour}>
      </Tour>;
    })}
    </div>
  </section> 
  );
};

export default Tours;
