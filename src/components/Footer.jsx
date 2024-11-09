import {
  InstagramOutlined,
  TwitchOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Divider, Flex, Row } from "antd";
import Link from "antd/es/typography/Link";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";

export default function Footer() {
  return (
    <Flex
      style={{
        width: "100vw",
        backgroundColor: "#000B1C",
        padding: "100px",
      }}
      vertical="vertical"
      gap={16}
    >
      <Row style={{ width: "100%" }}>
        <Col span={8}>
          <Flex vertical="vertical" gap={4}>
            <Title level={4} style={{ color: "#ffffff" }}>
              Menu
            </Title>
            <Link style={{ color: "#ffffff88" }}>Home</Link>
            <Link style={{ color: "#ffffff88" }}>Loja de jogos</Link>
            <Link style={{ color: "#ffffff88" }}>Suporte</Link>
            <Link style={{ color: "#ffffff88" }}>Contato</Link>
          </Flex>
        </Col>

        <Col span={8}>
          <Flex vertical="vertical" gap={4}>
            <Title level={4} style={{ color: "#ffffff" }}>
              Outros
            </Title>
            <Link style={{ color: "#ffffff88" }}>Nosso blog</Link>
            <Link style={{ color: "#ffffff88" }}>Documentação</Link>
            <Link style={{ color: "#ffffff88" }}>Política de privacidade</Link>
          </Flex>
        </Col>

        <Col span={8}>
          <Flex vertical="vertical" gap={4}>
            <Title level={4} style={{ color: "#ffffff" }}>
              Social
            </Title>
            <Flex gap={16}>
              <Avatar
                style={{ padding: "16px", backgroundColor: "#ffffff55" }}
                icon={<InstagramOutlined style={{ fontSize: "24px" }} />}
              />
              <Avatar
                style={{ padding: "16px", backgroundColor: "#ffffff55" }}
                icon={<YoutubeOutlined style={{ fontSize: "24px" }} />}
              />
              <Avatar
                style={{ padding: "16px", backgroundColor: "#ffffff55" }}
                icon={<TwitchOutlined style={{ fontSize: "24px" }} />}
              />
              <Avatar
                style={{ padding: "16px", backgroundColor: "#ffffff55" }}
                icon={<TwitterOutlined style={{ fontSize: "24px" }} />}
              />
            </Flex>
          </Flex>
        </Col>
      </Row>

      <Divider style={{ borderColor: "#ffffff11" }} />
      <Flex
        justify="center"
        align="center"
        style={{ textAlign: "center", width: "100%" }}
      >
        <Paragraph style={{ color: "#ffffffee" }}>
          © 2024 Iara Games Company
        </Paragraph>
      </Flex>
    </Flex>
  );
}
