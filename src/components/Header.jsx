import { Button, Flex, Image } from "antd";
import Link from "antd/es/typography/Link";

import logo from "../assets/logo.png";

export default function Header() {
  return (
    <Flex
      style={{
        backgroundColor: "#000",
        width: "100vw",
        height: "80px",
        padding: "12px 40px",
      }}
      align="center"
      justify="space-between"
    >
      <Image src={logo} preview={false} width={50} />

      <Flex gap={32}>
        <Link style={{ color: "#ffffff55" }}>Home</Link>
        <Link style={{ color: "#ffffff55" }}>Loja de Jogos</Link>
        <Link style={{ color: "#ffffff55" }}>Suporte</Link>
        <Link style={{ color: "#ffffff55" }}>Contato</Link>
      </Flex>

      <Flex gap={8}>
        <Button type="primary">Registre-se</Button>
        <Button>Login</Button>
      </Flex>
    </Flex>
  );
}
