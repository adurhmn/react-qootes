import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import quoteFeed from "../data/quote-feed";
import QuoteBox from "../components/QuoteBox";
import NavBox from "../components/NavBox";

const categories = ["people", "sections", "special"];

const changeConvention = (name) =>
  name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const QuoteFeed = () => {
  const { category, subCategory } = useParams();

  if (!categories.includes(category)) return null;
  if (quoteFeed[subCategory] === undefined) return null;

  const quotes = quoteFeed[subCategory];

  return (
    <Fragment>
      <NavBox totalQuotes={quotes.length} />
      <h1 className="heading">{changeConvention(subCategory)}</h1>
      <section className="quote-box-container">
        {quotes.map((q, i) => {
          return (
            <QuoteBox
              key={i}
              quote={q.quote}
              author={q.author}
              isNumbered={true}
              serialNumber={i + 1}
            />
          );
        })}
      </section>
    </Fragment>
  );
};

export default QuoteFeed;
