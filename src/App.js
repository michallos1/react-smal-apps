import React from "react";
import Xo from './Component/Project_1/Xo'
import ToDoList from './Component/Project_2/ToDoList'
import Calculator from './Component/Project_3/Calculator'
import WeatherApp from './Component/Project_4/WeatherApp'
import Home from './Component/Home'
import './Component/Navigation/NavigationCss.css'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
// clear

export default function App() {
  return (
    <Router>

      <nav className='nav-bar'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/project-1">Project XO</Link></li>
            <li><Link to="/project-2">Project Todo</Link></li>
            <li><Link to="/project-3">Project Kalkulator</Link></li>
            <li><Link to="/project-4">Project Weather App</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project-1" element={<Xo />} />
        <Route path="project-2" element={<ToDoList />} />
        <Route path="project-3" element={<Calculator />} />
        <Route path="project-4" element={<WeatherApp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>
        <h1>Stopka strony</h1>
      </footer>
    </Router>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}
