import Head from "next/head";
import styles from "../styles/Layout.module.css";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
      </Head>

      <div className={styles.container}>{children} </div>
    </div>
  );
}
Layout.defaultProps = {
  title: "Adams Adjacent Events| Find the most fulfilling events",
  description: "Find events that truly make you content",
  keywords: "music, art, meditation, writing, yoga, food, drinks",
};
