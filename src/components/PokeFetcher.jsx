import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';
import '../App.css';
import PokemonCard from './PokemonCard';

const PokeFetcher = () => {
  const [pokeData, setPokeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchCnt, setFetchCnt] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(false);
  const totalCnt = 1302;
  const generateCards = async()=>{
        try {
          setIsLoading(true);
          const API = `https://pokeapi.co/api/v2/pokemon?offset=${fetchCnt}&limit=16`;
          const res = await fetch(API);
          const jdata = await res.json();
          if(jdata.results){
            const newPokeData = [];
            for (let index = 0; index < jdata.results.length; index++) {
              const ele = jdata.results[index];
              const detailsApi = ele.url;
              const detailsRes = await fetch(detailsApi);
              const detailsData = await detailsRes.json();
              const pokeDetails = {
                id : detailsData.id,
                name : detailsData.name,
                imageUrl : detailsData.sprites.front_default,
                hp : detailsData.stats[0].base_stat,
                attack : detailsData.stats[1].base_stat,
                defense : detailsData.stats[2].base_stat,
                specialAttack : detailsData.stats[3].base_stat,
                specialDefense : detailsData.stats[4].base_stat,
                speed : detailsData.stats[5].base_stat,
                height : detailsData.height,
                weight : detailsData.weight
              }
              newPokeData.push(pokeDetails);
            }
            setPokeData(newPokeData);
          }
        } catch (error) {
          console.log(error);
        }finally {
          setTimeout(() => {
            setIsLoading(false); // Hide the loading state after 2 seconds
          }, 500);
          setIsFirstLoad(true);
        }
    }

    useEffect(()=>{
      if(isFirstLoad){
        generateCards();
      }
    }, [fetchCnt]);

    const loadNextCards = ()=>{
      if(fetchCnt + 16 <= 1302){
        setFetchCnt(fetchCnt + 16)
      }else if(totalCnt - fetchCnt < 16){
        setFetchCnt(totalCnt - 16);
      }
    }
    const loadPrevCards =()=>{
      if(fetchCnt - 16 >= 0){
        setFetchCnt(fetchCnt - 16);
      }else if(fetchCnt - 0 < 16){
        setFetchCnt(0);
      }
    }
  return (
    <div className="pokeFetcher">
      <div className="topBtns">
        <button onClick={generateCards}>Generate Cards</button>
      </div>
      <div className="cardsContainter">
        {isLoading?
        (<LoadingSpinner />)
        :(<div>{pokeData?((
          pokeData.map((it, ind)=>{
            return(
              <PokemonCard key={ind} obj={it} />
            )
          })
        )):(<p></p>)}</div>)
      }
      <div className="bottomBtns">
        <button onClick={loadPrevCards}>Prev Cards</button>
        <button onClick={loadNextCards}>Next Cards</button>
      </div>
      </div>
    </div>
  )
}

export default PokeFetcher
