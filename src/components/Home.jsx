import React from 'react';
import "../App.css";

const Home = () => {
  return (
    <div>
        <div className="container">
            <div className="hometext">
              <div className="text">
                <p>Catch 'Em All, Right at Your Fingertips! Discover, Collect, and Share Your Favorite Pokemon Cards!</p>
              </div>
              <div className="ballimg">
                <img src="/images/pokeball.webp" alt="PokeBall" />
              </div>
            </div>
            <div className="homeimage">
              <img src="images/samplePokemon.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home;