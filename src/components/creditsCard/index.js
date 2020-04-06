import React from "react";
import { Link } from "react-router-dom";
import "./creditsCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Credits = ({ cast }) => {
  return (
    <div className="col-sm-1">
      <div className="card  bg-white">
        <Link to={`/casts/${cast.id}`}>
          <img
            className="card-img-tag center "
            title={`${cast.name} as ${cast.character}`}
            alt={cast.name}
            src={
              cast.profile_path
                ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                : "./film-poster-placeholder.png"
            }
          />
        </Link>
      </div>
    </div>
  );
};

export default Credits;