import Profile from "./Profile";
import Qualifications from "./Qualifications";
import "../index.css";
import Projects from "./Projects";
import Social from "./Social";

function App() {
  return (
    <div>
      <div className="row">
        <Profile />
        <Qualifications />
      </div>

      <div>
        <hr />
        <Projects />
        <hr />
      </div>

      {
        <div>
          <Social />
        </div>
      }
    </div>
  );
}

export default App;
