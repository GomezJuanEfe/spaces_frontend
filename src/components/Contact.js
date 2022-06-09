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
            <h2>Contact us</h2>
            <p>
              Register. Stay connected. <br/> Get involved with us on our social media platforms.
            </p>
                <a href="https://www.facebook.com" target={'_blank'}><img src="https://i.pinimg.com/originals/c1/c8/53/c1c853671c00982573a1b45e777d7725.png" alt="Instagram Icon" class="icon"/></a>
              
                <a href="https://www.instagram.com" target={'_blank'}><img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/instagram_black_logo_icon_147122.png" alt="Instagram Icon" class="icon"/></a>
              
                <a href="https://www.twitter.com" target={'_blank'}><img src="https://images.squarespace-cdn.com/content/v1/5d6523921b6c650001c8ea9b/1567029621475-3C89F7DSH2RB2YGCZN5Q/23681.png" alt="Twitter Icon" class="icon"/></a>
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