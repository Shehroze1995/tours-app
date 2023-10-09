import { useState, useEffect } from "react";
import { Tours } from "./assets/Components/Tours";
import loadingGif from "./assets/loading-gif/loading.gif";

const url = `https://course-api.com/react-tours-project`;

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTours = async () => {
    setLoading(true);
    try {
      let tours = await fetch(url);
      tours = await tours.json();
      setTours(tours);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };
  if (loading) {
    return <img src={loadingGif} alt="Loading GIF" className="m-auto relative top-[50%] translate-y-[-50%]" />;
  }
  if (tours.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center gap-4 relative h-screen">
        <h1 className="text-center text-4xl">No Tours Left</h1>
        <button
          onClick={() => fetchTours()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max"
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="relative h-screen">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
