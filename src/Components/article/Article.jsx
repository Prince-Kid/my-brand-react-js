import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./article.css";
import Navbar from "../nav-bar/navbar";
import Subscribe from "../subscribe/Subscribe";
import Footer from "../footer/Footer";
import toast from "react-hot-toast";
const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadings, setLoadings] = useState(true);
  const [viewComment, setviewComment] = useState([]);
  const [comment, setComment] = useState("");
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [like, setLike] = useState("");

  useEffect(() => {
    fetch(`https://my-brand-back-end-ts.onrender.com/blog/getBlog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setArticle([data]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There Is An Error", error);
      });
    fetch(`https://my-brand-back-end-ts.onrender.com/blog/viewComment/${id}`)
      .then((res) => res.json())
      .then((comment) => {
        setviewComment(comment);
      })
      .catch((error) => {
        console.error("There Is An Error", error);
      });
  }, [id]);

  useEffect(() => {
    fetch("https://my-brand-back-end-ts.onrender.com/blog/all")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoadings(false);
      })
      .catch((error) => {
        console.error("There is an error", error);
        setLoadings(false);
      });
  }, []);

  const articleComment = (e) => {
    e.preventDefault();
    try {
      const data = {
        names: names,
        email: email,
        comment: comment,
      };
      console.log(id);
      fetch(`https://my-brand-back-end-ts.onrender.com/blog/comment/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Thanks For Your Feedback");
          setComment("");
          setNames("");
          setEmail("");
          window.location.reload();
        })
        .catch((error) => console.log("There is an Error ", error));
    } catch (error) {
      console.error("There is An Error", error);
    }
  };

  const likeBlog = async () => {
    var likedBlog = JSON.parse(localStorage.getItem("likedBlog")) || [];
    let action = "";
    if (!likedBlog.find((blog) => blog.id === id)) {
      likedBlog.push({ id: id });
      action = "like";
      localStorage.setItem("likedBlog", JSON.stringify(likedBlog));
    } else {
      const index = likedBlog.findIndex((blog) => blog.id === id);
      likedBlog.splice(index, 1);
      action = "unlike";
      localStorage.setItem("likedBlog", JSON.stringify(likedBlog));
    }
    await fetch(`https://my-brand-back-end-ts.onrender.com/blog/like/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: action }),
    })
      .then((res) => {
        if (!res.ok) {
          console.log("There is an Error ");
        }
        return res.json();
      })
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log("Errrorrr", error.message);
      });
  };
  useEffect(() => {
    fetch(`https://my-brand-back-end-ts.onrender.com/blog/getBlog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setLike(data.likes);
      })
      .catch((error) => {
        console.log("errro", error);
      });
  }, [id]);
  return (
    <>
      <Navbar />
      <div class="article">
        {loading ? (
          <div class="loaders">
            <div class="wrapper">
              <div class="circle"></div>
              <div class="line-1"></div>
              <div class="line-2"></div>
              <div class="line-3"></div>
              <div class="line-4"></div>
            </div>
          </div>
        ) : (
          article.map((data) => (
            <div class="article-container">
              <h1>{data.title}</h1>
              <h5>Created at : {data.createdAt}</h5>
              <div class="blog-boxs">
                <div class="blog-imgs">
                  <img src={data.cover} alt="Blog" />
                </div>
                <div class="blog-text">
                  <span>{data.createdAt}</span>
                  <br />
                  <a href={{}} class="blog-title">
                    {data.title}
                  </a>
                </div>

                <div
                  class="article-content"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </div>
            </div>
          ))
        )}
      </div>

      <div class="reaction">
        <h4>Was This article Helpful ?</h4>
        <div class="likes">
          <i class="fa-solid fa-thumbs-up" onClick={likeBlog}></i>
          <span id="likes">{like}</span>
        </div>
      </div>
      <h2 style={{ textAlign: "center", margin: "15px 0" }}>
        Recent <span style={{ color: "darkcyan" }}>Comments 📩</span>
      </h2>

      <div class="comment-container">
        <div id="commentContainer">
          {viewComment.map((datas) => (
            <div className="commentContent" key={datas._id}>
              <div className="prof">
                <h3 className="user">@{datas.names}</h3>
              </div>
              <textarea
                className="comm"
                value={datas.comment}
                readOnly={true}
                rows={3}
              />
              <div>
                <button className="reply">Reply</button>
                <button className="like">🩶</button>
              </div>
            </div>
          ))}
        </div>

        <div class="feedback">
          <form action="" id="commentForm" onSubmit={(e) => articleComment(e)}>
            <input
              onChange={(e) => setNames(e.target.value)}
              value={names}
              type="text"
              id="fullName"
              placeholder="Enter Your Full Name"
            />
            <br />
            <br />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="Email"
              id="userEmail"
              placeholder="Enter Your Email"
            />

            <br />
            <br />
            <legend>Comment This Article:</legend>
            <br />

            <textarea
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              id="comment"
              cols="30"
              rows="2"
            ></textarea>

            <br />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
      <h1 style={{ marginTop: "100px" }}>Other Related Articles</h1>
      <div className="blog-container">
        {loadings ? (
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
        ) : blogs.length >= 3 ? (
          blogs.splice(0, 3).map((blog) => (
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
      <Subscribe />
      <Footer />
    </>
  );
};

export default Article;
