import React from "react";
import ContainerNotes from "./ContainerNotes";
import "../../../scss/pages/_Home.scss";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      
        <NavBar />
        <div className="home__page">
        <ContainerNotes />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
