"use client";

import apiHubStyles from "./apiHub.module.scss";

import Link from "next/link";
import { textToId } from "utils/helpers";
import { VscHome } from "react-icons/vsc";
import { FaCartPlus } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { MdNetworkCheck } from "react-icons/md";
import { Breadcrumb, Button, Col, Flex, Row, Typography } from "antd";
import Image from "next/image";

const ApiHub = () => (
  <div className={apiHubStyles.apihub} data-testid="apihub">
    <div role="presentation" style={{ padding: "30px 0 30px 20px" }}>
      <Breadcrumb items={[{ href: "", title: <VscHome /> }, { title: "Wave Research" }, { href: "/apihub", title: "API HUB" }]} />
    </div>

    <Flex vertical gap={40} justify="space-evenly">
      <Image width={300} height={300} src="/images/layout/intro-apihub.png" alt="Wave Research API HUB welcome image" />

      <main>
        <Typography.Text style={{ fontWeight: 600 }} type="secondary">
          - WHY DO ANYTHING?
        </Typography.Text>

        <div style={{ margin: "20px auto", textAlign: "center", fontSize: "2em", fontWeight: 800, lineHeight: 1.2 }}>
          <span>Let's handle the</span>
          <span style={{ color: "green" }}>&nbsp;Football data&nbsp;</span>
          <span>for your business</span>
        </div>

        <div>
          {apihubFeatures.map(({ Icon, title, description }) => (
            <Row justify="start" align="top" gutter={24} key={title} style={{ marginBottom: 30 }}>
              <Col span={3}>
                <Button
                  type="text"
                  aria-label={textToId(title)}
                  icon={<Icon style={{ fontSize: 25 }} />}
                  style={{ display: "block", margin: "auto" }}
                />
              </Col>

              <Col span={21}>
                <Flex vertical>
                  <Typography.Text style={{ fontWeight: 800 }}>{title}</Typography.Text>
                  <Typography.Text style={{ textAlign: "justify" }}>{description}</Typography.Text>
                </Flex>
              </Col>
            </Row>
          ))}
        </div>

        <Typography.Text>
          <Link href="/apihub">See all features</Link>
        </Typography.Text>
      </main>
    </Flex>
  </div>
);

export default ApiHub;

const apihubFeatures = [
  {
    Icon: MdNetworkCheck,
    title: "Improve Performance",
    description:
      "Our Server is hosted on 'Render'; A reliable Cloud Provider to ensure 24/7 data availability and minimal response time with little to no down time",
  },
  {
    Icon: FaDatabase,
    title: "Massive data to consume",
    description:
      "Building and maintaining ever changing football data will stretch your budget and Team. Allow Wave Research handle this task as we provide a large pool of data to fetch from ranging from Players, Clubs, Countries, Leagues, e.t.c.",
  },
  {
    Icon: FaCartPlus,
    title: "Create Robust App",
    description:
      "First API provider to offer full-text-search powered by the most robust and flexible NoSQL Database 'MongoDB'. Overwhelming functionalities to consume, as we are here to solve your data worries.",
  },
];
