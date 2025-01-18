import React from 'react';
import "../App.css";

const PokemonCard = (props) => {
  return (
    <div className="pokemonCard">
      <div className="cardContain">
        <div className="bground">
        </div>
        <div className="card">
            <div className="image">
                <p>{props.obj.id}</p>
                <img src={props.obj.imageUrl}alt="picture" />
            </div>
            <div className="name">
                <p>{props.obj.name}</p>
            </div>
            <div className="stats">
                <div>hp : {props.obj.hp}</div>
                <div>attack : {props.obj.attack}</div>
                <div>defense : {props.obj.defense}</div>
                <div>special-attack : {props.obj.specialAttack}</div>
                <div>special-defense : {props.obj.specialDefense}</div>
                <div>speed : {props.obj.speed}</div>
                <div>height : {props.obj.height}</div>
                <div>weight : {props.obj.weight}</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default PokemonCard