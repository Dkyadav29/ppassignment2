import Carousel from "@/components/carousel"
import Firstsection from "./firstsection/page"
import Navbar from "./navbar/page"
import AchievementPage from "./fifthsection/page"
import Footer from "./footer/page"
import Body from "./fourthsection/page"
import ThirdSection from "./thirdsection/page"
import Clients from "./secondsection/page"
 

const Home = () => {
  return (
    <>
      <Navbar />
      <Firstsection />
      {/* <Carousel /> */}
      <Clients />
      <ThirdSection />
      <Body />
      <AchievementPage />
      <Footer/>
    </>
  )
}

export default Home
