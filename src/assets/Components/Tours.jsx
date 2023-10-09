/* eslint-disable react/prop-types */
import { Tour } from "./Tour";

export const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <div className="my-8">
        <h1 className="text-center text-4xl">Our Tours</h1>
        <div className="w-[8rem] border-2 border-blue-600 m-auto"></div>
      </div>
      <div className="w-[95%] max-w-6xl m-auto flex flex-wrap justify-center gap-4 gap-y-12 py-6">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </>
  );
};
