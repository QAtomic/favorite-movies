import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "../components/NavBar";
import { FavProvider } from "../contexts/FavContext"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
          <NavBar />
          <Main />
          <NextScript />
      </body>
    </Html>
  );
}
