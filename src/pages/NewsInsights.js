import React from 'react';
import ArticleCard from '../components/ArticleCard';
import InsightsCard from '../components/InsightsCard';
import './NewsInsights.css';

const NewsInsights = () => {
  // Fetch news articles and insights data from API or other source
  const newsArticles = [...]; // Array of news article objects
  const insightsData = [...]; // Array of insights objects

  return (
    <div className="container">
      <h1>News and Insights</h1>
      <div className="article-section">
        <h2>Latest News</h2>
        <div className="article-list">
          {newsArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
      <div className="insights-section">
        <h2>Market Insights</h2>
        <div className="insights-list">
          {insightsData.map((insight) => (
            <InsightsCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsInsights;
