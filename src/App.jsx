import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
        <Navbar/> {/* Componente de navegación */}
          <Routes>
            <Route path="/" element={<Home type="character" />} /> {/* Ruta para la página de inicio */}
            <Route path="/characters" element={<Home type="character" />} /> {/* Ruta para la lista de personajes */}
            <Route path="/locations" element={<Home type="location" />} /> {/* Ruta para la lista de ubicaciones */}
            <Route path="/episodes" element={<Home type="episode" />} /> {/* Ruta para la lista de episodios */}
            <Route path="/character/:id" element={<CharacterDetail />} /> {/* Ruta para los detalles de un personaje */}
          </Routes>
      </Router>
    </>
  );
}

export default App; // Exportación del componente App