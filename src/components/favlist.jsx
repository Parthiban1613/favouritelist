import React from "react";

function FavList({ favorites, removeFromFavorites }) {
  return (
    <div className="my-14 text-white items-center text-lg space-y-5 px-4 sm:px-8">
      {favorites.length > 0 ? (
        favorites.map((favorite, index) => (
          <div
            key={index}
          className="flex flex-row flex-wrap sm:flex-row justify-between items-center text-center  rounded-md  sm:space-y-0 gap-2"
        
          >
            {/* Player Image and Name */}
            <div className="flex flex-row flex-wrap items-center gap-3">
              <img
                src={favorite.photo}
                alt={favorite.name}
                className="w-10 h-10 md:w-20 md:h-20 sm:w-16 sm:h-16 rounded-full md:ml-56 border-black"
              />
              <p className="text-xs md:text-xl font-medium bg-gradient-to-r from-cyan-500 to-blue-500 text-yellow-500 px-4 py-2" style={{borderRadius: "20px 50px 30px 50px"}}>
                 {favorite.name}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromFavorites(favorite)}
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-xs md:text-lg px-5 py-2.5 text-center me-2 mb-2 md:mr-80"
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-3xl text-blue-200 font-extrabold">No Player added to Playing-XI yet.</p>
      )}
    </div>
  );
}

export default FavList;