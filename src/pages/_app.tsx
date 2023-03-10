import Head from "next/head";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#121212" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:image" content="./og_preview.png" />

        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1650" />
        <meta property="og:image:height" content="871" />
        <meta
          property="og:image:alt"
          content="Milton Chung's Frontend Mentor solutions showcase."
        />
        <meta property="og:type" content="website" />
        {/* TODO: update link */}
        <meta property="og:url" content="https://miltonchung.com/" />
        <meta
          property="og:title"
          content="Frontend Mentor Solutions Showcase | Milton Chung"
        />
        <meta
          property="og:description"
          content="Hi! I'm Milton and I'm passionate about frontend development (and latte art)."
        />

        <meta
          name="keywords"
          content="Milton Chung, HTML, CSS, portfolio, website, personal, ucsc, Milton, Chung, React, Typescript, Sass, Javascript, convex, frontend, engineer, developer, front-end, front end, front end developer, front-end developer, frontend mentor"
        />
        <meta name="author" content="Milton Chung" />
        <meta
          name="description"
          content="Frontend Mentor challenges solutions by Milton Chung."
        />

        <title>Frontend Mentor Showcase</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
