import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import E1 from "./e1/Indice";
import E2 from "./e2/Indice";


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/ejercicio1">Ejercicio 1</Link>
          <Link to="/ejercicio2">Ejercicio 2</Link>
        </nav>
        <Routes>
          <Route path="/ejercicio1" element={<E1/>}/>
          <Route path="/ejercicio2" element={<E2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
