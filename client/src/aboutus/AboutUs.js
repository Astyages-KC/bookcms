import React from "react";
import "./about-us.css";

const AboutUs = () => {
  return (
    <div className="aboutUsPage">
        <div className="overlay">
      <h1 className="aboutUsHeader">Frank, Bob and Stan's Book Store</h1>
      <p className="aboutUsPara">
        Frank, Bob and Stan all met in the dungeons of Kalimdor. After a
        tireless campaign they were on the verge of defeating the Lich King. However,fate was not on their side. In a last ditch effort to escape,  the Lich
        King created a portal to another world. The three heroes were trapped in
        the portals vortex and transported to another world. This world...
        Unfortunately, this world did not need heroes with swords and magic. What it did
        need is a used book store. The heroes started Frank, Bob and Stan's Book
        Store! They spent all their gold on the store but realized they needed a
        way to catalog all their books. They contacted three experts in the
        field known as Jeff, Chris and Kevin. These three agreed to build a book
        inventory program in exchange for some good pixie dust.
      </p>
      <br />
      <p>
        {" "}
        If you would like to help Frank, Bob and Stan, come in today and checkout
        our book selection!
      </p>{" "}
      It is located at: <br />
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.824391072044!2d-111.89096304924483!3d40.76588697922457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d90ac6f5f849f%3A0x753ca3de42f42830!2sV%20School!5e0!3m2!1sen!2sus!4v1571773978795!5m2!1sen!2sus" className="aboutIframe"></iframe>
      </div>
    </div>
  );
};

export default AboutUs;
