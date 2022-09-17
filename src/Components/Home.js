import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./PokemonThumbnail";


function Home() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [query, setQuery] = useState('');
  const [searchData, setSearchData] = useState({});
  const [loadPoke, setLoadPoke] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const getOnePokemon = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
    const data = await res.json();
    console.log(data);
    setSearchData(data);
  }

  const handleRefresh = () => {
    setQuery('')
    setSearchData({})
  }

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke);
    const data = await res.json();
    setLoadPoke(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);
  console.log("search : ", searchData)

  return (
    <div className="app-container">
      <h1>Pokemon Kingdom .</h1>

      <div className="search-container">
        <input type="text" className="input-search" placeholder="search for any pokemon" value={query} onChange={e => { setQuery(e.target.value) }} />
        <button className="button-search" onClick={() => getOnePokemon()}> Search</button>
      </div>

      <div className="pokemon-container">
        <div className={`all-container ${searchData.name ? "direction-row" : " "}`}>
          {searchData?.name ?
            <>
              < PokemonThumbnail
                id={searchData?.id}
                name={searchData?.name}
                image={searchData?.sprites?.other?.dream_world?.front_default}
                type={searchData?.types[0]?.type?.name}
                height={searchData?.height}
                weight={searchData?.weight}
                stat1={searchData?.stats[0]?.stat?.name}
                stat2={searchData?.stats[1]?.stat?.name}
                stat3={searchData?.stats[2]?.stat?.name}
                stat4={searchData?.stats[3]?.stat?.name}
                stat5={searchData?.stats[4]?.stat?.name}
                stat6={searchData?.stats[5]?.stat?.name}
                bs1={searchData?.stats[0]?.base_stat}
                bs2={searchData?.stats[1]?.base_stat}
                bs3={searchData?.stats[2]?.base_stat}
                bs4={searchData?.stats[3]?.base_stat}
                bs5={searchData?.stats[4]?.base_stat}
                bs6={searchData?.stats[5]?.base_stat}
              />
              <button className="go-home"
                onClick={() => handleRefresh()}>
                Go Home
              </button>
            </>
            :
            <>
              {allPokemons.map((pokemon, index) => (
                <PokemonThumbnail
                  id={pokemon.id}
                  name={pokemon.name}
                  image=
                  {pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  key={index}
                  height={pokemon.height}
                  weight={pokemon.weight}
                  stat1={pokemon.stats[0].stat.name}
                  stat2={pokemon.stats[1].stat.name}
                  stat3={pokemon.stats[2].stat.name}
                  stat4={pokemon.stats[3].stat.name}
                  stat5={pokemon.stats[4].stat.name}
                  stat6={pokemon.stats[5].stat.name}
                  bs1={pokemon.stats[0].base_stat}
                  bs2={pokemon.stats[1].base_stat}
                  bs3={pokemon.stats[2].base_stat}
                  bs4={pokemon.stats[3].base_stat}
                  bs5={pokemon.stats[4].base_stat}
                  bs6={pokemon.stats[5].base_stat}
                />
              ))}
              <button className="load-more"
                onClick={() => getAllPokemons()}>
                More Pokemons
              </button>
            </>
          }
        </div>

      </div>
    </div >
  );
}

export default Home;