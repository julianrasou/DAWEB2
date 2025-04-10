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
    // Ejercicio 1: Crear un menú de navegación utilizando React Router.
    // Ejercicio 2: Crear una página de inicio y una página de contacto.
    // Ejercicio 3: Crear una página de productos y una página de detalles del producto.
    // Ejercicio 4: Crear una página de carrito de compras.
    // Ejercicio 5: Crear una página de perfil de usuario.
    // Ejercicio 7: Crear una página de administración.
    // Ejercicio 8: Crear una página de inicio de sesión.
      <BrowserRouter>
        <nav>
          <Link to="/ejercicio1">Ejercicio 1</Link>
          <Link to="/ejercicio2">Ejercicio 2</Link>
          <Link to="/ejercicio3">Ejercicio 3</Link>
          <Link to="/ejercicio4">Ejercicio 4</Link>
          <Link to="/ejercicio5">Ejercicio 5</Link>
          <Link to="/ejercicio7">Ejercicio 7</Link>
          // ejercicio 8: Crear una página de inicio de sesión. 
          <Link to="/ejercicio8">Ejercicio 8</Link>
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
