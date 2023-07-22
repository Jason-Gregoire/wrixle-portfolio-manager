import React from 'react';
import PropTypes from 'prop-types';
import './InsightsCard.css';

const InsightsCard = ({ insight }) => {
  const { title, content, author, date } = insight;

  return (
    <div className="insights-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <p className="insights-author">{`Author: ${author}`}</p>
      <p className="insights-date">{`Date: ${date}`}</p>
    </div>
  );
};

InsightsCard.propTypes = {
  insight: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default InsightsCard;
