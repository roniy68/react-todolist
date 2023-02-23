import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from 'routes/About';
import Home from 'routes/Home';
import Login from 'routes/Login';
import Profile from 'routes/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>

  );
}

export default App;
