import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./update.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AdminNav from "../nav-bar/adminNav";
const Update = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://my-brand-back-end-ts.onrender.com/blog/getBlog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setCover(data.cover);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);

  const updateArticle = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const token = localStorage.getItem("jwt");
      if (!token) {
        console.log("There is No Token Found");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("cover", cover);
      formData.append("content", content);

      await axios
        .put(
          `https://my-brand-back-end-ts.onrender.com/blog/update/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          if (res.status === 201) {
            setLoading(false);

            toast.success("Article Updated Successfully!!");
            navigate("/admin");
          } else {
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log("Errorr", error);
        });
    } catch (error) {
      console.log("Error", error);
    }
  };
  // const dismissSuccess = () => {
  //   setSuccess(false);
  //   navigate("/admin");
  // };
  return (
    <>
      <AdminNav />
      <section className="update">
        <div className="blog-heading">
          <h2>
            Update <span>Article</span>
          </h2>
        </div>

        <form onSubmit={updateArticle} className="createForm">
          <label htmlFor="ArticleTitle">Title Of Article</label> <br />
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="ArticleTitle"
            name="ArticleTitle"
            placeholder="Title Of Article....................."
          />
          <br />
          <br />
          <label htmlFor="articleCover">Article Cover :</label>
          <input
            onChange={(e) => setCover(e.target.files[0])}
            type="file"
            id="articleCover"
            placeholder="Article Cover"
          />
          <img src={cover} alt="Article Cover" className="photo" />
          <br />
          <label htmlFor="articleContent">Article Content</label>
          <br />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            id="articleContent"
            placeholder="Article Content"
            contentEditable="true"
          ></textarea>
          <br />
          {loading ? (
            <div class="dot-spinner">
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
              <div class="dot-spinner__dot"></div>
            </div>
          ) : null}
          <button type="submit" className="create-btn">
            Update
          </button>
        </form>
        {/* {success ? (
          <div class="popUp-card center">
            <div class="popUp-icon">
              <i class="fa fa-check"></i>
            </div>
            <div class="poptitle">
              <h2>Success !!</h2>
            </div>
            <div class="description">
              <h4>Article Created Successfully !!!!</h4>
            </div>
            <div class="dismiss-btn" style={{ marginLeft: " 75px" }}>
              <button id="dismiss-btn" onClick={dismissSuccess}>
                Dismiss
              </button>
            </div>
          </div>
        ) : null} */}
      </section>
    </>
  );
};

export default Update;
