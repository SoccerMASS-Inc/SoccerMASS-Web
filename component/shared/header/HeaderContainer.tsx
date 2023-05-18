import { useEffect, useState } from "react";

import { Header } from ".";
import { setCssThemeVar } from "@utils/handlers";
import { connector, ConnectorProps } from "@store";

import { SetThemeAction } from "@interface/store/layout";
import { ColorState, HeaderContainer, VisibleState } from "@interface/components/shared/headerInterface";
import fetcher from "@utils/fetcher";

export default connector((props: HeaderContainer & ConnectorProps) => {
  const { position, setThemeAction } = props,
    [color, setColor] = useState<ColorState>({ first: "textSecondary", last: "primary" }),
    [visible, setVisible] = useState<VisibleState>({ nav: false, mobile: false }),
    [displayHeader, setDisplayHeader] = useState(null),
    [authenticated, setauthenticated] = useState(false);

  const [theme, setTheme] = useState<SetThemeAction>("light");

  useEffect(() => {
    setauthenticated(!!props.auth || false);
  }, [props.auth]);

  useEffect(() => {
    setDisplayHeader(props.layout.header);
  }, [props.layout.header]);

  useEffect(() => {
    setTheme(props.layout.theme as SetThemeAction);
  }, [props.layout.theme]);

  useEffect(() => {
    const headerWidth = document.getElementById("header")?.offsetWidth;
    setVisible({ nav: headerWidth > 1400, mobile: headerWidth < 600 });
  }, [props.layout.width]);

  const swapColorFn = () => setColor((color) => ({ ...color, first: color.last, last: color.first }));

  const themeHandler = async (theme: SetThemeAction) => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCssThemeVar(newTheme);

    setThemeAction(newTheme);

    await fetcher({ method: "POST", payload: { theme }, endpoint: "/accounts/theme" }).catch(() => {});
  };

  return <Header {...{ position, authenticated, displayHeader, swapColorFn, color, theme, themeHandler, visible }} />;
});
