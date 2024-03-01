import React, { useEffect } from "react";

const Home = ({ setCurrentPage }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#403D39";
    setCurrentPage("home-link");
  }, []);

  return <div>Home</div>;
};

export default Home;
