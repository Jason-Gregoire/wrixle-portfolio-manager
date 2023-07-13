// sets up the routing and structure of your application by defining the routes and rendering the appropriate components based on the URL
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PortfolioDashboard from './pages/PortfolioDashboard';
import AssetExplorer from './pages/AssetExplorer';
import TradingPlatform from './pages/TradingPlatform';
import NewsInsights from './pages/NewsInsights';
import AccountSettings from './pages/AccountSettings';
import SupportHelpCenter from './pages/SupportHelpCenter';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={PortfolioDashboard} />
        <Route path="/assets" component={AssetExplorer} />
        <Route path="/trading" component={TradingPlatform} />
        <Route path="/news" component={NewsInsights} />
        <Route path="/account" component={AccountSettings} />
        <Route path="/support" component={SupportHelpCenter} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
