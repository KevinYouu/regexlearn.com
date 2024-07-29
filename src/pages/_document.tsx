import Document, { Html, Head, Main, NextScript } from 'next/document';

const isDevelopment = process.env.NODE_ENV === 'development';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="dark">
        <Head>
          {!isDevelopment && (
            <>
              <script
                defer
                src="https://stats.kevnu.com/script.js"
                data-website-id="23b28b3f-0abd-4946-b5c0-b239a80d111d"
              ></script>
            </>
          )}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {!isDevelopment && (
            <>
              {/* <!-- Google Tag Manager (noscript) --> */}
              <noscript>
                <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-WMNH2QX"
                  style={{ height: 0, width: 0, display: 'none', visibility: 'hidden' }}
                />
              </noscript>
              {/* <!-- End Google Tag Manager (noscript) --> */}
            </>
          )}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
