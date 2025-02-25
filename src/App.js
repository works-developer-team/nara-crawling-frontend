import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CrawlProvider } from './context/CrawlContext';
import Dashboard from './components/Dashboard';
import InfoPage from './components/InfoPage';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <CrawlProvider>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
      </Router>
    </CrawlProvider>
  );
}

export default App;
