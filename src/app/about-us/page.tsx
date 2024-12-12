import React from "react";
import "./style.css";
import type { Metadata } from "next";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our team and mission.",
};

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-heading">About Us</h1>
        <p className="about-description">
          We are a passionate and dedicated team committed to delivering innovative and high-quality solutions. 
          Our mission is to create impactful services and products that make a difference in the world.
        </p>
        <div className="team-section">
          <h2 className="team-heading">Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/dev1.jpg" alt="Team Member 1" className="team-img" />
              <h3>Hashim</h3>
              <p>CEO & Founder</p>
            </div>
            <div className="team-member">
              <img src="/dev2.jpg" alt="Team Member 2" className="team-img" />
              <h3>Hashim</h3>
              <p> Doctor</p>
            </div>
            <div className="team-member">
              <img src="/dev3.jpg" alt="Team Member 3" className="team-img" />
              <h3>Hashim</h3>
              <p>Nurse</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
