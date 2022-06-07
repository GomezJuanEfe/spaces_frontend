import Header from "../components/Header"
import Logo from "../components/Logo"
import About from "../components/About"
import OurClients from "../components/OurClients"
import Navigation from "../components/Navigation"

function Home() {
  return (
    <>
      <Navigation/>
      <Header />
      <Logo />
      <About />
      <OurClients />
    </>
  )
}

export default Home