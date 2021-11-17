import './App.css';
// import { Route, BrowserRouter } from "react-router-dom";
// import Lista01 from './Lista01/Lista01';
// import Lista02 from './Lista02/Lista02';
// import Menu from './Base/Menu'
// import ProvaViagem from './ProvaViagem/ProvaViagem';
import ProvaHarryPotter from './ProvaHarryPotter/ProvaHarryPotter';

const App = () => {
  return (
    <div className="App">
      <ProvaHarryPotter />
      {/* <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Lista01} />
        <Route path="/Lista01" component={Lista01} />
        <Route path="/Lista02" component={Lista02} />
        <Route path="/ProvaViagem" component={ProvaViagem} />
        <Route path="/ProvaHarryPotter" component={ProvaHarryPotter} />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
