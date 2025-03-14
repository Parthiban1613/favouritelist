import React from "react";

function PlayerList({ players, favorites, addToFavorites }) {
  return (
    <div className="my-5 text-white items-center text-lg space-y-4 px-4 sm:px-8">
      {players.map((player, index) => (
        <div
          key={index}
          className="flex flex-col-2 sm:flex-row  justify-between ml-52 items-center text-center  rounded-md  sm:space-y-0 gap-2 sm:flex-wrap"
        >
          {/* Player Image and Name */}
          <div className="flex items-center gap-3">
            <img
              src={player.photo}
              alt={player.name}
              className="w-10 h-10 md:w-20 md:h-20 rounded-full border border-black"
            />
            <p className="text-sm  font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-yellow-500 px-4 py-2 md:text-3xl" style={{borderRadius: "20px 50px 30px 50px"}}>
              {player.name}
            </p> 
          </div>

          {/* Add to Favorites Button */}
          <button
            onClick={() => addToFavorites(player)}
            disabled={favorites.includes(player)}
            className={`border px-4 py-2 mr-60 text-sm ${favorites.includes(player)
                ? "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-not-allowed"
                : "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              }`}
          >
            {favorites.includes(player) ? "Added" : "Add to Playing XI"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PlayerList;