import Head from "next/head";
import React from "react";

const PageHead = () => {
  return (
    <Head>
      <title>Alessandro Tanus</title>
      <meta name="title" content="Alessandro Tanus" />
      <meta
        name="description"
        content="Alessandro Tanus is a software developer who specializes in creating and designing appealing user interfaces and websites."
      />
      <meta name="theme-color" content="#2b353f" />
      <meta
        name="keywords"
        content="Alessandro Tanus, Tanus, Alessandro, Resume, Portfolio, Software Developer, Full Stack Software Engineer, React Developer, Next.js Developer, Desenvolvedor Full Stack, Programador, Designer, Web Designer"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Alessandro Tanus" />
      <meta name="image" content="https://portfolio-aletanus.vercel.app/og.png" />
      <link rel="icon" href="/assets/logo.svg"></link>
      <link rel="canonical" href="https://portfolio-aletanus.vercel.app/" />

      {/* Google Verification */}
      <meta
        name="google-site-verification"
        content="gMDLAgN62FdAkPVtCW3uNdL_gED0DwDLzqsXIyMpI8Q"
      />

      {/* Apple touch icons */}
      <link
        rel="apple-touch-icon"
        sizes="48x48"
        href="/apple-icons/icon-48x48.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/apple-icons/icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="96x96"
        href="/apple-icons/icon-96x96.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icons/icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="192x192"
        href="/apple-icons/icon-192x192.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="256x256"
        href="/apple-icons/icon-256x256.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="384x384"
        href="/apple-icons/icon-384x384.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="512x512"
        href="/apple-icons/icon-512x512.png"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Alessandro Tanus" />
      <meta property="og:site_name" content="Alessandro Tanus" />
      <meta property="og:url" content="https://portfolio-aletanus.vercel.app" />
      <meta
        property="og:description"
        content="Alessandro Tanus is a software developer who specializes in creating and designing appealing user interfaces and websites."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://portfolio-aletanus.vercel.app/og.png"
      />
    </Head>
  );
};

export default PageHead;
