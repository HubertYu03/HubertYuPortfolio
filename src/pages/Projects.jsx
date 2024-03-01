import React, { useEffect } from "react";

const Projects = ({ setCurrentPage }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#CCC5B9";
    setCurrentPage("projects-link");
  }, []);

  return <div>Projects</div>;
};

export default Projects;
