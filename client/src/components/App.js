import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../actions/index";

function App() {
  const blogs = useSelector(state => Object.values(state.blogs));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  const renderList = () => {
    return blogs.map(blog => {
      return (
        <div>
          <div>{blog.title}</div>
          <div>{blog.blogBody}</div>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
}

export default App;
