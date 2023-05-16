import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Events from './layouts/Events';
import Projects from './layouts/Projects';
import Clients from './layouts/Clients';
import Employees from './layouts/Employees';
import LandingPage from './layouts/LandingPage'

function App() {

  return (
    <Routes>
      {/* <Route path="/home" element={<LandingPage />}></Route> */}
      <Route path="/" element={<Dashboard />} >
        <Route path="/employees" element={<Employees />}/>
        <Route path="/events" element={<Events />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/clients" element={<Clients />}/>
      </Route>
    </Routes>
  );
}

export default App;
