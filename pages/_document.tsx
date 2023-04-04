import Script from "next/script";
import Document, { Html, Head, Main, NextScript } from "next/document";

import createEmotionCache from "@source/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Merienda:wght@300;400;500;600;700;800;900&amp;family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            rel="stylesheet"
          />

          <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`} strategy="afterInteractive"></Script>
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-RYWWLV9L9V');`}
          </Script>

          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style data-emotion={`${style.key} ${style.ids.join(" ")}`} key={style.key} dangerouslySetInnerHTML={{ __html: style.css }} />
  ));

  return { ...initialProps, emotionStyleTags };
};
