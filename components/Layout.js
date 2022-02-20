import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
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
