import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Description from "./Description";

const About = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState({});

    const getOnePokemon = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await res.json();
        console.log(data);
        setPokemon(data);
    }
    useEffect(() => {
        getOnePokemon();
    }, []);

    // const style = `thumb-container ${type}`;

    return (
        <>
            {pokemon?.name &&
                <div>
                    <h1 className="about-title">Pokemon Descriptions .</h1>
                    <div className="about-container">
                        <div className={pokemon?.types[0]?.type?.name} style={{ borderRadius: "10px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div className="number">
                                <small>#0{pokemon?.id}</small>
                            </div>
                            <img src={pokemon?.sprites?.other?.dream_world?.front_default} alt={pokemon.name} />
                            <div className="detail-wrapper" style={{ textAlign: "center" }}>
                                <h3>{pokemon?.name?.toUpperCase()}</h3>
                                <small>Type : {pokemon?.types[0]?.type?.name}</small>

                                <Description
                                    heightpok={pokemon?.height}
                                    weightpok={pokemon?.weight}
                                    pokstat1={pokemon?.stats[0]?.stat?.name}
                                    pokstat2={pokemon?.stats[1]?.stat?.name}
                                    pokstat3={pokemon?.stats[2]?.stat?.name}
                                    pokstat4={pokemon?.stats[3]?.stat?.name}
                                    pokstat5={pokemon?.stats[4]?.stat?.name}
                                    pokstat6={pokemon?.stats[5]?.stat?.name}
                                    posbs1={pokemon?.stats[0]?.base_stat}
                                    posbs2={pokemon?.stats[1]?.base_stat}
                                    posbs3={pokemon?.stats[2]?.base_stat}
                                    posbs4={pokemon?.stats[3]?.base_stat}
                                    posbs5={pokemon?.stats[4]?.base_stat}
                                    posbs6={pokemon?.stats[5]?.base_stat}
                                />

                            </div>

                        </div>
                        <Link
                        style={{ textDecoration: 'none', marginTop: "5px" }}
                        className="about-btn"
                        to="/"
                    >
                        Go Back
                    </Link>
                    </div>
                    
                </div>
            }
        </>
    );
};

export default About;