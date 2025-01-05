import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog , handleBookmark, handleMarkAsRead}) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full" src={cover} alt="" />
      <div className="space-y-3">
        <div className="flex justify-between mt-4">
          <div className="flex gap-4">
            <img className=" h-10" src={author_img} alt="" />
            <div>
              <h4 className="font-medium">{author}</h4>
              <p className="text-sm">{posted_date}</p>
            </div>
          </div>
          <button onClick={()=> handleBookmark(blog)} className="cursor-pointer flex items-center gap-1">{reading_time} min read
            <CiBookmark></CiBookmark>
          </button>
        </div>
        <h2 className="text-3xl font-medium">{title}</h2>
        <p className="flex">
          {hashtags.map((hash, idx) => (
            <p className="mr-4 text-sm text-gray-600" key={idx}>
              #{hash}
            </p>
          ))}
        </p>
        <button onClick={() => handleMarkAsRead(id,reading_time)} className="text-[15px] text-purple-800 underline">
          Mark as Read
        </button>
      </div>
      <hr className="my-6" />
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};

export default Blog;
