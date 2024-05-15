import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create.css";
import axios from "axios";
import AdminNav from "../nav-bar/adminNav";
import toast from "react-hot-toast";
const Create = () => {
  const [title, setTitle] = useState();
  const [cover, setCover] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  // const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const createarticle = async (e) => {
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
        .post(
          "https://my-brand-back-end-ts.onrender.com/blog/create",
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
            toast.success("Artcicle Created Successfully !!!!");
            navigate("/admin");
          } else {
            setLoading(false);
            toast.error("Failed To Create A Blog");
            navigate("/admin");
          }
        })
        .catch((error) => {
          console.log("Errorr", error);
          toast.error("Failed To Create A Blog");
          navigate("/admin");
        });
    } catch (error) {
      console.log("Error", error);
      toast.error("Failed To Create A Blog");
      navigate("/admin");
    }
  };
  // const dismissSuccess = () => {
  //   setSuccess(false);
  //   navigate("/admin");
  // };
  return (
    <>
      <AdminNav />
      <section class="update">
        <div class="blog-heading">
          <h2>
            create <span>Article</span>
          </h2>
        </div>
        <div className="createForm">
          <label for="">Title Of Article</label> <br />
          <br />
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            id="ArticleTitle"
            name="ArticleTitle"
            placeholder="Title Of Article....................."
          />
          <br />
          <br />
          <label for="">Article Cover :</label>
          <input
            onChange={(e) => setCover(e.target.files[0])}
            type="file"
            id="articleCover"
            placeholder="Article Cover"
          />
          <br />
          <label for="">Article Content</label>
          <br />
          <br />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            id="articleContent"
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
          <button type="submit" onClick={createarticle} className="create-btn">
            create
          </button>
        </div>
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

export default Create;
