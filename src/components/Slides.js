import React, { useState } from "react";

const Slides = ({ slides }) => {
  const [index, setIndex] = useState(0);
  // console.log(index);

  const butRestart = () => {
    setIndex(0);
  };

  const butPrev = () => {
    setIndex((index) => index - 1);
  };

  const butNext = () => {
    setIndex((index) => index + 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          disabled={index === 0}
          data-testid="button-restart"
          className="small outlined"
          onClick={butRestart}
        >
          Restart
        </button>
        <button
          disabled={index === 0}
          data-testid="button-prev"
          className="small"
          onClick={butPrev}
        >
          Prev
        </button>
        <button
          disabled={index === slides.length - 1}
          data-testid="button-next"
          className="small"
          onClick={butNext}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[index].title}</h1>
        <p data-testid="text">
          {index >= 0 && index < slides.length && slides[index].title}
        </p>
      </div>
    </div>
  );
};

export default Slides;
