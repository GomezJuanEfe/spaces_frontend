import { useState } from "react";
import $ from "jquery";

function Login() {
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
  return (
    <>
    <section className="login">
      <h3>Log in</h3>
        <form method="POST" action="http://localhost/FinalProject_phpCourse/login.php" onSubmit={(event) => handleSubmit(event)}>
        <input type="email" placeholder="Email address" name="userEmail"/>
        <input type="password" placeholder="Password" name="userPassword"/>
        <input type="submit" value="Submit" />
      </form>
    </section>
    </>
  )
}

export default Login;