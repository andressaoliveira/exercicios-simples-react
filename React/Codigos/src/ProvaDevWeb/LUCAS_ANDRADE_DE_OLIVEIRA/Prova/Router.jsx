import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Destinos from './components/Destinos';
import Combustivel from './components/Combustivel';


function Router() {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} exact />
            <Route path={'/Destinos'} element={<Destinos />} />
            <Route path={'/Combustivel'} element={<Combustivel />} />
        </Routes>
    );
}

export default Router;
