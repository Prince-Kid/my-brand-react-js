import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://my-brand-back-end-ts.onrender.com/blog/all")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There is an error", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blogs">
      <div className="blog-heading">
        <span>My Recent Posts</span>
        <h2>
          My <span>Blogs</span>
        </h2>
      </div>

      <div className="blog-container">
        {loading ? (
          <div id="main-blog-container">
            <div className="no-blog">
              <div class="loader">
                <div class="wrapper">
                  <div class="circle"></div>
                  <div class="line-1"></div>
                  <div class="line-2"></div>
                  <div class="line-3"></div>
                  <div class="line-4"></div>
                </div>
              </div>
              <div class="loader">
                <div class="wrapper">
                  <div class="circle"></div>
                  <div class="line-1"></div>
                  <div class="line-2"></div>
                  <div class="line-3"></div>
                  <div class="line-4"></div>
                </div>
              </div>

              <div class="loader">
                <div class="wrapper">
                  <div class="circle"></div>
                  <div class="line-1"></div>
                  <div class="line-2"></div>
                  <div class="line-3"></div>
                  <div class="line-4"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className="blog-box">
              <div className="blog-img">
                <img src={blog.cover} alt="Blog" />
              </div>
              <div className="blog-text">
                <span>{new Date(blog.createdAt).toDateString()}</span>
                <p className="blog-title">{blog.title}</p>
                <p>{blog.content}</p>

                <div className="reactions">
                  <div className="likes">
                    <Link to={`/article/${blog._id}`}>
                      <i className="fa-solid fa-thumbs-up"></i>
                      <span id="likes">{blog.likes}</span>
                    </Link>
                  </div>
                  <Link to={`/article/${blog._id}`}>
                    <button className="readmore">Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Blogs;
