import { Button, Col, Result, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Base from "../components/Base";

export default function RegisterSuccess() {
  return (
    <Base>
      <Row>
        <Col
          span={12}
          style={{ padding: "40px", maxWidth: "1000px", width: "1000px" }}
        >
          <Result
            status="success"
            title={
              <Title level={3} style={{ color: "#ffffff" }}>
                Conta criada com sucesso!
              </Title>
            }
            subTitle={
              <Paragraph style={{ color: "#ffffffaa" }}>
                Faça Login e tenha acesso completo ao Iara Games!
              </Paragraph>
            }
            extra={[
              <Button type="primary" key="console" style={{ width: "100%" }}>
                Ir para tela de login
              </Button>,
            ]}
          />
        </Col>
        <Col span={12} />
      </Row>
    </Base>
  );
}
