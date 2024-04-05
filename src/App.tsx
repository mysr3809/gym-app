import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
}

export default App;
