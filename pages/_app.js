import "../styles.css";
import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [burgerOpened, setBurgerOpened] = useState(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <div
          className="burger-icon"
          onClick={(e) => {
            setBurgerOpened(true);
          }}
        >
          <div className="burger-icon-stripe"></div>
          <div className="burger-icon-stripe"></div>
          <div className="burger-icon-stripe"></div>
        </div>
        <div className="menu-container">
          <div
            className={`menu-background ${
              burgerOpened ? "menu-background-opened" : ""
            }`}
            onClick={(e) => {
              setBurgerOpened(false);
            }}
          ></div>
          <div
            className={`menu-content ${
              burgerOpened ? "menu-content-opened" : ""
            }`}
          >
            <div
              className="menu-close"
              onClick={(e) => {
                setBurgerOpened(false);
              }}
            >
              <div className="menu-close-stripe"></div>
              <div className="menu-close-stripe"></div>
            </div>
            <img className="menu-image" src="/ideal_logo_2.png" />
            <div>
              <Link href="/about">
                <a
                  className="menu-link"
                  onClick={(e) => {
                    setBurgerOpened(false);
                  }}
                >
                  Страница профессионала
                </a>
              </Link>
              <Link href="/conception">
                <a
                  className="menu-link"
                  onClick={(e) => {
                    setBurgerOpened(false);
                  }}
                >
                  Концепция центра
                </a>
              </Link>
              <Link href="/services">
                <a
                  className="menu-link"
                  onClick={(e) => {
                    setBurgerOpened(false);
                  }}
                >
                  Программы и услуги
                </a>
              </Link>
            </div>
            <div className="menu-contacts"></div>
            <div className=""></div>
          </div>
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
}
