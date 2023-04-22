import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Contact me through</h1>
      <Link to="https://web.whatsapp.com/">Watsup</Link>
      <ul style={{ backgroundColor: "green" }}>
        <h2 style={{ color: "pink" }}>Name:-Ayush Tiwari</h2>
        <li>Mob No:-7999987925</li>
        <li>Address:-Rewa,Near Doctor's Colony</li>
      </ul>
    </div>
  );
};

export default Contact;
