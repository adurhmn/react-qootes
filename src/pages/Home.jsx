import React, { Fragment, useEffect, useState } from "react";
import QuoteBox from "../components/QuoteBox";
import { influentialQuotes } from "../data/quote-feed";
import { Link } from "react-router-dom";

const Home = function () {
  const maxPick = 10;
  const [chosenQuotes, setChosenQuotes] = useState(
    Array.from({ length: maxPick }, () => ({ quote: "", author: "" }))
  );

  const pickRandom = function () {
    const totalQuotes = influentialQuotes.length;
    let randomPick = [];
    let pickedQuotes = chosenQuotes.map((quote) => ({ ...quote }));

    // to prevent infinite loop
    if (totalQuotes <= maxPick)
      randomPick = Array.from({ length: totalQuotes }, (_, i) => i);
    else {
      // picks distinct randoms
      while (true) {
        const currentPick = Math.round(Math.random() * (totalQuotes - 1));
        if (!randomPick.includes(currentPick)) randomPick.push(currentPick);
        if (randomPick.length === maxPick) break;
      }
    }

    // populating with the picked quotes
    randomPick.forEach((pick, i) => {
      pickedQuotes[i] = influentialQuotes[pick];
    });

    setChosenQuotes(pickedQuotes.map((quote) => ({ ...quote })));
  };

  useEffect(pickRandom, []);

  return (
    <Fragment>
      <section className="category">
        <Link to="/people" className="category__item">
          People
        </Link>
        <Link to="/sections" className="category__item">
          Sections
        </Link>
        <Link to="/special/influential-quotes" className="category__item">
          Influential Quotes
        </Link>
      </section>

      <h1 className="heading">Quote Feed</h1>

      <section className="quote-box-container">
        {chosenQuotes.map((q, i) => (
          <QuoteBox key={i} quote={q.quote} author={q.author} />
        ))}
      </section>
    </Fragment>
  );
};

export default Home;
