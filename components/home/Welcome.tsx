import styles from "./welcome.module.scss";

import Link from "next/link";
import { Button, Typography } from "antd";
import { VscHubot } from "react-icons/vsc";
import { IoGameControllerOutline } from "react-icons/io5";

const Welcome = () => (
  <div className={styles.welcome} data-testid="welcome">
    <main>
      <aside>
        <Typography.Text>Welcome to</Typography.Text>

        <Typography.Text style={{ fontWeight: 900 }}>
          <Link href="/">Wave Research</Link>
        </Typography.Text>

        <Typography.Text>
          The ultimate destination for football enthusiasts and managers, designed to provide you with everything you need to stay ahead of the game.
          With our cutting-edge tools and in-depth insights, you can access real-time data. So join us today and experience the power of data-driven
          football API like never before!
        </Typography.Text>

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
