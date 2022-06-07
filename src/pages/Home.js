import Header from "../components/Header"
import Logo from "../components/Logo"
import About from "../components/About"
import OurClients from "../components/OurClients"
import Navigation from "../components/Navigation"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navigation/>
      <Header />
      <Logo />
      <About />
      <OurClients />
      <Contact />
      <Footer />
    </>
  )
}

export default Home