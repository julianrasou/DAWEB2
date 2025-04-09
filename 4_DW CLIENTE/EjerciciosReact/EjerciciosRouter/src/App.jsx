import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import E1 from "./e1/Indice";
import E2 from "./e2/Indice";
import E3 from "./e3/Indice";
import E4 from "./e4/Indice";
import E5 from "./e5/Indice";
import E7 from "./e7/Indice";


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/ejercicio1">Ejercicio 1</Link>
          <Link to="/ejercicio2">Ejercicio 2</Link>
          <Link to="/ejercicio3">Ejercicio 3</Link>
          <Link to="/ejercicio4">Ejercicio 4</Link>
          <Link to="/ejercicio5">Ejercicio 5</Link>
          <Link to="/ejercicio7">Ejercicio 7</Link>
        </nav>
        <Routes>
          <Route path="/ejercicio1" element={<E1/>}/>
          <Route path="/ejercicio2" element={<E2/>}/>
          <Route path="/ejercicio3" element={<E3/>}/>
          <Route path="/ejercicio4" element={<E4/>}/>
          <Route path="/ejercicio5" element={<E5/>}/>
          <Route path="/ejercicio7" element={<E7/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
