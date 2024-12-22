import dynamic from "next/dynamic";
import appStore from "store/appStore";

const Provider = dynamic(() => import("react-redux").then((module) => module.Provider), { ssr: false });

const ReduxProvider = ({ children }: Readonly<any>) => <Provider store={appStore}>{children}</Provider>;

export default ReduxProvider;
