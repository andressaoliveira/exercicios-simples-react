import { Card, Col, Row, Typography } from "antd";

const { Meta } = Card;
const { Title, Text } = Typography;

/**
 * @name DestinySection
 * @description
 * Componente responsável por renderizar o conteúdo referente ao destino passado como parâmetro através de iterações.
 *
 * @param destiny
 * Objeto responsável por retornar todas as informações sobre o atual destino mostrados
 *
 * @type
 * JSX.Element
 */
export default function DestinySection({ destiny }) {
  const { name, imagesPath, description, more } = destiny;

  return (
    <div className="text-center">
      <Title level={3}>{name}</Title>

      <div className="site-card-wrapper">
        <Row gutter={16}>
          {/**
           * @description
           * Através desta iteração renderizamos as imagens do destino atual
           */}
          {imagesPath.map((path) => (
            <Col key={path} span={8}>
              <Card
                hoverable
                style={{ width: 280, height: 280 }}
                cover={<img alt={name} src={path} />}
              >
                <Meta title={name} description={more} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Text type="secondary">{description}</Text>
    </div>
  );
}
