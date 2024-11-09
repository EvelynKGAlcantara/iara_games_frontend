import { Button, Col, Flex, Form, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";

import Base from "../components/Base";

export default function CreateNewPassword() {
  const [form] = useForm();

  const changePassword = () => {
    if (
      !form.getFieldValue("newpassword") ||
      !form.getFieldValue("confirmpassword")
    ) {
      message.warning("Preencha os campos para alterar sua senha", 4);
    }

    if (
      form.getFieldValue("newpassword") ||
      form.getFieldValue("confirmpassword")
    ) {
      message.loading("Realizando mudança de senha...", 0);
      message.destroy();
      // Criar lógica para mudanca de senha
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
            <Title style={{ color: "#ffffff" }}>Criar nova senha</Title>
            <Paragraph type="secondary" style={{ color: "#ffffffaa" }}>
              Insira sua Nova Senha para ter acesso a plataforma
            </Paragraph>
          </Flex>

          <Form form={form} layout="vertical" onFinish={changePassword}>
            <Row vertical="horizontal">
              <Col span={24}>
                <Form.Item
                  label={<Text style={{ color: "#ffffffee" }}>Nova senha</Text>}
                  name="newpassword"
                  rules={[
                    {
                      required: true,
                      message: "Preencha com sua nova senha",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Insira sua nova senha"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={
                    <Text style={{ color: "#ffffffee" }}>
                      Confirme sua nova senha
                    </Text>
                  }
                  name="confirmpassword"
                  rules={[
                    {
                      required: true,
                      message: "Confirme sua nova senha",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Insira a confirmação da sua nova senha"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Button
                  type="primary"
                  size="large"
                  style={{ width: "100%" }}
                  onClick={() => form.submit()}
                >
                  Enviar
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={12} />
      </Row>
    </Base>
  );
}
