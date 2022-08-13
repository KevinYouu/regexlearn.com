import Document, { Html, Head, Main, NextScript } from 'next/document';

const isDevelopment = process.env.NODE_ENV === 'development';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <script
            async
            defer
            data-website-id="23b28b3f-0abd-4946-b5c0-b239a80d111d"
            src="https://sta.zdynb.cn/umami.js"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
