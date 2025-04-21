"use client"
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import { store } from "./redux/store/store";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Porto from "./components/Porto";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div className="">
      <Provider store={store}> 
            <Navbar/>
            <Hero/>
            <AboutMe/>
            <Porto/>
            <Footer />
       </Provider>
    </div>
    
  );
}
