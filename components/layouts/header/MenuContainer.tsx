import Menu from "./Menu";

import { useState } from "react";

interface MenuContainerProps {
  profile: Profile;
  authenticated: boolean;
}

const MenuContainer = ({ profile, authenticated }: MenuContainerProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) return;
    setMenuOpen((status) => !status);
  };

  return <Menu {...{ toggleMenuOpen, menuOpen, profile, authenticated }} />;
};

export default MenuContainer;
