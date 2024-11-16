import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">

      <div className=""></div>

      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      <div className="flex gap-2  items-center">
        <img className="h-8"  src={userIcon} alt="" />
        <button className="btn bg-black h-5 btn-sm rounded-none text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
