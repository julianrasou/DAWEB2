import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/e1">Ejercicio 1</Link>
          <Link to="/e2">Ejercicio 2</Link>
        </nav>
        <Routes>
          <Route path="/e1" element={<e1/>}/>
          <Route path="/e2" element={<e2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
