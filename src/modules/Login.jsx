import { Button, Col, Divider, Flex, Form, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Base from "../components/Base";

export default function Login() {
  const [form] = useForm();

  const login = () => {
    if (!form.getFieldValue("email") || !form.getFieldValue("password")) {
      message.warning(
        "Preencha corretamente o email e senha para efetuar o login",
        4
      );
    }

    if (form.getFieldValue("email") || form.getFieldValue("password")) {
      message.loading("Realizando login...", 0);
      message.destroy();
      // Criar lógica para realizar login
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
            <Title style={{ color: "#ffffff" }}>Login</Title>
            <Paragraph type="secondary" style={{ color: "#ffffffaa" }}>
              Bem-vindo(a) de Volta! Para começar, insira suas informações de
              acesso.
            </Paragraph>
          </Flex>

          <Form form={form} layout="vertical" onFinish={login}>
            <Row vertical="horizontal">
              <Col span={24}>
                <Form.Item
                  label={<Text style={{ color: "#ffffffee" }}>E-mail</Text>}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Preencha seu e-mail para realizar o login.",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Insira seu e-mail" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={<Text style={{ color: "#ffffffee" }}>Senha</Text>}
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Preencha sua senha para realizar o login.",
                    },
                  ]}
                >
                  <Input.Password size="large" placeholder="Insira sua senha" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Flex justify="end">
                  <Button type="link" style={{ padding: 0 }}>
                    Esqueci a senha
                  </Button>
                </Flex>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  size="large"
                  style={{ width: "100%" }}
                  onClick={() => form.submit()}
                >
                  Entrar
                </Button>
              </Col>
              <Divider
                style={{ color: "#ffffff66", borderBlockColor: "#ffffff11" }}
              >
                ou
              </Divider>
              <Col span={24}>
                <Flex justify="center">
                  <Paragraph style={{ color: "#ffffffaa" }}>
                    Ainda não tem conta? <Link>Registre-se</Link>
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
