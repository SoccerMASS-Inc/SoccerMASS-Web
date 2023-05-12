import Carousel from "nuka-carousel";
import { Fade } from "react-awesome-reveal";

import RelativeHeader from "@component/shared/header";
import Loading from "@component/shared/loading/Loading";
import authSlideText from "@source/constants/authSlideText";

import { styles } from ".";

export default ({ Component, pageProps, loading }: any) => (
  <main className={styles.layout}>
    <aside>
      <div>
        <Carousel wrapAround={true} slidesToShow={1} autoplay={true} withoutControls={true} adaptiveHeight={true} autoplayInterval={5000}>
          {authSlideText.map((slideText: any) => (
            <div key={slideText}>{slideText}</div>
          ))}
        </Carousel>
      </div>
    </aside>
    <div>
      <RelativeHeader position="relative" />
      <Fade direction="down" triggerOnce={true} style={{ perspective: "100px" }}>
        {loading ? <Loading /> : <Component {...pageProps} />}
      </Fade>
    </div>
  </main>
);
