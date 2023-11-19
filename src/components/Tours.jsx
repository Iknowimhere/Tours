import Tour from "./Tour";

const Tours = ({ tours,removeTour }) => {
  
  return (
    <section>
      <div className='title'>
        <h2>Our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => (
          <Tour tour={tour} removeTour={removeTour} key={tour.id} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
