// import logo from './logo.svg';
import Titulo from './Titulo';

import './App.css';

function App() {
  return (
    <div>
      
      <Titulo/>
      {/* <img src={logo} className="App-logo" alt="logo" />
      Si el archivo está en /public la ruta se tiene que escribir como si nosotros
      estuvieramos en /public también
      */}
      <img src="imagenes/imagengatito.jpg" alt="Gatito" />
    </div>
  );
}

export default App;
