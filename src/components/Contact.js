import "../index.css";
import $ from "jquery";
function Contact(){
  const handleSubmit = (event) => {
    const regForm = $(event.target);
    $.ajax({
      type: "POST",
      url: regForm.attr("Action"),
      data: regForm.serialize(),
      success(data) {
        console.log(data);
      }
    });
  }
    return(
        <>
        <section className={'matSection'}>
          <div className={'text'}>
            <h1>Contact us</h1>
            <p>
              Register. Stay connected. <br/> Get involved with us on our social media platforms.
            </p>
          </div>
          <div className={'text'} id="contact">
              <p>
                Register and book our Spaces today.
              </p>
          </div>
          <div className="text2">
            <p>
                Get involved on our social media platforms.
            </p>
          <ul>
            <li>
              <a href="https://www.facebook.com" target={'_blank'}>Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com" target={'_blank'}>Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com" target={'_blank'}>Twitter</a>
            </li>
          </ul>
          </div>
          <div className={'contact_form'}>
            <form method="POST" action="http://localhost/FinalProject_phpCourse/pages/manager/registerUserFront.php" onSubmit={(event) => handleSubmit(event)} >
              <input type="email" name="user_email" class placeholder="Email*" require />
              <br />
              <input type="password" name="user_password" className="user_password" placeholder="Password*" required />
              <br />
              <select name="user_roll">
                <option value="customer">Client</option>
              </select>
              <br />
              <input type="text" name="user_firstName" placeholder="First name*" required />
              <br />
              <input type="text" name="user_lastName" placeholder="Last name*" required />
              <br />
              <input type="text" name="user_address" placeholder="Address" />
              <br />
              <input type="text" name="User_phone" placeholder="Phone number" />
              <br />
              <button type="submit">Register</button>
            </form>
          </div>
        </section>
        </>
    )
}
export default Contact;