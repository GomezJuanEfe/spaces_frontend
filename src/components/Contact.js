import "../index.css";
import { useState } from "react";
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
        <div className={'text'}>
        <h1>Connect with us</h1>
         <span>Regiter in our website to get the real experience: </span>
         <p>
           if you register you can book spaces to start your Co-op process.
         </p>
        </div>
        <div className={'contact_form'}>
        <form  method="POST" action="http://localhost/FinalProject_phpCourse/pages/users.php" onSubmit={(event) => handleSubmit(event)} >
          <input type="email" name="user_email" class placeholder="Type the user email: " require/>
          <br/>
          <input type="password" name="user_password" className="user_password" placeholder="Password" required/>
          <br/>
          <select name="user_roll">
              <option value="costumer">Client</option>
          </select>
          <br/>
          <input type="text" name="user_firstName" placeholder="Type user first name: " required/>
          <br/>
          <input type="text" name="user_lastName" placeholder="Type user last name: " required/>
          <br/>
          <input type="text" name="user_address" placeholder="Type user address: "/>
          <br/>
          <button type="submit"> Register User</button>
      </form>
        </div>
          <div className="text2">
            <p>
              Dont forget to follow us in a social media to see all the news
              about us
            </p>
           <ul>
             <li>
               <a href="https://www.facebook.com" target={'_blank'}>facebook</a>
             </li>
             <li>
               <a href="https://www.instagram.com" target={'_blank'}>instagram</a>
             </li>
             <li>
               <a href="https://www.twitter.com" target={'_blank'}>Twitter</a>
             </li>
           </ul>
          </div>
        </>
    )
}
export default Contact;