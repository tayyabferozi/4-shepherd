import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Stats from "./components/Stats/Stats";
import Features from "./components/Features/Features";
import Play from "./components/Play/Play";
import Art from "./components/Art/Art";
import About from "./components/About/About";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import { LanguageContextProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageContextProvider>
      <Navbar />
      <Landing />
      <Stats />
      <Features />
      <Play />
      <Art />
      <About />
      <FAQ />
      <Footer />
    </LanguageContextProvider>
  );
}

export default App;
