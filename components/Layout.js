import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <Showcase />}
      <div className={styles.container}>{children} </div>
      <Footer />
    </div>
  );
}
Layout.defaultProps = {
  title: "Adams Adjacent Events| Find the most fulfilling events",
  description: "Find events that truly make you content",
  keywords: "music, art, meditation, writing, yoga, food, drinks",
};
