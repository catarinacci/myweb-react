import "./App.css"

import React from "react";
import Texto from "./components/texto";
import Contador from "./components/contador";
import ListaNombres from "./components/listaNombres";
import Pokemones from "./components/pokemones";

const App = () => {
  return (
    <div className="App">
      <p>Componente App padre</p>
      <Texto nombre="gabriel" apellido="catarinacci" edad={39} />
      <Texto nombre="angel" apellido="rodriguez" edad={40} />
      <Contador/>
      <ListaNombres/>
      <Pokemones/>
    </div>
  )
};

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
