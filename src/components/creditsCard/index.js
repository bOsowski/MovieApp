import React from "react";
import { Link } from "react-router-dom";
import "./creditsCard.css";
import "../../globals/fontawesome";

const Credits = ({ cast }) => {
  return (
    <div className="col-sm-1">
      <div className="card  bg-white">
        <Link to={`/casts/${cast.id}`}>
          <img
            className="card-img-tag center "
            alt={cast.name}
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                : "/profile.png"
            }
          />
          <p>{`${cast.name} as ${cast.character}`}</p>
        </Link>
      </div>
    </div>
  );
};

export default Credits;