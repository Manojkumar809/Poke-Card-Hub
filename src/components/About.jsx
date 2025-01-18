import React, { useState } from 'react';
import "../App.css";

const About = () => {
  return (
    <div className="about">
      <h2>About Poke Card Hub</h2>
      <p>
        Welcome to **Poke Card Hub**, a comprehensive application for Pokemon enthusiasts! With Poke Card Hub, you can explore the vast world of Pokemon, search for your favorite Pokemon, and view detailed information on each one.
      </p>
      <h3>Features</h3>
      <ul>
        <li>View multiple pokemon cards</li>
        <li>Display detailed stats, types, abilities, and more for each Pokemon</li>
        <li>Explore a collection of Pokemon cards and their attributes</li>
        <li>Responsive and easy-to-use interface built with ReactJS</li>
      </ul>

      <h3>Technologies Used</h3>
      <ul>
        <li><strong>ReactJS</strong> - A powerful JavaScript library for building user interfaces</li>
        <li><strong>Pokemon API</strong> - The public API that provides data about all Pokemon</li>
        <li><strong>CSS</strong> - For styling and creating a beautiful user interface</li>
      </ul>

      <h3>Future Enhancements</h3>
      <ul>
        <li>Adding Pokemon evolutions and their respective stats</li>
        <li>Allowing users to create custom Pokemon teams</li>
        <li>Integration of additional Pokemon datasets like moves and habitats</li>
      </ul>

      <h3>Acknowledgements</h3>
      <p>
        Special thanks to the open-source community for providing the **Pokemon API** used in this project. 
      </p>
    </div>
  )
}

export default About