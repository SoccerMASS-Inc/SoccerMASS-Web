import type { NextConfig } from "next";

const [preview, development, production] = ["https://dev.waverd.com", "http://localhost:8081", "https://api.waverd.com"];

type n_env = "preview" | "development" | "production";

const STABLE_VERSION = "/v1",
  INIT_NODE_ENV = process.env.NODE_ENV as n_env,
  DOMAINS = ["apihub", "games", "console", "accounts"],
  SERVER_ENV_URLS = { preview, development, production },
  BASE_URL = SERVER_ENV_URLS[INIT_NODE_ENV] + STABLE_VERSION;

const nextConfig: NextConfig = {
  async redirects() {
    return DOMAINS.map((domain) => ({
      permanent: false,
      source: "/:path*",
      destination: `https://www.waverd.com/${domain}/:path*`,
      has: [{ type: "host", value: `${domain}.waverd.com` }],
    }));
  },

  env: {
    BASE_URL,
    STABLE_VERSION,
    NOTICE_PERIOD: "30",
    INACTIVITY_PERIOD: "21",
    DATA_DELETION_PERIOD_PERIOD: "14",
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({ enabled: process.env.ANALYZE === "true" });
module.exports = withBundleAnalyzer(nextConfig);
