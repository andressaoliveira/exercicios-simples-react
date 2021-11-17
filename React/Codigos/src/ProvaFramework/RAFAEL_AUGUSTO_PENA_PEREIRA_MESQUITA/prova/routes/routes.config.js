import { PushpinOutlined, HomeOutlined, CarOutlined } from "@ant-design/icons";
import DestinyContainer from "../pages/destiny/destiny.container";
import FuelContainer from "../pages/fuel/fuel.container";
import HomeContainer from "../pages/home/home.container";

/**
 * @name configRoutes
 * @description
 * Constante de configuração responsável por gerir e retornar todas as informações necessárias para construir e manter o roteamento através do `react-router-dom`
 */
export const configRoutes = [
  {
    route: "/",
    title: "Início",
    icon: <HomeOutlined />,
    key: "1",
    exact: true,
    component: HomeContainer,
  },
  {
    route: "/destino",
    title: "Destino",
    icon: <PushpinOutlined />,
    key: "2",
    exact: false,
    component: DestinyContainer,
  },
  {
    route: "/combustivel",
    title: "Combustível",
    icon: <CarOutlined />,
    key: "3",
    exact: false,
    component: FuelContainer,
  },
];
