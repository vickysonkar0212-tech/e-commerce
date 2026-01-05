import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "How to Start a Successful Online Business",
      image: "https://via.placeholder.com/300x200",
      desc: "Learn how you can start and run a profitable online business in 2025.",
    },
    {
      id: 2,
      title: "Top 10 Tips for Better Productivity",
      image: "https://via.placeholder.com/300x200",
      desc: "Boost your work productivity using these top tips and strategies.",
    },
    {
      id: 3,
      title: "Why Web Development is in High Demand",
      image: "https://via.placeholder.com/300x200",
      desc: "Find out why web development is booming and how to start your journey.",
    },
  ];

  return (
    <div className="container py-5 blog-container">
      <h1 className="blog-heading text-center mb-5">Our Latest Blogs</h1>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card blog-card">
              <img src={blog.image} className="card-img-top blog-img" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title blog-title">{blog.title}</h5>
                <p className="card-text blog-desc">{blog.desc}</p>
                <Link to={`/blog/${blog.id}`} className="btn btn-primary blog-btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
