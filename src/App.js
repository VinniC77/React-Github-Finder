import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />

        <main className='contaier mx-auto px-3 pb-12'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfounf" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
  {/* Se algém digitar uma rota que não existe, usamos o /* */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;