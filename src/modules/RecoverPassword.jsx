import { Button, Col, Flex, Form, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

import Base from "../components/Base";

export default function RecoverPassword() {
  const [form] = useForm();

  const recoverPassword = () => {
    if (!form.getFieldValue("email")) {
      message.warning(
        "Preencha corretamente o email para recuperar sua senha.",
        4
      );
    }

    if (form.getFieldValue("email")) {
      message.loading(
        "Solicitando alteração de senha para o e-mail informado...",
        0
      );
      message.destroy();
      // criar lógica para solicitar mudanca de senha
    }
  };

  return (
    <Base>
      <Row>
        <Col
          span={12}
          style={{ padding: "40px", maxWidth: "900px", width: "900px" }}
        >
          <Flex vertical="horizontal">
            <Title style={{ color: "#ffffff" }}>Recuperar senha</Title>
            <Paragraph type="secondary" style={{ color: "#ffffffaa" }}>
              Insira seu e-mail abaixo e te enviaremos um código de verificação
            </Paragraph>
          </Flex>

          <Form form={form} layout="vertical" onFinish={recoverPassword}>
            <Row vertical="horizontal">
              <Col span={24}>
                <Form.Item
                  label={<Text style={{ color: "#ffffffee" }}>E-mail</Text>}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Preencha seu e-mail para recuperar sua senha.",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Insira seu e-mail" />
                </Form.Item>
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
                  <Paragraph style={{ color: "#ffffffee" }}>
                    Lembrou sua senha? <Link>Faça login</Link>
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
