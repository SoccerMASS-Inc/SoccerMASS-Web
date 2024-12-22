import dynamic from "next/dynamic";
const MdFacebook = dynamic(() => import("react-icons/md").then((x) => x.MdFacebook));
const TbPhoneCall = dynamic(() => import("react-icons/tb").then((x) => x.TbPhoneCall));
const TiSocialTwitter = dynamic(() => import("react-icons/ti").then((x) => x.TiSocialTwitter));
const TiSocialLinkedin = dynamic(() => import("react-icons/ti").then((x) => x.TiSocialLinkedin));
const TiSocialInstagram = dynamic(() => import("react-icons/ti").then((x) => x.TiSocialInstagram));
const MdOutlineWhatsapp = dynamic(() => import("react-icons/md").then((x) => x.MdOutlineWhatsapp));
const VscGithubInverted = dynamic(() => import("react-icons/vsc").then((x) => x.VscGithubInverted));

export const Social = ({ account, link, fontSize }: { link: string; account: string; fontSize: string }) => {
  let icon;

  switch (account) {
    case "Whatsapp":
      icon = <MdOutlineWhatsapp fontSize={fontSize} />;
      break;
    case "Twitter":
      icon = <TiSocialTwitter fontSize={fontSize} />;
      break;
    case "Instagram":
      icon = <TiSocialInstagram fontSize={fontSize} />;
      break;
    case "Facebook":
      icon = <MdFacebook fontSize={fontSize} />;
      break;
    case "LinkedIn":
      icon = <TiSocialLinkedin fontSize={fontSize} />;
      break;
    case "Github":
      icon = <VscGithubInverted fontSize={fontSize} />;
      break;
    case "Phone":
      icon = <TbPhoneCall fontSize={fontSize} />;
      break;

    default:
      icon = <></>;
  }

  return icon ? (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={account.toLowerCase()} style={{ color: "var(--contrast-color)" }}>
      {icon}
    </a>
  ) : null;
};
