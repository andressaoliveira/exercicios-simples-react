import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Lista01 from './Lista01/Lista01';
import Lista02 from './Lista02/Lista02';
import Prova01 from './Prova01/Prova01';
import Menu from './Base/Menu'

const App = () => {
  return (
    <div className="App">
      <Prova01 />
      {/* <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Lista01} />
        <Route path="/Lista01" component={Lista01} />
        <Route path="/Lista02" component={Lista02} />
        <Route path="/Prova01" component={Prova01} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
