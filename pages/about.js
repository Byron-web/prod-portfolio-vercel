import React from "react";
import Navbar from "./navbar";

const About = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div>
          <div className="card">
            <div>
              <h1 className="card-title">About Me</h1>
              <p className="card-text">
                I'm a software developer with a passion for computers,
                technological innovation, and web development. I love building
                things. While complex technological problems are often
                intrinsically fun to solve, I'm most attracted to solving
                real-world customer problems with a business justification. I'm
                looking for a junior software developer role where I can take on
                a set of collaborative tasks that contribute to the success of
                the organization while gaining experience with the latest
                development technologies and architectural principles. I'm a
                technical hobbyist at heart, but I do keep myself up to date as
                much as possible with the latest trends in software development.
                I am a strong believer in personal development and I keep myself
                up to date through courses on Udemy.
              </p>
              <p className="card-text">
                <strong>Work History - UI/UX + Web Development</strong>
                <br />
                Neighbiz | Jul 22/11/9 --- Aug 20/02/22
                <br />
                <strong>Roles & Responsibilities:</strong>
                <ul>
                  <li>Prototyping with Flinto (both web and mobile app).</li>
                  <li>
                    UI/UX Design using Sketch and Figma and integrating the
                    designs into Flinto for prototyping.
                  </li>
                  <li>Web development using HTML5, CSS3 and Bootstrap.</li>
                  <li>Web development using Vue.js and Bootstrap Vue.</li>
                  <li>
                    Minor IT support in the office (fixed minor issues on work
                    pc’s, networks and printers).
                  </li>
                  <li>
                    Was involved in creative meetings and engaged in discussions
                    involving social marketing, branding, exposure as well as
                    technical meetings involving debugging and strategies in
                    improving the applications overall.
                  </li>
                </ul>
              </p>
              <p className="card-text">
                <strong>Educational History - IT Academy</strong>
                <br />
                Web and Graphics Course
                <br />
                MS 70 - 480 Programming
                <br />
                <strong>Course Subjects:</strong>
                <ul>
                  <li>Web Design Essentials</li>
                  <li>JavaScript Essentials</li>
                  <li>Responsive Web Design</li>
                  <li>MC Web App (70 – 480)</li>
                  <li>Adobe CC Overview</li>
                  <li>Acrobat</li>
                  <li>Dreamweaver</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Javascript (EcmaScript)</li>
                  <li>InDesign</li>
                  <li>Flash</li>
                  <li>Bootstrap</li>
                  <li>Drupal</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                  <li>Type Kit Programming courses</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                </ul>
              </p>
              <p className="card-text">
                <strong>
                  I have experience working with React, Node.js, and MongoDB. I
                  have built small projects using these technologies and I'm
                  eager to gain more experience with them. css Copy code Outside
                  of work and studying, I enjoy hiking, reading books, and
                  playing video games. I also like to stay up to date with the
                  latest tech news and trends. If you're interested in working
                  together or have any questions, feel free to contact me at
                  [insert email here].
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-title {
          background-color: #8b8b8b;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default About;
