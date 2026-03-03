import Profile from "./Profile";
import Qualifications from "./Qualifications";
import "../index.css";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <div className="row">
        <Profile />
        <Qualifications />
      </div>
      <div>
      <Projects />
      </div>
    </div>
  );
}

export default App;
