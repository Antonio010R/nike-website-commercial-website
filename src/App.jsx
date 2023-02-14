import React, { Fragment } from "react";
import {
  Cart,
  Footer,
  Hero,
  Highlights,
  NavBar,
  News,
  Sales,
} from "./components";
import {
  heroapi,
  popularsales,
  topratesales,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";
import HeartIcon from "./components/utils/HeartIcon";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Cart />
      <div className="flex flex-col gap-20">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <Highlights endpoint={highlight} reverse />
        <Sales endpoint={topratesales} />
        <Highlights endpoint={sneaker} />
        <News story={story} />
        <Footer endpoint={footerAPI} />
      </div>
    </Fragment>
  );
};

export default App;
