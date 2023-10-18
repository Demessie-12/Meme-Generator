import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src={require("../images/Demessie.jpg")}
        alt="logo"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project Meme</h4>
    </header>
  );
}
