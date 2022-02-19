import Link from "next/link";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <h1>about</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
}
