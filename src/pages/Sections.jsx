import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Sections = () => {
  const sections = [
    "Business",
    "Love",
    "Happiness",
    "Inspiration",
    "Self Confidence",
    "Life Insights",
  ];

  const changeConvention = (name) =>
    name
      .split(" ")
      .map((word) => word[0].toLowerCase() + word.slice(1))
      .join("-");

  return (
    <Fragment>
      <h1 className="heading">Sections</h1>

      {sections.map((name) => (
        <Link
          key={name}
          to={`/sections/${changeConvention(name)}`}
          className="sections__item"
        >
          {name}
        </Link>
      ))}
    </Fragment>
  );
};

export default Sections;
