import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import One from "./assets/images/img1.jpg"
import PlayerList from "./components/playerlist";
import FavList from "./components/favlist";
import two from "./assets/images/img2.jpg"
import three from "./assets/images/img3.jpg"
import four from "./assets/images/img4.jpg"
import five from "./assets/images/img5.jpg"
import six from "./assets/images/img6.jpg"
import seven from "./assets/images/img7.jpg"
import eight from "./assets/images/img8.jpg"
import nine from "./assets/images/img9.jpg"
import ten from "./assets/images/img10.jpg"
import eleven from "./assets/images/img11.jpg"
import twelve from "./assets/images/img12.jpg"
import thirteen from "./assets/images/img13.jpg"
import fourteen from "./assets/images/img14.jpg"
import fifteen from "./assets/images/img15.jpg"
import sixteen from "./assets/images/img16.jpg"
import seventeen from "./assets/images/img17.jpg"
import eighteen from "./assets/images/img18.jpg"
import ninteen from "./assets/images/img19.jpg"
import twenty from "./assets/images/img20.jpg"
import twentyone from "./assets/images/img21.jpg"
import twentytwo from "./assets/images/img22.jpg"

function App() {
  const [players] = useState([
    {
      name:"MS Dhoni",
      photo: two
    },
    {
      name:"Ruturaj Gaikwad",
      photo: three
    },
    {
      name:"Ravindra Jadeja",
      photo: four
    },
    {
      name:"Matheesha Pathirana",
      photo: five
    },
    {
      name:"Shivam Dube",
      photo: six
    },
    {
      name:"Rahul Tripathi",
      photo: seven
    },
    {
      name:"Devon Conway",
      photo: eight
    },
    {
      name:"Rachin Ravindra",
      photo: nine
    },
    {
      name:"R. Ashwin",
      photo: ten
    },
    {
      name:"Noor Ahmad",
      photo: eleven
    },
    {
      name:"Deepak Hooda",
      photo: twelve
    },
    {
      name:"Vijay Shankar",
      photo: thirteen
    },
    {
      name:"Khaleel Ahmed",
      photo: fourteen
    },
    {
      name:"Sam Curran",
      photo: fifteen
    },
    {
      name:"Jamie Overton",
      photo: sixteen
    },
    {
      name:"Mukesh Choudhary",
      photo: seventeen
    },
    {
      name:"Shreyas Gopal",
      photo: eighteen
    },
    {
      name:"Nathan Ellis",
      photo: ninteen
    },
    {
      name:"Gurjapneet Singh",
      photo: twenty
    },
    {
      name:"Andre Siddarth",
      photo: twentyone
    },
    {
      name:"Anshul Kamboj",
      photo: twentytwo
    }
  
  ]);
  const [favorites, setFavorites] = useState([]);

  // Add to favorites
  const addToFavorites = (player) => {
    if (!favorites.includes(player)) {
      setFavorites([...favorites, player]);
    }
  };

  // Remove from favorites
  const removeFromFavorites = (player) => {
    setFavorites(favorites.filter((fav) => fav !== player));
  };

  return (
    <Router>
      <div className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 p-10 mx-16 my-3 sm:m-1 h-full">
        <h1 className="text-2xl  font-bold md:text-6xl text-center italic text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200  rounded-lg  px-5 py-2.5  me-2 mb-2" style={{fontFamily:"Harry Potter, sans-serif"}}>CSK Squad 2025</h1>

        <div
          className="bg-cover h-full sm:bg-cover"
          style={{ backgroundImage: `url(${One})`, height:"full" }}>


          {/* Navigation Links */}
          <div className="flex justify-evenly  p-5  text-lg md:text-5xl underline font-bold sm:text-5xl  text-gray-900 ">
            <Link to="/" className="cursor-pointer hover:text-white">
              List of Players
            </Link>
            <Link to="/favorites" className="cursor-pointer hover:text-white ">
               Playing X1
            </Link>
          </div>

          {/* Routes */}
          <Routes>
            <Route
              path="/"
              element={
                <PlayerList
                  players={players}
                  favorites={favorites}
                  addToFavorites={addToFavorites}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <FavList
                  favorites={favorites}
                  removeFromFavorites={removeFromFavorites}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;