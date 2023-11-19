import { useEffect, useState } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);
  const [isError, setIsError] = useState(false);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        return setIsError(true);
      }
      setTours(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No tours left</h2>
          <button className='btn' onClick={fetchTours} style={{marginTop:"2rem"}}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  if (isError) {
    return (
      <main>
        <h2>There was an Error fetching tours</h2>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
