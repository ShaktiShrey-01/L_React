import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import reactLogo from "../assets/react.svg";

const Card = ({
  name = "Shakti",
  image = reactLogo,
}) => {
  const [activecount, setactivecount] = useState(0);

  const increase = (e) => {
    e.stopPropagation();
    setactivecount((prev) => prev + 1);
  };

  const decrease = (e) => {
    e.stopPropagation();
    setactivecount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="border-4 rounded-3xl transition-all duration-300 hover:shadow-lg hover:scale-105 w-48 h-64 md:w-72 md:h-80 lg:w-80 lg:h-96 flex flex-col items-center justify-center gap-4 bg-white">

      {/* Image */}
      <div className="h-32 w-32 lg:h-44 lg:w-44 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
        <img
          src={image}
          alt={name}
          onError={(e) => {
            e.currentTarget.src = reactLogo;
          }}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
        {name}
      </h1>

      {/* Button */}
      <button
        onClick={increase}
        className="text-md font-bold border-4 border-slate-800 rounded-xl flex items-stretch justify-between cursor-pointer transition-transform hover:scale-105 w-36 h-12 md:w-52 lg:w-60"
      >
        {activecount === 0 ? (
          <span className="flex h-full w-full items-center justify-center">
            Add to Cart
          </span>
        ) : (
          <div className="flex w-full h-full items-center justify-between">

            <button
              onClick={decrease}
              className="h-full px-3 bg-slate-800 text-white rounded-l-lg flex items-center justify-center"
            >
              <Minus className="w-5 h-5" />
            </button>

            <span className="font-semibold flex-1 text-center">
              {activecount}
            </span>

            <button
              onClick={increase}
              className="h-full px-3 bg-slate-800 text-white rounded-r-lg flex items-center justify-center"
            >
              <Plus className="w-5 h-5" />
            </button>

          </div>
        )}
      </button>

    </div>
  );
};

export default Card;