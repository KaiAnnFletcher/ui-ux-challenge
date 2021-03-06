import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import './App.css';
//import logo from './logo.svg';

function App() {
  return (
    <Router>
    <div>
    <Wrapper>
    <Route exact path="/" component={Search} />
    </Wrapper>
    </div>
    </Router>

  )
  }

  export default App;
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


