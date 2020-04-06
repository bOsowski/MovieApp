import React, { useEffect, useState } from "react";
import Credits from "../creditsCard";
import "./credits.css";
import { getMovieCredits } from "../../api/tmdb-api";

export default ({movie}) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(credits => {
      setCredits(credits);
    });
  }, [movie]);

  return <div className="row movies">{credits.cast ? credits.cast.map(c => {
    return <Credits key={c.cast_id} cast={c} />
  }) : ("Waiting for cast info")}</div>;
};