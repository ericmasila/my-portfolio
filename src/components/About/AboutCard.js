import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eric Masila </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />I am a Software engineer trained at ALX Africa. My educational
            journey has been marked by a commitment to both traditional
            engineering and the ever-evolving field of software engineering. I
            hold a Bachelor of Science degree in Electrical & Electronic
            Engineering, which has equipped me with a strong foundation in
            electrical systems and technology. I have honed my problem-solving
            skills, analytical thinking, and the ability to apply engineering
            principles to real-world challenges. Building upon this solid
            engineering background, I am currently pursuing further educational
            enrichment in the dynamic domain of software engineering through ALX
            Learning Academy. This program is designed to develop proficiency in
            software development, programming languages, and software
            architecture. As an aspiring software engineer, I am gaining
            hands-on experience in web and mobile application development,
            database management, and software design principles.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Analysing security on systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Eric</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
