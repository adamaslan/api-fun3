import Head from "next/head";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="keywords" content={keywords} />
      </Head>
      {children}
    </div>
  );
}
Layout.defaultProps = {
  title: "Adams Adjacent Events| Find the most fulfilling events",
  description: "Find events that truly make you content",
  keywords: "music, art, meditation, writing, yoga, food, drinks",
};
