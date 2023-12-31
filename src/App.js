import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './component/ProjectModal';
import ProjectSummary from './pages/ProjectSummary';
import VisualExperimentation from './pages/VisualExperimentaion';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectSummary />} />
          <Route path="/visual-experimentation" element={<VisualExperimentation />} />
          {/* ... other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
