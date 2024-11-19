import Features from "./container/Features"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import ChallengeList from "./container/ChallengeList"

function App() {

  return (
    <>
      <Navbar name="Yugu"/>
      <ChallengeList />
      <Features />
      <Footer />
    </>
  )
}

export default App
