import mock from "@/constants/mock";
import BlogPostPage from "@/screens/blog-post";

export default async function Product({
  blog_posts = mock.blog_posts,
  params,
}) {
  const post = blog_posts.find((post) => post.slug === params.slug);

  console.log("product:", post);

  return <BlogPostPage post={post} />;
}
