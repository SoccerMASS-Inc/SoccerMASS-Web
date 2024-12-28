"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./welcome.module.scss";

const Button = dynamic(() => import("antd").then((module) => module.Button)),
  Typography = dynamic(() => import("antd").then((module) => module.Typography.Text)),
  VscHubot = dynamic(() => import("react-icons/vsc").then((module) => module.VscHubot)),
  IoGameControllerOutline = dynamic(() => import("react-icons/io5").then((module) => module.IoGameControllerOutline));

const Welcome = () => (
  <div className={styles.welcome} data-testid="welcome">
    <main>
      <aside>
        <Typography>Welcome to</Typography>

        <Typography style={{ fontWeight: 900 }}>
          <Link href="/">Wave Research</Link>
        </Typography>

        <Typography>
          The ultimate destination for football enthusiasts and managers, designed to provide you with everything you need to stay ahead of the game. With our
          cutting-edge tools and in-depth insights, you can access real-time data. So join us today and experience the power of data-driven football API like
          never before!
        </Typography>

        <nav>
          <Link href="/games">
            <Button size="large" type="primary" icon={<IoGameControllerOutline />}>
              <span>Soccer Manager</span>
            </Button>
          </Link>

          <Link href="/apihub">
            <Button size="large" type="primary" icon={<VscHubot />}>
              <span>API Hub</span>
            </Button>
          </Link>
        </nav>
      </aside>
      <figure></figure>
    </main>
  </div>
);

export default Welcome;
