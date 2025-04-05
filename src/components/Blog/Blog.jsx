import { CiBookmark } from "react-icons/ci";
import PropTypes from "prop-types";



const Blog = ({ blog, addtobookmark,addspendtime }) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
    id
  } = blog;
  return (
    <div>
      <img className="w-full mb-5" src={cover} alt="" />
      <div className="flex justify-between items-center mb-3">
        <div className="flex gap-3 items-center">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h1>{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex">
          <p>{reading_time} min read</p>
          <button onClick={() => addtobookmark(blog)}><CiBookmark></CiBookmark></button>
        </div>
      </div>
      <h1 className="text-4xl mb-3">{title}</h1>
      <p className="mb-3">{hashtags}</p>
      <button onClick={() =>addspendtime(id,reading_time)} className="underline text-blue-600 mb-5">Mark as read</button>
    </div>
  );
};

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  addtobookmark: PropTypes.func,
  addspendtime:PropTypes.func
};

export default Blog;
