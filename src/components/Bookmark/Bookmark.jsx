import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    
    const {title} = bookmark;
    return (
        <div>
            <h1 className="text-center my-2">{title}</h1>
        </div>
    );
};

Bookmark.Proptype = {
    bookmark: PropTypes.array.isRequired,
}

export default Bookmark;