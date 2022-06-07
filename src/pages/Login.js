function Login() {
  return (
    <>
    <section className="login">
      <h3>Log in</h3>
      <form>
        <input type="email" placeholder="Email address" name="userEmail"/>
        <input type="password" placeholder="Password" name="userPsw"/>
        <input type="submit" value="Submit" />
      </form>
    </section>
    </>
  )
}

export default Login;