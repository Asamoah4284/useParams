import * as React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const Employee = () => {
  const { name } = useParams();

  return (
    <div className="display">
      <h3>Employee: {name}</h3>
    </div>
  );
};

const Ids = () => {
  const { id } = useParams();

  return (
    <div className="box">
      <h3>Ids : {id}</h3>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <h2>Customer</h2>
      <ul>
        <li>
          <Link to="/ram">Ram</Link>
        </li>
        <li>
          <Link to="/rakshman">Lakshman</Link>
        </li>
        <li>
          <Link to="/bheem">Bheem</Link>
        </li>
      </ul>
      <h2>Ids</h2>
      <ul>
        <li>
          <Link to="/Idss/1">1</Link>
        </li>
        <li>
          <Link to="/Idss/2">2</Link>
        </li>
        <li>
          <Link to="/Idss/3">3</Link>
        </li>
        <li>
          <Link to="/Idss/4">4</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route path="/:name" element={<Employee />} />
        <Route path="/Idss/:id" element={<Ids />} />
      </Routes>
    </Router>
  );
}
