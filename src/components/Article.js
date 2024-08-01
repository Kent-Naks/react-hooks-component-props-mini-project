// src/components/Article.js
import React from 'react';

const getReadTime = (minutes) => {
  if (minutes < 30) {
    const coffeeCups = Math.ceil(minutes / 5);
    return "☕️".repeat(coffeeCups) + ` ${minutes} min read`;
  } else {
    const bentoBoxes = Math.ceil(minutes / 10);
    return "🍱".repeat(bentoBoxes) + ` ${minutes} min read`;
  }
};

const Article = ({ title, date = "January 1, 1970", preview, minutes }) => (
  <article>
    <h3>{title}</h3>
    <small>{date}</small>
    <p>{preview}</p>
    <p>{minutes ? getReadTime(minutes) : null}</p>
  </article>
);

export default Article;
