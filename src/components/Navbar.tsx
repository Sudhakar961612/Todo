import logo from "../images/logo.png";
import search from "../images/search.png";
import vector from "../images/Vector.png";
import grid from "../images/app-grid.png";
import menubar from "../images/menu.png";
const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-10">
        <img src={menubar} />
        <img src={logo} />
      </div>
      <div className="flex-1 flex items-center justify-end gap-10">
        <img src={search} />
        <img src={grid} />
        <img src={vector} />
      </div>
    </div>
  );
};

export default Navbar;
