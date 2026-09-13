import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/App.css'

// Pages
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import Scenes from './pages/Scenes'
import Entities from './pages/Entities'
import Components from './pages/Components'
import Physics from './pages/Physics'
import Input from './pages/Input'
import CLI from './pages/CLI'
import Examples from './pages/Examples'
import Contributing from './pages/Contributing'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="logo">
                  <span className="logo-icon">⚙️</span>
                  <span className="logo-text">Pyngine</span>
                </Link>
              </div>
              
              <button 
                className="menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>

              <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
                <li><Link to="/get-started" onClick={() => setMobileMenuOpen(false)}>Get Started</Link></li>
                <li className="dropdown-parent">
                  <span>Documentation ▼</span>
                  <ul className="dropdown">
                    <li><Link to="/scenes" onClick={() => setMobileMenuOpen(false)}>Scenes</Link></li>
                    <li><Link to="/entities" onClick={() => setMobileMenuOpen(false)}>Entities</Link></li>
                    <li><Link to="/components" onClick={() => setMobileMenuOpen(false)}>Components</Link></li>
                    <li><Link to="/input" onClick={() => setMobileMenuOpen(false)}>Input</Link></li>
                    <li><Link to="/physics" onClick={() => setMobileMenuOpen(false)}>Physics</Link></li>
                  </ul>
                </li>
                <li><Link to="/examples" onClick={() => setMobileMenuOpen(false)}>Examples</Link></li>
                <li><Link to="/cli" onClick={() => setMobileMenuOpen(false)}>CLI</Link></li>
                <li><Link to="/contributing" onClick={() => setMobileMenuOpen(false)}>Contributing</Link></li>
              </ul>

              <div className="navbar-actions">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub ↗
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/scenes" element={<Scenes />} />
            <Route path="/entities" element={<Entities />} />
            <Route path="/components" element={<Components />} />
            <Route path="/physics" element={<Physics />} />
            <Route path="/input" element={<Input />} />
            <Route path="/cli" element={<CLI />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/contributing" element={<Contributing />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Pyngine</h4>
                <p>A lightweight 2D game engine for Python</p>
              </div>
              <div className="footer-section">
                <h4>Documentation</h4>
                <ul>
                  <li><Link to="/get-started">Getting Started</Link></li>
                  <li><Link to="/scenes">Scenes</Link></li>
                  <li><Link to="/components">Components</Link></li>
                  <li><Link to="/cli">CLI</Link></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Community</h4>
                <ul>
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">Issues</a></li>
                  <li><a href="#">Discussions</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Resources</h4>
                <ul>
                  <li><Link to="/examples">Examples</Link></li>
                  <li><Link to="/contributing">Contributing</Link></li>
                  <li><a href="#">License</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2026 Pyngine. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
