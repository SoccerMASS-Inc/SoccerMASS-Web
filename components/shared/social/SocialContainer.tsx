import { Flex } from "antd";
import { Social } from "./Social";
import { SOCIAL_ACCOUNTS } from "utils/constants";

const SocialContainer = ({ filterParams, fontSize = "18px" }: { fontSize?: string; filterParams: string[] }) => (
  <Flex gap={10}>
    {SOCIAL_ACCOUNTS.filter((acc) => filterParams.includes(acc.id)).map(({ title, id, href }) => (
      <Social key={id} account={title} link={href} fontSize={fontSize} />
    ))}
  </Flex>
);

export default SocialContainer;
