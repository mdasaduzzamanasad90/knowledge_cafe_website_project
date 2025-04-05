import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
const Blogs = ({addtobookmark , addspendtime}) => {
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setblogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl my-5 text-center">Blogs:{blogs.length}</h1>

      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} addtobookmark={addtobookmark} addspendtime={addspendtime}></Blog>
      ))}
    </div>
  );
};

Blogs.PropTypes = {
  addtobookmark: PropTypes.func,
  addspendtime:PropTypes.func
};

export default Blogs;
