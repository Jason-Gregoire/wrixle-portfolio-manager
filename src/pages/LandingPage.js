import './LandingPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="landing-page-header">
        <h1>Welcome to Wrixle</h1>
        <p className="landing-page-description">
          Empowering you to manage your portfolio with confidence
        </p>
      </header>
      <section className="cta-section">
        <h2>Start Managing Your Portfolio Today</h2>
        <p className="cta-description">
          Join Wrixle and take control of your investments with our powerful portfolio management tools.
        </p>
        <Link to="/dashboard" className="cta-button">Get Started</Link>
      </section>
      <section className="features-section">
        <h2>Key Features of Wrixle</h2>
        <ul className="features-list">
          <li>Portfolio and Asset Risk Analyzer</li>
          <li>Portfolio Performance Metrics and Comparisons</li>
          <li>Portfolio Optimization Tools</li>
          <li>Automated Staking and Swapping</li>
          <li>User Alerts and Trade Triggers</li>
          <li>Asset and Pool Scanner</li>
        </ul>
      </section>
    </div>
  );
};

export default LandingPage;
