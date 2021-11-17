import './Views/app.css'
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './Components/Layout/menu';
import Content from "./Components/Layout/content";



const App = (props) => (
  <div className="App">
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
);

export default App;

/*
DEPENDECIAS UTILIZADAS:
"@testing-library/jest-dom": "^5.15.0",
"@testing-library/react": "^11.2.7",
"@testing-library/user-event": "^12.8.3",
"bootstrap": "^5.1.3",
"react": "^17.0.2",
"react-bootstrap": "^2.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^5.3.0",
"react-scripts": "4.0.3",
"react-select": "^5.2.1",
"web-vitals": "^1.1.2"*/