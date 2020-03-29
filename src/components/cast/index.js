import React from "react";
import Cast from "../castCard/";
import "./cast.css";

const CastList = ({cast}) => {
  const castCards = cast.map(c => (
    <Cast key={c.cast_id} cast={c} />
  ));
  return <div className="row movies bg-info">{castCards}</div>;
};

export default CastList;