import Layout from "@/components/Layout";
import Hero from "./hero";
import Comments from "./comments";
import Section from "./section";

export default function BlogPostPage({ post }) {
  return (
    <Layout>
      <Hero post={post} />
      <Section />
      <Comments post={post} />
    </Layout>
  );
}
