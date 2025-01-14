import type { NextConfig } from "next";

const DOMAINS = ["apihub", "games", "console", "accounts"],
  [STABLE_VERSION, NODE_ENV] = ["/v1", "process.env.NODE_ENV"],
  [preview, development, production] = ["https://dev.waverd.com", "http://localhost:8081", "https://api.waverd.com"],
  BASE_URL = (NODE_ENV === "production" ? production : NODE_ENV === "development" ? development : preview) + STABLE_VERSION;

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
