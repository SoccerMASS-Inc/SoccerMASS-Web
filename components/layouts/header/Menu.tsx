import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const Flex = dynamic(() => import("antd").then((x) => x.Flex)),
  Drawer = dynamic(() => import("antd").then((x) => x.Drawer)),
  Button = dynamic(() => import("antd").then((x) => x.Button)),
  Divider = dynamic(() => import("antd").then((x) => x.Divider)),
  MdMenu = dynamic(() => import("react-icons/md").then((x) => x.MdMenu)),
  Typography = dynamic(() => import("antd").then((x) => x.Typography.Text)),
  VscGame = dynamic(() => import("react-icons/vsc").then((x) => x.VscGame)),
  VscHome = dynamic(() => import("react-icons/vsc").then((x) => x.VscHome)),
  VscHubot = dynamic(() => import("react-icons/vsc").then((x) => x.VscHubot)),
  VscSignIn = dynamic(() => import("react-icons/vsc").then((x) => x.VscSignIn)),
  VscSignOut = dynamic(() => import("react-icons/vsc").then((x) => x.VscSignOut)),
  VscPersonAdd = dynamic(() => import("react-icons/vsc").then((x) => x.VscPersonAdd)),
  SocialContainer = dynamic(() => import("components/shared/social/SocialContainer")),
  AiOutlineClose = dynamic(() => import("react-icons/ai").then((x) => x.AiOutlineClose));

const navLinks = [
  { id: "home", title: "Home", Icon: VscHome, path: "/" },
  { id: "apihub", title: "Football API Hub", Icon: VscHubot, path: "/apihub" },
  { id: "manager", title: "Football Manager", Icon: VscGame, path: "/games" },
  { id: "signup", title: "Create an Account", Icon: VscPersonAdd, path: "/accounts/signup" },
  { id: "signin", title: "Login to your Account", Icon: VscSignIn, path: "/accounts/signin" },
  { id: "signout", title: "Sign Out from Wave Research", Icon: VscSignOut, path: `${process.env.BASE_URL}/accounts/signout` },
];

interface MenuProps {
  profile: Profile;
  menuOpen: boolean;
  authenticated: boolean;
  toggleMenuOpen: Function;
}

const Menu = ({ toggleMenuOpen, menuOpen, profile, authenticated }: MenuProps) => (
  <>
    <Button type="primary" icon={<MdMenu />} aria-label="mobile-menu" onClick={(e) => toggleMenuOpen(e)} />

    <Drawer
      width={350}
      closeIcon={null}
      title={
        <Flex justify="space-between">
          <Flex align="center" gap={10}>
            <img src={profile.avatar} style={{ borderRadius: "50%" }} alt="Profile Image" width={40} height={40} />
            <Flex vertical>
              <Typography strong ellipsis={true}>
                {profile.name}
              </Typography>
              <Typography type="secondary" ellipsis={true}>
                {profile.handle}
              </Typography>
            </Flex>
          </Flex>

          <Button type="text" onClick={(e) => toggleMenuOpen(e)} aria-label="change-theme" icon={<AiOutlineClose />} />
        </Flex>
      }
      onClose={(e) => toggleMenuOpen(e)}
      open={menuOpen}>
      <Flex vertical justify="space-between" style={{ height: "calc(100vh - 150px)", maxWidth: "100vw", overflow: "hidden" }}>
        <Flex vertical gap={20} justify="space-between">
          {navLinks
            .filter((nav) => (authenticated ? !["signup", "signin"].includes(nav.id) : !["signout"].includes(nav.id)))
            .map(({ Icon, path, title }) => (
              <Flex gap={10} align="center" key={title}>
                <Icon color="var(--primary-color)" />

                <Link href={path}>
                  <Typography strong>{title}</Typography>
                </Link>
              </Flex>
            ))}
        </Flex>

        <Flex vertical align="center" gap={10}>
          <Divider style={{ marginBottom: -40 }} />

          <div>
            <Image
              src="/images/layout/waverd.webp"
              alt="Wave Research"
              width={60}
              height={60}
              style={{
                zIndex: 5,
                borderRadius: "50%",
                position: "relative",
                border: "3px solid var(--text-secondary-color)",
              }}
            />
          </div>

          <SocialContainer filterParams={["twitter", "instagram", "whatsapp", "linkedin", "facebook"]} fontSize="20px" />

          <Typography type="secondary" style={{ fontSize: ".8em", textAlign: "center" }}>
            ● All rights reserved. All trademarks are the property of their respective owners ●
          </Typography>

          <Typography strong ellipsis>
            <span>©Wave Research 2018 ~ {new Date().getFullYear()}</span>
          </Typography>
        </Flex>
      </Flex>
    </Drawer>
  </>
);

export default Menu;
