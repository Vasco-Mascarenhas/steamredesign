import React from "react";
import "./home.css";
import { Featured, FreeGames, Genres, Trending } from "../../../../components";

const Home = () => {
  return (
    <div id="home">
      <section className="home-hero"></section>
      <div className="home-inner inner-container">
        <section className="home-featured">
          <Featured />
        </section>
        <section className="steam_deck">
          <img src="/assets/home/steamdeck_banner.gif" alt="steam deck" />
        </section>
        <section className="home-trending">
          <h2>Browse Steam</h2>
          <Genres />
        </section>
        <section className="steam_deck">
          <img src="/assets/home/steamawards_banner.jpg" alt="steam awards" />
        </section>
        <section className="home-free">
          <h2>Free Games</h2>
          <FreeGames />
        </section>
        <section className="home-trending">
          <h2>New & Trending</h2>
          <Trending />
        </section>
      </div>
    </div>
  );
};

export default Home;
