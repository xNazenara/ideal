import "../styles.css";
import { useState } from "react";
import Link from "next/link";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const [burgerOpened, setBurgerOpened] = useState(false);

  return (
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
        <div className="menu-background"></div>
        <div className="menu-content">
          <div className="menu-close">
            <div className="menu-close-stripe"></div>
            <div className="menu-close-stripe"></div>
          </div>
          <img className="menu-image" src="/ideal_logo.webp" />
          <div>
            <Link href="/about">
              <a className="menu-link">Страница профессионала</a>
            </Link>
            <Link href="/conception">
              <a className="menu-link">Концепция центра</a>
            </Link>
            <Link href="/services">
              <a className="menu-link">Программы и услуги</a>
            </Link>
          </div>
          <div className="menu-contacts"></div>
          <div className=""></div>
        </div>
      </div>
      <Component {...pageProps} />
    </div>
  );
}
