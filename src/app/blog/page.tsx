import React from "react";
import "./style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Explore our latest articles, news, and updates.",
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Maternity services",
      excerpt:
        "Ouma Health, Marani Health team up for maternity care in underserved areas",
      image: "/blog1.jpg",
      date: "Dec 10, 2024",
      category: "Maternity",
    },
    {
      id: 2,
      title: "News from services in South Australia",
      excerpt:
        "$14M more for EMR implementation in Victoria and more briefs",
      image: "/blog2.jpg",
      date: "Dec 9, 2024",
      category: "Global News",
    },
    {
      id: 3,
      title: "AI & ML Intelligence",
      excerpt:
        "How Mayo Clinic is using real-world data to advance precision medicine",
      image: "/blog3.jpg",
      date: "Dec 8, 2024",
      category: "Science",
    },
    {
        id: 4,
        title: "AI & ML Intelligence",
        excerpt:
          "Every year, predictive AI saves 50 lives in two ERs at UC San Diego Health",
        image: "/blog4.jpg",
        date: "Dec 12, 2024",
        category: "Science",
      },
  ];

  return (
    <div className="blog-container">
      <div className="blog-content">
        <h1 className="blog-heading">Our Blog</h1>
        <p className="blog-description">
          Dive into our latest articles, insights, and updates. Stay informed and inspired.
        </p>

        <div className="blog-main-section">
          
          <div className="blog-posts">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-post">
                <img src={post.image} alt={post.title} className="blog-image" />
                <div className="blog-details">
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-date">{post.date} | {post.category}</p>
                  <p className="blog-excerpt">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
