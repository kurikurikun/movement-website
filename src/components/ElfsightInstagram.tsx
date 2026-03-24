"use client";

import Script from "next/script";

export default function ElfsightInstagram() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-6e9766ec-6c97-4556-b049-6be8eb5a7967"
        data-elfsight-app-lazy
      />
    </>
  );
}
