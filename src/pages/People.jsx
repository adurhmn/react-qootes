import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const People = () => {
  const people = [
    "Buddha",
    "Elon Musk",
    "Jeff Bezos",
    "Osho",
    "Socrates",
    "Cristiano Ronaldo",
  ];

  const changeConvention = (name) =>
    name
      .split(" ")
      .map((word) => word[0].toLowerCase() + word.slice(1))
      .join("-");

  return (
    <Fragment>
      <h1 className="heading">People</h1>

      {people.map((name) => (
        <Link
          key={name}
          to={`/react-qootes/people/${changeConvention(name)}`}
          className="people__item"
        >
          {name}
        </Link>
      ))}
    </Fragment>
  );
};

export default People;
