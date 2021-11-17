import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unSelectedColor: null,
      selectedColor: "aqua",
    };
  }

  onClick(item) {
    switch (item) {
      case 1:
        this.setState({
          className1: "selected",
          className2: "item",
          className3: "item",
        });
      case 2:
        this.setState({
          className1: "item",
          className2: "selected",
          className3: "item",
        });
      case 3:
        this.setState({
          className1: "item",
          className2: "item",
          className3: "selected",
        });
      default:
        this.setState({
          className1: "selected",
          className2: "item",
          className3: "item",
        });
    }
  }
  render() {
    return (
      <div className="menu">
        <Link
          style={{ backgroundColor: this.state.color }}
          className="item"
          to="/"
        >
          Página inicial
        </Link>
        <Link
          style={{ backgroundColor: this.state.color }}
          className="item"
          to="/Destinos"
        >
          Destinos
        </Link>
        <Link
          style={{ backgroundColor: this.state.color }}
          className="item"
          to="/Combustivel"
        >
          Combustivel
        </Link>
      </div>
    );
  }
}
