import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Greeting from './components/Greeting';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  );
}

export default App;
