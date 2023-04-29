import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link legacyBehavior href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/projects">
            <a className="nav-link">Projects</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link legacyBehavior href="/contact">
            <a className="nav-link">Contact</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          background-color: #eee;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
        }

        .navbar-nav {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          margin-right: 1rem;
        }

        .nav-link {
          color: #333;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }

        .nav-link:hover {
          color: #007bff;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
