import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmark,time}) => {
  return (
    <div className="md:w-1/3">
      <h2 className="my-5 text-4xl text-center">Spent time on read : {time}</h2>
      <h2 className="my-5 text-4xl text-center">Bookmarked Blogs : {bookmark.length}</h2>

      {
        bookmark.map((bookmark,idx) =><Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
      }
    </div>
  );
};

export default Bookmarks;
