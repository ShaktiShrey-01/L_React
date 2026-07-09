import { useNavigate } from "react-router-dom";
const Card1 = ({ user, onDelete,isupdating, onedit,isdeleting }) => {
  const {
    id,
    username,
    image,
    email,
    eyeColor = "#3b82f6",
  } = user;
const navigate = useNavigate();
  return (
    <div
      style={{
        background: `linear-gradient(to bottom right, #404040, ${eyeColor})`,
      }}
      className="w-48 h-64 md:w-48 md:h-64 lg:w-72 lg:h-80 rounded-2xl border-4 border-black/10 flex flex-col items-center justify-center gap-3 md:gap-4 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      {/* Image */}
      <div className="h-24 w-24 overflow-hidden rounded-2xl md:h-28 md:w-28 lg:h-36 lg:w-36 border-2 border-white shadow-lg">
        <img
          src={image}
          alt={username}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Username */}
      <h1 className="text-center text-lg font-bold text-white md:text-xl lg:text-2xl">
        {username}
      </h1>

      {/* Email */}
      <p className="w-full break-all px-3 text-center text-xs font-medium text-white md:text-sm">
        {email}
      </p>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(id)}
        disabled={isdeleting === id}
        className="flex h-10 w-24 items-center justify-center rounded-xl bg-red-600 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isdeleting === id ? (
          "Deleting..."
        ) : (
          "Delete"
        )}
      </button>
      <button className="flex h-10 w-24 items-center justify-center rounded-xl bg-green-600 font-bold text-white transition-all duration-200 hover:scale-105 hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60" onClick={onedit} disabled={isupdating===id}>
        {isupdating?"Updating...":"Edit"}
      </button>
    </div>
  );
};

export default Card1;