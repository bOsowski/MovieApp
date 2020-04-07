import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./videos.css";
import "../../globals/fontawesome";
import { getMovieVideos } from "../../api/tmdb-api";

const Videos = ({ movie }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMovieVideos(movie.id).then(videos => {
      setVideos(videos);
    });
  }, [movie]);

  return (
    <div class="video-div">
    {videos.results ? videos.results.filter(v =>  v.site == 'YouTube').map( video => {
   return <iframe
        width="550"
        height="315"
        src={`https://www.youtube.com/embed/${video.key}`}
        frameborder="0"
        allow="accelerometer;autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true">
     </iframe>
    }) : "Waiting for videos"}
    </div>
  );
};

export default Videos;