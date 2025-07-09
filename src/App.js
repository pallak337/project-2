import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <span className="navbar-brand">Portfolio</span>
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link text-warning" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
          <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
      </nav>

      
      <section id="home" className="hero-section d-flex justify-content-between align-items-center px-5 py-5">
        <div className="text-white">
          <h1>Hi, I'm <span className="text-warning">Pallak</span></h1>
          <p>Full Stack Developer passionate about creating innovative web solutions</p>
          <button className="btn btn-warning me-3">View My Work</button>
          <button className="btn btn-outline-light">Get In Touch</button>
        </div>
        <img
          src="https://www.pexels.com/photo/happy-ethnic-woman-sitting-at-table-with-laptop-3769021/" // placeholder image
          alt="Pallak"
          className="rounded-circle profile-img"
        />
      </section>

      
      <section id="about" className="text-center p-5">
        <h2>About Me</h2>
        <p className="lead">I'm a passionate full-stack developer with 3+ years of experience...</p>
        <div className="row mt-4">
          <div className="col-md-4"><div className="p-3 border rounded shadow-sm"> <h5>Clean Code</h5><p>Writing maintainable, scalable code that follows best practices</p></div></div>
          <div className="col-md-4"><div className="p-3 border rounded shadow-sm"> <h5>Responsive Design</h5><p>Creating beautiful, mobile-first designs that work on all devices</p></div></div>
          <div className="col-md-4"><div className="p-3 border rounded shadow-sm"> <h5>Performance</h5><p>Optimizing applications for speed and best user experience</p></div></div>
        </div>
      </section>

      
      <section id="skills" className="bg-light text-center p-5">
        <h2>Skills</h2>
        <div className="row text-start mt-4">
          <div className="col-md-6">
            <p>JavaScript</p>
            <div className="progress mb-3"><div className="progress-bar" style={{ width: "90%" }}>90%</div></div>
            <p>Node.js</p>
            <div className="progress mb-3"><div className="progress-bar" style={{ width: "80%" }}>80%</div></div>
            <p>MongoDB</p>
            <div className="progress mb-3"><div className="progress-bar" style={{ width: "70%" }}>70%</div></div>
          </div>
          <div className="col-md-6">
            <p>React</p>
            <div className="progress mb-3"><div className="progress-bar" style={{ width: "85%" }}>85%</div></div>
            <p>Python</p>
            <div className="progress mb-3"><div className="progress-bar" style={{ width: "75%" }}>75%</div></div>
            <p>AWS</p>
            <div className="progress mb-3"><div className="progress-bar" style={{ width: "65%" }}>65%</div></div>
          </div>
        </div>
      </section>

      
      <section id="projects" className="text-center p-5">
        <h2>Featured Projects</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card p-3">
              <h5>E-Commerce Platform</h5>
              <p>Full-stack web app built with React, Node.js, MongoDB</p>
              <div className="mb-2">
                <span className="badge bg-secondary me-1">React</span>
                <span className="badge bg-secondary me-1">Node.js</span>
                <span className="badge bg-secondary me-1">MongoDB</span>
                <span className="badge bg-secondary">Express</span>
              </div>
              <button className="btn btn-outline-primary btn-sm me-2">Code</button>
              <button className="btn btn-primary btn-sm">Demo</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Task Management App</h5>
              <p>Responsive app with real-time updates</p>
              <div className="mb-2">
                <span className="badge bg-secondary me-1">React Native</span>
                <span className="badge bg-secondary me-1">Firebase</span>
                <span className="badge bg-secondary">Redux</span>
              </div>
              <button className="btn btn-outline-primary btn-sm me-2">Code</button>
              <button className="btn btn-primary btn-sm">Demo</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3">
              <h5>Data Visualization Dashboard</h5>
              <p>Interactive dashboard for analytics</p>
              <div className="mb-2">
                <span className="badge bg-secondary me-1">D3.js</span>
                <span className="badge bg-secondary me-1">Python</span>
                <span className="badge bg-secondary me-1">Flask</span>
                <span className="badge bg-secondary">PostgreSQL</span>
              </div>
              <button className="btn btn-outline-primary btn-sm me-2">Code</button>
              <button className="btn btn-primary btn-sm">Demo</button>
            </div>
          </div>
        </div>
      </section>

      
      <footer id="contact" className="bg-dark text-white text-center p-5">
        <h2>Get In Touch</h2>
        <p>Have a project in mind? Let's work together!</p>
        <div className="row">
          <div className="col-md-4">Email<br />pallak23@gmail.com</div>
          <div className="col-md-4">Phone<br />+91 683-784-9264</div>
          <div className="col-md-4">Location<br />Bhubaneswar, Odisha</div>
        </div>
        <div className="mt-3">
          <button className="btn btn-outline-light me-2">LinkedIn</button>
          <button className="btn btn-outline-light me-2">GitHub</button>
          <button className="btn btn-outline-light">Twitter</button>
        </div>
        <div className="mt-4">© 2025 Pallak. All rights reserved.</div>
      </footer>
    </>
  );
}

export default App;