import { Button, Col, Flex, Form, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Base from "../components/Base";

export default function ValidateCode() {
  const [form] = useForm();

  const validateCode = () => {
    if (!form.getFieldValue("code")) {
      message.warning("Preencha com o código enviado para o seu e-mail.", 4);
    }

    if (form.getFieldValue("email")) {
      message.loading("Validando código...", 0);
      message.destroy();
      // criar lógica para validar código
    }
  };

  return (
    <Base>
      <Row>
        <Col
          span={12}
          style={{ padding: "40px", maxWidth: "910px", width: "910px" }}
        >
          <Flex vertical="horizontal">
            <Title style={{ color: "#ffffff" }}>Código de verificação</Title>
            <Paragraph type="secondary" style={{ color: "#ffffffaa" }}>
              Insira o código de autenticação enviado no seu e-mail
            </Paragraph>
          </Flex>

          <Form form={form} layout="vertical" onFinish={validateCode}>
            <Row vertical="horizontal">
              <Col span={24}>
                <Flex justify="center">
                  <Form.Item
                    name="code"
                    rules={[
                      {
                        required: true,
                        message:
                          "Preencha com o código enviado para o seu e-mail.",
                      },
                    ]}
                  >
                    <Input.OTP
                      size="large"
                      length={8}
                      formatter={(str) => str.toUpperCase()}
                    />
                  </Form.Item>
                </Flex>
              </Col>
              <Col span={24} style={{ marginBottom: "12px" }}>
                <Button
                  type="primary"
                  size="large"
                  style={{ width: "100%" }}
                  onClick={() => form.submit()}
                >
                  Enviar
                </Button>
              </Col>
              <Col span={24}>
                <Flex justify="end">
                  <Paragraph style={{ color: "#ffffffaa" }}>
                    Ainda não recebeu? <Link>Reenviar código</Link>
                  </Paragraph>
                </Flex>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={12} />
      </Row>
    </Base>
  );
}
