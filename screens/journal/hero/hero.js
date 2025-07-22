"use client";

import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import { BlogPost, FeaturedPost } from "@/components/blog-posts";
import mock from "@/constants/mock";
import icons from "@/constants/icons";

export default function Hero({
  blog_tabs = mock.blog_tabs,
  blog_posts = mock.blog_posts,
}) {
  const [activeTab, setActiveTab] = React.useState(blog_tabs[0].id);
  const [filteredPosts, setFilteredPosts] = React.useState(blog_posts);
  const [open, setOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleTabClick = (tabId) => {
    const selectedTab = blog_tabs.find((tab) => tab.id === tabId);
    setActiveTab(tabId);
    setOpen(false);

    const filtered = blog_posts.filter((post) =>
      selectedTab.category ? post.category === selectedTab.category : true
    );
    setFilteredPosts(filtered);
    setCurrentPage(1);
  };

  React.useEffect(() => {
    handleTabClick(activeTab);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={cn("section")}>
      <div className={cn("container", styles.container)}>
        <div className={styles.heading}>
          <button
            className={cn("label-medium", styles.button, {
              [styles.open]: open,
            })}
            onClick={() => setOpen(!open)}
          >
            {blog_tabs.find((tab) => tab.id === activeTab).title}
            {icons.ChevronDown}
          </button>
          <div
            className={cn(styles.tabs, {
              [styles.open]: open,
            })}
          >
            {blog_tabs.map((tab, index) => (
              <>
                <button
                  key={tab.id}
                  className={cn("label-medium", styles.tab, {
                    [styles.active]: activeTab === tab.id,
                  })}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.title}
                </button>

                {index !== blog_tabs.length - 1 && (
                  <div className={styles.slash}>/</div>
                )}
              </>
            ))}
          </div>

          <div className={cn("hero", styles.title)}>Journal</div>
        </div>

        <div className={styles.featured_news}>
          <div className={styles.col}>
            {filteredPosts.slice(0, 2).map((post) => (
              <FeaturedPost key={post.id} {...post} />
            ))}
          </div>

          <div className={styles.col}>
            {filteredPosts.slice(2).map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>

        <div className={styles.news}>
          {filteredPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button
            className={cn("label-medium", styles.pagination_button, {
              [styles.active]: currentPage === 1,
            })}
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          <button
            className={cn("label-medium", styles.pagination_button, {
              [styles.active]: currentPage === 2,
            })}
            onClick={() => handlePageChange(2)}
          >
            2
          </button>

          <button
            className={cn("label-medium", styles.next_button, {
              [styles.disabled]: currentPage >= 2,
            })}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next {icons.ArrowRight}
          </button>
        </div>
      </div>
    </div>
  );
}
