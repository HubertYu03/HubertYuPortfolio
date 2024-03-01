import React, { useEffect } from "react";

const Experience = ({ setCurrentPage }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#252422";
    setCurrentPage("experience-link");
  }, []);

  return <div>Experience</div>;
};

export default Experience;
