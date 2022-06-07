import { Outlet, Link } from "react-router-dom";
import logo from "../media/spaces_logo.png";

function Layout() {
  return (
    <>
      <section className='navBar'>
        <div className="navBar-top">
          <span>
            <img src={logo} alt="logo" />
          </span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default Layout;