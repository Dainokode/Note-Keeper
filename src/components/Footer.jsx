import React from "react";

const today = new Date();
const fullYear = today.getFullYear();

const Footer = () => {
  return (
    <footer>
      <small>Copyright &copy; {fullYear} </small>
    </footer>
  );
};

export default Footer;
