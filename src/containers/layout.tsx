import Head from "next/head";
import React, { FC } from "react";
import { Header } from "./header";

export const Layout: FC<{
  meta?: { title?: string; description?: string };
}> = ({ children, meta: { title = "Ak Sandalye", description } }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {children}
    </div>
  );
};
