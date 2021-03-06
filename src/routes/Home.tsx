
import { Fragment } from "react"
import AboutMe from "../components/AboutMe"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HeroHome from "../components/HeroHome"


const Home = () => {
  return (
    <>
      <div className="bg-slim-purple">
        <Header />
        <HeroHome />
        <div className="spacer"></div>
      </div>
      <AboutMe />
      <Footer />
    </>
  )
}

export default Home