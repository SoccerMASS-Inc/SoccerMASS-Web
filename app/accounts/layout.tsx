import styles from "./layout.module.scss";
import Accounts from "components/layouts/accounts";
import Slides from "components/layouts/slide-text";
import FooterContainer from "components/layouts/footer";

import { ReactChildren } from "interfaces/components/shared.interface";

export default function RootLayout({ children }: ReactChildren) {
  return (
    <>
      <main className={styles.layout}>
        <Slides layout="accounts" />
        <Accounts>{children}</Accounts>
      </main>

      <FooterContainer />
    </>
  );
}
