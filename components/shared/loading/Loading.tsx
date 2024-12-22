"use client";

import dynamic from "next/dynamic";

const Spin = dynamic(() => import("antd").then((module) => module.Spin), { loading: () => <span>Loading...</span> });

const Loading = () => <Spin fullscreen />;

export default Loading;
