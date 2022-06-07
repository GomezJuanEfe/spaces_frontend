import logo from '../media/spaces_logo.png'

function NavBar() {
  return (
    <>
    <section className='navBar'>
      <div className="navBar-top">
        <span>
          <img src={logo} alt="logo"/>
        </span>
        <ul>
          <li><a href='#'>Contact Us</a></li>
          <li><a href='#'>Log In</a></li>
        </ul>
      </div>

      <div className="navBar-bottom">
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Our Clients</a></li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default NavBar;