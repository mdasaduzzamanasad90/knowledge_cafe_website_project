const Bookmarks = ({bookmark}) => {
  return (
    <div className="md:w-1/3">
      <h2 className="my-5 text-4xl text-center">Bookmarks:{bookmark.length}</h2>
    </div>
  );
};

export default Bookmarks;
