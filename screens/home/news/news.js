import React from "react";
import cn from "classnames";
import styles from "./news.module.css";
import icons from "@/constants/icons";
import { BlogPost, FeaturedPost } from "@/components/blog-posts";
import mock from "@/constants/mock";

export default function News({ blog_posts = mock.blog_posts }) {
  return (
    <div className={cn("section")}>
      <div className={cn("container")}>
        <div className={styles.wrapper}>
          <div className={cn("heading-3", styles.title)}>Latest stories</div>
          <button className={cn("button-stroke", styles.button)}>
            {icons.Paper} View all
          </button>
        </div>

        <div className={styles.news}>
          <div className={styles.col}>
            {blog_posts.slice(0, 2).map((post) => (
              <FeaturedPost key={post.id} {...post} />
            ))}
          </div>

          <div className={styles.col}>
            {blog_posts.slice(2).map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
