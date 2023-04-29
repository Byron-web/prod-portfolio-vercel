import React from "react";
import Navbar from "./navbar";

const projects = () => {
  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="projects-container">
        <div className="row">
          <div className="github-repo-card">
            <img src="../static/me.png" alt="Deployed project" />
            <h2>Byron Labuschagne</h2>
            <p>This is my developer portfolio built using Angular</p>
            <a href="https://byron-labuschagne.com/">View Project</a>
          </div>
          <div className="github-repo-card">
            <img src="../static/todo.png" alt="Github repo" />
            <h3>Todo app</h3>
            <p>
              A simple todo app that allows the user to create "todos" and
              delete them
            </p>
            <a href="https://github.com/Byron-web/new-todo-app">View Repo</a>
          </div>

          <div className="github-repo-card">
            <img src="../static/itunes.png" alt="Github repo" />
            <h3>Itunes Search App</h3>
            <p>Search Itunes store for music, movies, books and more.</p>
            <a href="https://github.com/Byron-web/itunes-search-app">
              View Repo
            </a>
          </div>
        </div>
        <div className="row">
          <div className="github-repo-card">
            <img src="../static/cars.png" alt="Github repo" />
            <h3>Car Inventory app</h3>
            <p>
              App used to store information about a car including its current
              owner
            </p>
            <a href="https://github.com/Byron-web/mock-car-inventory">
              View Repo
            </a>
          </div>

          <div className="github-repo-card">
            <img src="../static/hangman.png" alt="Github repo" />
            <h3>Hangman App</h3>
            <p>A simple Budget app to manage personal budgets</p>
            <a href="https://github.com/Byron-web/hangman-app">View Repo</a>
          </div>
        </div>

        <style jsx>{`
          .projects-container {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            background-color: silver;
            height: 107vh;
          }

          .row {
            display: flex;
          }
          .project-card,
          .github-repo-card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #f2f2f2;
            padding: 2rem;
            border-radius: 1rem;
            margin: 2rem;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          }

          .project-card img,
          .github-repo-card img {
            width: 100%;
            max-width: 500px;
            height: auto;
            margin-bottom: 1rem;
          }

          .github-repo-card h3 {
            margin-top: 1rem;
          }

          .github-repo-card p {
            text-align: center;
          }

          .github-repo-card a {
            margin-top: 1rem;
            background-color: #1e90ff;
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            text-decoration: none;
            transition: background-color 0.3s ease;
          }

          .github-repo-card a:hover {
            background-color: #0080ff;
          }
        `}</style>
      </div>
    </div>
  );
};

export default projects;
