import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Play from "./components/Play/Play";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Stats />
      <Features />
      <Play />
      <About />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
