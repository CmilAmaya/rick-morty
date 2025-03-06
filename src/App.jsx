// Importaciones para la navegación y las notificaciones
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// Importaciones de las páginas
import Home from './pages/Home';
import CharacterDetail from './pages/CharacterDetail';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    {/* Componente Toaster para mostrar notificaciones */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #835bfc'
          },
          success: {
            iconTheme: {
              primary: '#835bfc',
              secondary: '#fff',
            },
          }
        }}
      />
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home type="character" />} />
            <Route path="/characters" element={<Home type="character" />} />
            <Route path="/locations" element={<Home type="location" />} />
            <Route path="/episodes" element={<Home type="episode" />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;