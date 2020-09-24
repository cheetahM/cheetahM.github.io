import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div class="container">
      <div class="inner-header">
      <div class="logo">
        <Link to="/">Home</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
      </div>
      </div>
    </div>
  </header>
)


export default Header
