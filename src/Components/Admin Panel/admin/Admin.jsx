import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../nav-bar/adminNav";
import toast from "react-hot-toast";
import "./admin.css";
import axios from "axios";
const Admin = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [deletePrompt, setDeletePrompt] = useState(false);

  useEffect(() => {
    fetch("https://my-brand-back-end-ts.onrender.com/blog/all")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("There is an Error ", error);
        setLoading(false);
      });
  }, []);

  const deleteBlog = async (id) => {
    // setDeletePrompt(true);
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.log("There is No Token Found");
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      await axios
        .delete(
          `https://my-brand-back-end-ts.onrender.com/blog/delete/${id}`,
          config
        )
        .then((res) => {
          if (res.status === 201) {
            toast.success("Blog Deleted Successfully");

            setBlogs((prevBlogs) =>
              prevBlogs.filter((blog) => blog._id !== id)
            );
          } else {
            toast.error("Failed To Delete ");
            console.error("failed To Delete Blog", res.status);
          }
        })
        .catch((error) => console.error("Errorrrrr", error));
    } catch (error) {}
  };
  // const dissmissPrompt = () => {
  //   setDeletePrompt(false);
  // };
  // const confirmDelete = () => {
  //   deleteBlog();
  //   setDeletePrompt(false);
  // };
  return (
    <>
      <AdminNav />
      <section class="admin">
        <section id="blogs">
          <div class="blog-heading">
            <h2>
              Manage <span>Blogs</span>
            </h2>
          </div>
          <div class="add">
            <Link to={"/admin/create"}>
              {" "}
              <button>
                <i class="fa-solid fa-plus" style={{ color: "#ffffff;" }}></i>{" "}
                Article{" "}
              </button>
            </Link>
          </div>
          {loading ? (
            <div class="blog-container">
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
          ) : (
            <div className="blog-container">
              {blogs.map((data) => (
                <div class="blog-box" key={data._id}>
                  <div class="blog-img">
                    <img src={data.cover} alt="Blog" />
                  </div>
                  <div class="blog-text">
                    <span>{data.createdAt}</span>
                    <a href={{}} class="blog-title">
                      {data.title}
                    </a>

                    <div class="edits">
                      <i
                        onClick={() => deleteBlog(data._id)}
                        className="fa-solid fa-trash"
                        style={{ color: "#e71328" }}
                      ></i>
                      <Link to={`/admin/update/${data._id}`}>
                        <i class="fa-solid fa-file-pen"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div id="createForm">
            <div id="main-blog-container"></div>
          </div>
        </section>
        <h3>View All</h3>
      </section>

      {/* {deletePrompt ? (
        <div class="popUp-card center">
          <div class="popUp-icon">
            <i class="fa fa-check"></i>
          </div>
          <div class="poptitle">
            <h2>Are You Sure You Want To Delete This Blog !!</h2>
          </div>
          <div class="description">
            <h4>Opppppssss</h4>
          </div>
          <div class="dismiss-btn" style={{ marginLeft: " 75px" }}>
            <button id="dismiss-btn" onClick={confirmDelete}>
              Delete
            </button>
            <button id="dismiss-btn" onClick={dissmissPrompt}>
              Cancel
            </button>
          </div>
        </div>
      ) : null} */}
    </>
  );
};

export default Admin;
