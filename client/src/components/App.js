import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../actions/index";

function App() {
  const blogs = useSelector(state => Object.values(state.blogs));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
// adding needed comment
  const renderList = () => {
    return blogs.map(({ id, title, blogBody }) => {
      return (
        <div key={id}>
          <div>{title}</div>
          <div>{blogBody}</div>
        </div>
      );
    });
  };

  return (
    <>
      <div>{renderList()}</div>
    </>
  );
}

export default App;
