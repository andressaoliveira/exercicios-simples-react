import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Menu } from "./components/Menu";
import { Gas } from "./pages/Gas/Gas";
import { Home } from "./pages/Home/Home";
import { Paths } from "./pages/Paths/Paths";

const Prova = () => {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={Home} />
      <Route path="/paths" component={Paths} />
      <Route path="/gas" component={Gas} />
    </Router>
  );
};

export { Prova };
