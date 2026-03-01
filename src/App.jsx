// import Header from "./Components/Header";
// import '../src/index.css'
// import Banner from "./Components/Banner";
// import About from "./Components/About";
// import Passion from "./Components/Passion";
// import Blog from "./Components/Blog";
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer";


// function App() {
//   return (
//       <>
//       <Header />
//       <Banner />
//       <About />
//       <Passion />
//       <Blog />
//       <Contact />
//       <Footer/>
//       </>
//     )
// }

// export default App




import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Passion from "./Components/Passion";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import AboutPage from "./Components/aboutPage"; // Ensure this matches your file name
import Footer from "./Components/Footer";
import '../src/index.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Main Landing Page */}
        <Route path="/" element={
          <>
            <Banner />
            <About />
            <Passion />
            <Blog />
            <Contact />
          </>
        } />

        {/* Individual Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/passion" element={<Passion />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;