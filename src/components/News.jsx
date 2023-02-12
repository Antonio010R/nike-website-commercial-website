import React from "react";
import Title from "./utils/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "@splidejs/splide/css";
import NewsItem from "./NewsItem";

const News = ({ story }) => {
  const { title, news } = story;
  const options = {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "1.5rem",
    focus: "center",
    easing: "ease",
    drag: "free",
    pagination:false,
    keyboard: "global",
    breakpoints: {
      400: { perPage: 1 },
      550: { perPage: 1.2 },
      700: { perPage: 1.6 },
      850: { perPage: 2 },
      950: { perPage: 2.4 },
      1050: { perPage: 3 },
      1150: { perPage: 3.6 },
    },
  };
  return (
    <div className="nike-container mb-11">
      <Title title={title} />
      <div>
        <Splide className="mt-8" options={options}>
          {news.map((item, i) => (
            <NewsItem key={i} item={item} />
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default News;
