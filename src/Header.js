import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/#"><h1>Origin-The Transcoder</h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutcontainer">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#inputbox">Use</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/feedback">Feedback</a>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
  )
}

export default Header