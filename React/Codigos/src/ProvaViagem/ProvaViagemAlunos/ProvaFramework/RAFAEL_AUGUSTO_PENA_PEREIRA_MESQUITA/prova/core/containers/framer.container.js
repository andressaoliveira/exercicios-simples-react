import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { createElement, useState } from "react";
import { Typography, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

import "./framer.styles.scss";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

/**
 * @name Framer
 * @description
 * Componente pai da aplicação inteira, responsável por envolver todo o conteúdo da aplicação e gerir todo o app através do menu de redirecionamento que funciona através do component Link do `react-router-dom`
 *
 * @param configRoutes
 * Constante de configuração responsável por fornecer todas as informações necessárias para o roteamento da aplicação através do `react-router-dom`
 * @param children
 * Componente filho que será exibido na sessão de conteúdo do componente pai. Ele receberá o componente de rotas com todas as páginas da aplicação.
 *
 * @type
 * JSX.Element
 */
export default function Framer({ configRoutes, children }) {
  const [collapsed, setCollapsed] = useState(false);
  let location = useLocation();

  /**
   * @name toggle
   * @description
   * Responsável por abrir e fechar o menu lateral utilizando o state `collapsed`
   */
  const toggle = () => {
    setCollapsed((state) => !state);
  };

  /**
   * @name getDefaultKey
   * @description
   * Responsável por se certificar que a opção do menu estará selecionada corretamente de acordo com a rota acessada pelo usuário através do `hook useLocation` fornecido pela lib `react-router-dom`
   *
   * Através da rota atual recuperamos a key referente a opção correta do menu
   */
  const getDefaultKey = () => {
    const currentRoute =
      configRoutes.filter((r) => r.route === location.pathname)[0] ?? "1";
    return currentRoute.key;
  };

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Title className="logo" level={3}>
          {collapsed ? "RP" : "Viagens RP"}
        </Title>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[getDefaultKey()]}
        >
          {configRoutes.map(({ title, route, key, icon }) => (
            <Menu.Item key={key} icon={icon}>
              <Link to={route}>{title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: toggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
