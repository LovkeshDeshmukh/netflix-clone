import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./requests";
import axios from "./axios";

const Banner = () => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginials);

      setmovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    // getData();
    fetchData();
  }, []);


  // const getData = () => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/trending/all/week?api_key=2feec7d65c6f2820b73zd9d23ef113900&language=en-US"
  //     ).then((res) => setmovies(res.data.results[Math.floor(Math.random()*res.data.results.length-1)]))
  // };

  console.log(movies);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  };

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center top",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {
              movies?.name || movies?.title
               || movies?.original_title
            }
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <p className="banner_description">
            {truncate(movies?.overview, 150)}
          </p>
        </div>
        <div className="banner_fadeBottom"></div>
      </header>
    </>
  );
};

export default Banner;
