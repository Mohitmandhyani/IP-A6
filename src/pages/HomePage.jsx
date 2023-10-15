import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Section from "../components/Section/Section.jsx";
import ProfileInfo from "../components/ProfileInfo/ProfileInfo";
const Home = () => {
  return (
    <>
      <Navbar />
      <Section />
      <div style={{ marginLeft: 100 }}>
        <ProfileInfo
          name={"GitHub"}
          username={"mohitmandhyani"}
          email={"2021.mohit.mandhyanives.ac.in"}
          link={"https://github.com/"}
        />
        <ProfileInfo
          name={"LinkedIn"}
          username={"mohitmandhyani"}
          email={"mandhyanimohit10@gmail.com"}
          link={"https://www.linkedin.com/in/mohit-mandhyani-b68148212/"}
        />
      </div>
    </>
  );
};
export default Home;
