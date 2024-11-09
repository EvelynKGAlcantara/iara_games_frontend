import { Button, Col, Divider, Flex, Form, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import Base from "../components/Base";

export default function Register() {
  const [form] = useForm();

  const register = () => {
    if (
      !form.getFieldValue("email") ||
      !form.getFieldValue("password") ||
      !form.getFieldValue("confirmpassword")
    ) {
      message.warning(
        "Preencha corretamente o email e senha para efetuar o cadastro",
        4
      );
    }

    if (
      form.getFieldValue("email") ||
      form.getFieldValue("password") ||
      form.getFieldValue("confirmpassword")
    ) {
      message.loading("Criando cadastro...", 0);
      message.destroy();
      // Criar lógica para realizar registro
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
            <Title style={{ color: "#ffffff" }}>Cadastro</Title>
            <Paragraph type="secondary" style={{ color: "#ffffffaa" }}>
              Crie sua conta e tenha acesso a nossa plataforma
            </Paragraph>
          </Flex>

          <Form form={form} layout="vertical" onFinish={register}>
            <Row vertical="horizontal">
              <Col span={24}>
                <Form.Item
                  label={<Text style={{ color: "#ffffffee" }}>E-mail</Text>}
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Preencha seu e-mail para realizar o cadastro.",
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
                      message: "Preencha sua senha para realizar o cadastro.",
                    },
                  ]}
                >
                  <Input.Password size="large" placeholder="Insira sua senha" />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={
                    <Text style={{ color: "#ffffffee" }}>Confirmar senha</Text>
                  }
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Confirme sua senha para realizar o cadastro.",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Confirme sua senha"
                  />
                </Form.Item>
              </Col>
              <Col span={24} style={{ marginBottom: "12px" }}>
                <Button
                  type="primary"
                  size="large"
                  style={{ width: "100%" }}
                  onClick={() => form.submit()}
                >
                  Criar conta
                </Button>
              </Col>
              <Col span={24}>
                <Flex justify="end">
                  <Paragraph style={{ color: "#ffffffaa" }}>
                    Já possui cadastro? <Link>Fazer login</Link>
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
