import PropTypes from "prop-types";
import profle_img from "../../assets/images/profile.png";
const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center mt-4 mb-8 border-b">
        <h1 className="text-4xl font-bold">Tech Talk</h1>
        <img src={profle_img} alt="" />
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
