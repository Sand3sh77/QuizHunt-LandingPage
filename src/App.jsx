import { useState } from "react";
import "./App.css";
import Navbar from "./navbar/navbar";
import Slider from "./imageslider/slider";
import FirstContent from "./first_content/content";
import Hero from "./hero/hero";
import SecondContent from "./second_content";
import Forms from "./contacts/form";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero />
      <FirstContent />
      {/* <Slider /> */}
      {/* <SecondContent/> */}
      <Forms/>
    </div>
  );
}

export default App;
