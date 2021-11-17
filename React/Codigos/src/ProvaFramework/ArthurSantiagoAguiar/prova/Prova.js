import { BrowserRouter, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Destiny from './pages/Destiny/Destiny';
import Fuel from './pages/Fuel/Fuel';
import Home from './pages/Home/Home';
import './Prova.css'

const Prova = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <Sidebar />

        <div className="container">
          <Route path={'/'} exact component={Home}/>
          <Route path={'/destiny'} exact component={Destiny}/>
          <Route path={'/fuel'} exact component={Fuel}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Prova;
