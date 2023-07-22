import React from 'react';
import PropTypes from 'prop-types';
import './ArticleCard.css';

const ArticleCard = ({ article }) => {
  const { title, description, author, date } = article;

  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="article-author">{`Author: ${author}`}</p>
      <p className="article-date">{`Date: ${date}`}</p>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleCard;