import Head from "next/head";
import Header from "./header/header";

export default function Layout({
  children,
  title = "Trip Planner - Some description",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header></Header>
      <main>{children}</main>
      {/* <footer>{"I`m here to stay"}</footer> */}
    </>
  );
}
