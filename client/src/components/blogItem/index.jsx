import { Grid } from "@mui/material";
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss'
const BlogItem = () => {
    const {blog} = useSelector(state => state.blog)
    const _blog = blog.blog
    return (
      <>
        {_blog?.map((item) => (
            <Grid item md={6}>
          <div className="item-blog">
              <div className="title-blog">{item.username}</div>
              <img
              className="img-blog"
                style={{ width: "100%" }}
                src={item.media}
                alt={item.media}
              />
              <div className="desc-blog" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
          </div>
            </Grid>
        ))}
      </>
    );
}

export default BlogItem
