import "./../style.css";
function Contact(){
    return(
        <>
        <div className={'text'}>
        <h1>Contact us</h1>
          <p>
            Register to our website to get real experience
          </p>
        </div>
        <div className={'contact_form'}>
        <form  method="POST">
          <input type="email" name="user_email" placeholder="Type the user email: " require/>
          <br/>
          <input type="password" name="user_password" placeholder="Password" required/>
          <br/>
          <input type="text" name="user_firstName" placeholder="Type user first name: " required/>
          <br/>
          <input type="text" name="user_lastName" placeholder="Type user last name: " required/>
          <br/>
          <input type="text" name="user_address" placeholder="Type user address: "/>
          <br/>
          <input type="text"/>
          <br/>
          <button type="submit"> Register User</button>
      </form>
        </div>
        </>
    )
}
export default Contact;