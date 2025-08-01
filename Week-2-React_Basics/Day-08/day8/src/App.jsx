import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-yellow-100 text-center p-6">
      <Navbar />
      <h1 className="text-3xl font-bold mb-4 text-orange-800">Desi Router App 🧭</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
