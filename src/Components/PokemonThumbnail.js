import React, { useState } from "react";
import { Link } from "react-router-dom";
import Description from "./Description";

const PokemonThumbnail = ({
  id,
  name,
  image,
  type,
}) => {
  const style = `thumb-container ${type}`;
  const [show, setShow] = useState(false);
  return (
    <div className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name?.toUpperCase()}</h3>
        <small>Type : {type}</small>
        <Link
          style={{ textDecoration: 'none', marginTop: "5px" }}
          className="pokeinfo"
          to={`/description/${name}`}
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

export default PokemonThumbnail;