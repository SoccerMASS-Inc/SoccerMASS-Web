"use client";

import dynamic from "next/dynamic";

interface SpinProps {
  testId: string;
  fullscreen?: boolean;
}

const Spin = dynamic(() => import("antd").then((module) => module.Spin), { loading: () => <span>Loading...</span> }),
  Loading = ({ fullscreen = false, testId }: SpinProps) => <Spin fullscreen={fullscreen} data-testid={testId} />;

export default Loading;
