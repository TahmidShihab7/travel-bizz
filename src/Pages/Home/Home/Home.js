import React from "react";
import Blogs from "../../Blogs/Blogs";
import Guides from "../../Guides/Guides";

import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div id="home">
      <Banner></Banner>
      <div id="services">
        <Services></Services>
      </div>
      <div id="blogs">
        <Blogs></Blogs>
      </div>
      <div id="guides">
        <Guides></Guides>
      </div>
    </div>
  );
};

export default Home;
