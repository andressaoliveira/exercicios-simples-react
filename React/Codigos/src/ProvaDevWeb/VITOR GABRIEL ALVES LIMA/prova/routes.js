import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "./components/home";
import destinos from "./components/destinos";
import combustivel from "./components/combustivel";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/destinos" exact component={destinos} />
        <Route path="/combustivel" exact component={combustivel} />
      </Switch>
    </BrowserRouter>
  );
}
