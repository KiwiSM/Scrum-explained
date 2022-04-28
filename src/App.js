import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Start from './Pages/Start';
import AgileEstimation from "./Pages/AgileEstimation";
import Backlog from "./Pages/Backlog";
import Roles from "./Pages/Roles";      
import ScrumArtifacts from "./Pages/ScrumArtifacts";
import Sprint from "./Pages/Sprint";
import SprintPlanning from "./Pages/SprintPlanning";
import SprintRetrospective from "./Pages/SprintRetrospect";
import SprintReview from "./Pages/SprintReview";
import { useState } from 'react';

export default function App() {
  const [menu, setMenu] = useState(false);

  function toggleMenu () {
    setMenu(!menu);
  };

  return (
    <Router>
      <main>
        <div>
          <nav>
          <button onClick={toggleMenu}>Menu</button>
          <Link to="/"><button>Home</button></Link>
          </nav>
          {
            menu ?
            (
              <ul>
                <Link to="/backlog">Backlog</Link>
                <Link to="/roles">Roles</Link>
                <Link to="/agile-estimation">Agile Estimation</Link>
                <Link to="/sprint">Sprint</Link>
                <Link to="/sprint-planning">Sprint Planning</Link>
                <Link to="/scrum-artifacts">Scrum Artifacts</Link>
                <Link to="/sprint-review">Sprint Review</Link>
                <Link to="/sprint-retrospective">Sprint Retrospective</Link>
            </ul>
            ) : null
          }
        </div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/backlog" element={<Backlog />} />
          <Route path="/roles" element={<Roles />} />
          <Route path="/sprint" element={<Sprint />} />
          <Route path="sprint-planning" element={<SprintPlanning />} />
          <Route path="scrum-artifacts" element={<ScrumArtifacts />} />
          <Route path="sprint-review" element={<SprintReview />} />
          <Route path="sprint-retrospective" element={<SprintRetrospective />} />
          <Route path="agile-estimation" element={<AgileEstimation />} />
        </Routes>
      </main>
    </Router>
  );
}