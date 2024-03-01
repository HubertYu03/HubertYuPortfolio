import React, { useEffect } from "react";

const Contact = ({ setCurrentPage }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFCF2";
    setCurrentPage("contact-link");
  }, []);

  return <div>Contact</div>;
};

export default Contact;
