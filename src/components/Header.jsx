import "./Header.css";
/* import Uploads from "../Uploads"; */
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>InstaHack</h1>
      <div className="arrow"> 》</div>
      <Link to="/posts">📷</Link>
      {/* 
      <Upload /> */}
    </header>
  );
}
export default Header;
