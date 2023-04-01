import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import "./HomeScreen.css";
import Row from "./Row";
import requests from "./requests";

const HomeScreen = () => {
  return (
    <>
      <div className="homescreen">
        <Navbar />
        <Banner />
        <Row title="fetchTrending" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movie" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentraries" fetchUrl={requests.fetchDocumentraries} />
      </div>
    </>
  );
};

export default HomeScreen;
