import Head from "next/head";
import Header from "./header/header";
import HeaderSolid from "./headerSolid/headerSolid";

export default function Layout({
  children,
  title = "Trip Planner - Some description",
  isLogin,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isLogin ? <HeaderSolid /> : <Header></Header>}
      <main>{children}</main>
    </>
  );
}
