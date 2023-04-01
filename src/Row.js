import axios from "./axios";
import React, { useEffect, useState } from "react";

const Row = ({ title, fetchUrl, largerow = false }) => {
  const [movies, setmovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters"></div>
      {movies.map((e) => (
        <img
          className={`row_poster ${largerow && "row_posterLarge"}`}
          key={e.id}
          src={`${base_url}${largerow ? e.poster_path : e.backdrop_path}`}
          alt={e.name}
        />
      ))}
    </div>
  );
};

export default Row;
