import { Button, Card, Col, Flex, Image, Rate, Row } from "antd";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

import hero from "../assets/1.svg";

import controller from "../assets/controller.svg";
import check from "../assets/check.svg";
import xbox from "../assets/xbox.svg";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import g5 from "../assets/g5.png";
import g6 from "../assets/g6.png";

import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

import cs1 from "../assets/cs1.png";
import cs2 from "../assets/cs2.png";
import cs3 from "../assets/cs3.png";
import cs4 from "../assets/cs4.png";
import cs5 from "../assets/cs5.png";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

export default function Home() {
  return (
    <div>
      <Header />

      <Flex
        justify="center"
        align="center"
        vertical="vertical"
        style={{ width: "100vw", padding: "0px 100px" }}
        gap={40}
      >
        <Flex
          justify="center"
          align="center"
          style={{
            backgroundColor: "#010813",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Row
            style={{
              padding: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Col span={14}>
              <Title style={{ color: "#ffffff" }}>
                A Casa dos Games Brasileiros
              </Title>
              <Paragraph style={{ color: "#ffffffaa" }}>
                Maior plataforma de games do Brasil.
              </Paragraph>
              <Button size="large" type="primary">
                Explorar Jogos
              </Button>
            </Col>
            <Col span={10}>
              <Image preview={false} src={hero} width={250} />
            </Col>
          </Row>
        </Flex>

        <Flex
          justify="center"
          align="center"
          vertical="vertical"
          style={{ padding: "60px" }}
        >
          <Flex
            justify="center"
            vertical="vertical"
            style={{ textAlign: "center" }}
          >
            <Title>Porque Iara Games?</Title>
            <Paragraph>Somos parceiros de todos os consoles</Paragraph>
          </Flex>
          <Row>
            <Col
              span={8}
              style={{
                padding: "24px",
                textAlign: "center",
                display: "flex",
                gap: "16px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={controller} preview={false} width={100} />
              <Paragraph style={{ width: "180px" }}>
                + de 13000 jogos disponíveis
              </Paragraph>
            </Col>
            <Col
              span={8}
              style={{
                padding: "24px",
                textAlign: "center",
                display: "flex",
                gap: "16px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={check} preview={false} width={100} />
              <Paragraph style={{ width: "180px" }}>
                Confiável e avaliado por todos os nossos clientes
              </Paragraph>
            </Col>
            <Col
              span={8}
              style={{
                padding: "24px",
                textAlign: "center",
                display: "flex",
                gap: "16px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image src={xbox} preview={false} width={100} />
              <Paragraph style={{ width: "180px" }}>
                Disponível para todos os consoles
              </Paragraph>
            </Col>
          </Row>
        </Flex>

        <Row gutter={[0, 40]} style={{ width: "100%" }}>
          <Col span={24}>
            <Flex justify="space-between" style={{ width: "100%" }}>
              <Title level={3}>Gêneros</Title>
              <Button type="link">Ver todos</Button>
            </Flex>
            <Flex justify="space-between" gap={8}>
              <Image preview={false} src={g1} />
              <Image preview={false} src={g2} />
              <Image preview={false} src={g3} />
              <Image preview={false} src={g4} />
              <Image preview={false} src={g5} />
              <Image preview={false} src={g6} />
            </Flex>
          </Col>

          <Col span={24}>
            <Flex justify="space-between" style={{ width: "100%" }}>
              <Title level={3}>Lançamentos</Title>
              <Button type="link">Ver todos</Button>
            </Flex>
            <Flex justify="space-between" gap={8}>
              <Card hoverable style={{ width: 260 }} size="small">
                <Image src={l1} preview={false} />
                <Card.Meta
                  title="Minecraft"
                  style={{ padding: "8px" }}
                  description={
                    <Flex gap={16} justify="space-between">
                      <Button type="link" style={{ padding: 0 }}>
                        R$ 100,00
                      </Button>
                      <Flex gap={0} align="center" justify="center">
                        <Text
                          type="danger"
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          90%
                        </Text>
                        <Text
                          type="secondary"
                          delete
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          R$ 130,00
                        </Text>
                      </Flex>
                    </Flex>
                  }
                />
              </Card>

              <Card hoverable style={{ width: 260 }} size="small">
                <Image src={l2} preview={false} />
                <Card.Meta
                  title="Asphalt 9: Legends"
                  style={{ padding: "8px" }}
                  description={
                    <Flex gap={16} justify="space-between">
                      <Button type="link" style={{ padding: 0 }}>
                        R$ 100,00
                      </Button>
                      <Flex gap={0} align="center" justify="center">
                        <Text
                          type="danger"
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          90%
                        </Text>
                        <Text
                          type="secondary"
                          delete
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          R$ 130,00
                        </Text>
                      </Flex>
                    </Flex>
                  }
                />
              </Card>

              <Card hoverable style={{ width: 260 }} size="small">
                <Image src={l3} preview={false} />
                <Card.Meta
                  title="The Witcher 3"
                  style={{ padding: "8px" }}
                  description={
                    <Flex gap={16} justify="space-between">
                      <Button type="link" style={{ padding: 0 }}>
                        R$ 100,00
                      </Button>
                      <Flex gap={0} align="center" justify="center">
                        <Text
                          type="danger"
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          90%
                        </Text>
                        <Text
                          type="secondary"
                          delete
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          R$ 130,00
                        </Text>
                      </Flex>
                    </Flex>
                  }
                />
              </Card>
            </Flex>
          </Col>

          <Col span={24}>
            <Flex justify="space-between" style={{ width: "100%" }}>
              <Title level={3}>Populares</Title>
              <Button type="link">Ver todos</Button>
            </Flex>
            <Flex justify="space-between" gap={8}>
              <Card hoverable style={{ width: 260 }} size="small">
                <Image src={p1} preview={false} />
                <Card.Meta
                  title="GTA IV"
                  style={{ padding: "8px" }}
                  description={
                    <Flex gap={16} justify="space-between">
                      <Button type="link" style={{ padding: 0 }}>
                        R$ 100,00
                      </Button>
                      <Flex gap={0} align="center" justify="center">
                        <Text
                          type="danger"
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          90%
                        </Text>
                        <Text
                          type="secondary"
                          delete
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          R$ 130,00
                        </Text>
                      </Flex>
                    </Flex>
                  }
                />
              </Card>

              <Card hoverable style={{ width: 260 }} size="small">
                <Image src={p2} preview={false} />
                <Card.Meta
                  title="ROBLOX"
                  style={{ padding: "8px" }}
                  description={
                    <Flex gap={16} justify="space-between">
                      <Button type="link" style={{ padding: 0 }}>
                        R$ 100,00
                      </Button>
                      <Flex gap={0} align="center" justify="center">
                        <Text
                          type="danger"
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          90%
                        </Text>
                        <Text
                          type="secondary"
                          delete
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          R$ 130,00
                        </Text>
                      </Flex>
                    </Flex>
                  }
                />
              </Card>

              <Card hoverable style={{ width: 260 }} size="small">
                <Image src={p3} preview={false} />
                <Card.Meta
                  title="Dead by Daylight"
                  style={{ padding: "8px" }}
                  description={
                    <Flex gap={16} justify="space-between">
                      <Button type="link" style={{ padding: 0 }}>
                        R$ 100,00
                      </Button>
                      <Flex gap={0} align="center" justify="center">
                        <Text
                          type="danger"
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          90%
                        </Text>
                        <Text
                          type="secondary"
                          delete
                          code
                          style={{ padding: 0, margin: 0 }}
                        >
                          R$ 130,00
                        </Text>
                      </Flex>
                    </Flex>
                  }
                />
              </Card>
            </Flex>
          </Col>
        </Row>

        <Row
          style={{
            width: "100vw",
            backgroundColor: "#444",
            padding: "40px",
          }}
          gutter={16}
        >
          <Col span={24}>
            <Title level={2} style={{ color: "#ffffff" }}>
              Em breve na Iara Games:
            </Title>
          </Col>
          <Col span={12}>
            <Flex vertical="vertical" gap={16}>
              <Image preview={false} src={cs1} height={325} />
              <Image preview={false} src={cs2} height={325} />
            </Flex>
          </Col>
          <Col span={12}>
            <Flex vertical="vertical" gap={16}>
              <Image preview={false} src={cs3} height={211} />
              <Image preview={false} src={cs4} height={211} />
              <Image preview={false} src={cs5} height={211} />
            </Flex>
          </Col>
        </Row>

        <Flex vertical="vertical" gap={12}>
          <Flex style={{ textAlign: "center" }} vertical="vertical">
            <Title level={2}>+ de 12.000 clientes satisfeitos</Title>
            <Paragraph>
              Veja o que nossos clientes tem a dizer sobre a Iara Games, a maior
              plataforma game do Brasil:
            </Paragraph>
          </Flex>

          <Flex gap={12} style={{ padding: "40px" }}>
            <Card
              size="small"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <Image src={person1} preview={false} />
              <Paragraph>George Lucas</Paragraph>
              <Rate value={5} />

              <Paragraph style={{ width: "250px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                leo vitae ipsum vestibulum porta.
              </Paragraph>
            </Card>
            <Card
              size="small"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <Image src={person2} preview={false} />
              <Paragraph>Carl Sagan</Paragraph>
              <Rate value={5} />

              <Paragraph style={{ width: "250px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                leo vitae ipsum vestibulum porta.
              </Paragraph>
            </Card>
            <Card
              size="small"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                gap: "16px",
              }}
            >
              <Image src={person3} preview={false} />
              <Paragraph>Marie Curie</Paragraph>
              <Rate value={5} />

              <Paragraph style={{ width: "250px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
                leo vitae ipsum vestibulum porta.
              </Paragraph>
            </Card>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </div>
  );
}
