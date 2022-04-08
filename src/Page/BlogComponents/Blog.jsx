import React, { useState, useEffect } from "react";
import style from "./Blog.module.css";

import rightArrow from "../HomeComponets/icons/right-arrow.svg";
import leftArrow from "../HomeComponets/icons/left-arrow.svg";
import Line from "../HomeComponets/Line";

export const Blog = () => {
  const [data, setData] = useState([]);

  const url = "http://localhost:3000/blogs";
  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);
  return (
    <>
      <h1 className={style.blog_h1}>Blog</h1>
      <Line/>
      <div className={style.blog_container}>
        
        {data.map((ele, index) => (
          <div className={style.card}>
            <img src={ele.img} alt="" />
            <div className={style.text_all}>
              <div className={style.blog_text1}>
                <spna>{ele.text1}</spna>
              </div>
              <div className={style.blog_text2}>
                <span style={{ color: "black" }}>{ele.text2}</span>
              </div>
              <div className={style.blog_text3}>
                <span>{ele.text3}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className={style.arrow_btn}>
        <button>
          Left Arrow
        </button>
        <button>
          Right Arrow
        </button>
      </div> */}
    </>
  );
};
