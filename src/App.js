import "./App.css";
import { NavTop } from "./components/NavTop";
import { Backgr } from "./components/Backgr";
import { ThreeBox } from "./components/ThreeBox";
import { Personal } from "./components/Personal";
import { Blog } from "./components/Blog";
import { Sepical } from "./components/Sepical";
import { Doctors } from "./components/Doctors";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
      <NavTop />
      <Backgr />
      <ThreeBox/>
      <Personal/>
      <Blog/>
      <Sepical/>
      <Doctors/>
      <Footer/>
      
    </>
  );
}

export default App;
