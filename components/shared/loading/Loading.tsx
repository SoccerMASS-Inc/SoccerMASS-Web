"use client";

import dynamic from "next/dynamic";

const Spin = dynamic(() => import("antd").then((module) => module.Spin), { loading: () => <span>Loading...</span> });

const Loading = ({ fullscreen = false }: { fullscreen?: boolean }) => <Spin fullscreen={fullscreen} />;

export default Loading;
