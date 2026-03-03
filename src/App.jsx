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
import BlogPage from "./Components/blogPage"
import ContactPage from "./Components/contactPage";
import '../src/index.css'
import Offer from "./Components/offer";
import BlogPostOne from "./Components/blogPostOne";
import BlogPostTwo from "./Components/blogPostTwo";
import BlogPostThree from "./Components/blogPostThree";


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
        <Route path="/passion" element={<Offer />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog/post-one" element={<BlogPostOne />} />
        <Route path="/blog/post-two" element={<BlogPostTwo />} />
        <Route path="/blog/post-three" element={<BlogPostThree />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;