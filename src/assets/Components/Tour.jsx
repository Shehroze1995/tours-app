/* eslint-disable react/prop-types */
import { useState } from "react";

export const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-[22rem] relative shadow-2xl pb-4 hover:scale-105 transition ease-in-out delay-150">
      <img
        src={image}
        alt={name}
        className="w-[100%] h-[20rem] object-cover m-auto"
        loading="lazy"
      />
      <footer className="p-2 flex flex-col justify-between gap-4 max-h-max sm:min-h-[18rem]">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p className="opacity-60">
          {readMore ? info : `${info.substring(0, 180)}... `}
          <button
            onClick={() => setReadMore(!readMore)}
            className="text-blue-600"
          >
            {readMore ? " Show Less" : " Read More"}
          </button>
        </p>
        <button
          onClick={() => removeTour(id)}
          className="border border-red-600 w-full text-red-600 hover:bg-red-600 hover:text-white rounded transition delay-100 ease-in-out"
        >
          Not Interested
        </button>
      </footer>
      <p className="absolute top-0 right-0 bg-green-400 py-1 px-3">${price}</p>
    </div>
  );
};
