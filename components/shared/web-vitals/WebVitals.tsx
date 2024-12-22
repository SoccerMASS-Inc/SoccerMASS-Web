"use client";

import { useReportWebVitals } from "next/web-vitals";

const WebVitals = () => {
  useReportWebVitals((metric) => {
    console.log({
      ...metric,
      value: metric.value * 0.1, // values must be integers
    });
  });

  return <></>;
};

export default WebVitals;
