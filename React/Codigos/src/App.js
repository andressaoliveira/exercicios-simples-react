import { Route, BrowserRouter } from "react-router-dom";
import Lista01 from './Lista01/Lista01';
import Lista02 from './Lista02/Lista02';
import Menu from './Base/Menu';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Lista01} />
        <Route path="/Lista01" component={Lista01} />
        <Route path="/Lista02" component={Lista02} />
      </BrowserRouter>
    </div>
  );
}

export default App;
