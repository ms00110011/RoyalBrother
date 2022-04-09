import React, { useState, useEffect } from "react";
import style from "./Blog.module.css";

import Line from "../HomeComponets/Line";

export const Blog = () => {
  const [data, setData] = useState([]);
  
const [page,setPage] =useState(1)
  const url = `http://localhost:3001/blogs?_page=${page}&_limit=9`;
  const getTodo = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => getTodo(), []);
  React.useEffect(() => {
    document.title = "Blogs"
 }, []);

 
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
      <div className={style.arrow_btn}>
        <button disabled={page===1} onClick={()=>{
          setPage(page-1)
          getTodo()
        }}>
          Prev
        </button>
        <button onClick={()=>{
          setPage(page+1)
          getTodo()
          // console.log(page)
        }}>
          Next
        </button>
      </div>
    </>
  );
};
