import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks, markAsRead }) => {
  return (
    <div className="w-1/3">
      <div>
        <h3 className="text-xl font-medium text-[#6047EC] bg-[#6047EC1A] border border-[#6047EC] py-4 px-6 rounded-lg">Spent time on read: {markAsRead} </h3>
      </div>
      <div className="bg-[#1111110D] rounded-lg p-4 mt-4">
        <h3 className="text-xl font-bold">
          Bookmarks Blogs: {bookmarks.length}{" "}
        </h3>
        <div className="space-y-2 mt-3">
          {bookmarks.map((bookmark, idx) => (
            <div className="bg-white p-2 rounded-lg" key={idx}>
              <h4 className="font-medium text-sm">{bookmark.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.object,
  markAsRead : PropTypes.object
};

export default Bookmarks;
