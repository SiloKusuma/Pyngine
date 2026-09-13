import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Home.css'

export default function Home() {
  const features = [
    {
      icon: '⚙️',
      title: 'Lightweight',
      description: 'Built on pygame-ce, minimal dependencies, easy to install'
    },
    {
      icon: '🏗️',
      title: 'Modular',
      description: 'Component-based architecture, extend easily with custom components'
    },
    {
      icon: '🎮',
      title: 'Game Focused',
      description: 'Everything you need for 2D games: scenes, entities, physics, and more'
    },
    {
      icon: '🚀',
      title: 'Developer Friendly',
      description: 'Clear APIs, great documentation, and helpful examples'
    },
    {
      icon: '📦',
      title: 'Full Project System',
      description: 'Manage projects, assets, scenes, and configurations easily'
    },
    {
      icon: '🛠️',
      title: 'CLI Tools',
      description: 'Command-line tools for project creation, building, and management'
    }
  ]

  const phases = [
    { num: 1, status: '✓', title: 'Core Engine', desc: 'Project system, game loop, entities' },
    { num: 2, status: '→', title: 'Sprites & Resources', desc: 'Rendering, textures, caching' },
    { num: 3, status: '⏳', title: 'Physics', desc: 'Collisions, gravity, dynamics' },
    { num: 4, status: '⏳', title: 'Audio & UI', desc: 'Sound, music, interface elements' },
    { num: 5, status: '⏳', title: 'Scripting & Editor', desc: 'Python scripting, GUI editor' },
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-highlight">Pyngine</span>
              <br />
              2D Game Engine for Python
            </h1>
            <p className="hero-subtitle">
              Lightweight, modular, and easy to use. Build games with Python.
            </p>
            <div className="hero-actions">
              <Link to="/get-started" className="btn btn-primary">
                Get Started
              </Link>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View on GitHub
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-shape shape-1"></div>
            <div className="hero-shape shape-2"></div>
            <div className="hero-shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Features</h2>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="quick-start">
        <div className="container">
          <h2 className="section-title">Quick Start</h2>
          <div className="quick-start-grid">
            <div className="quick-start-step">
              <div className="step-number">1</div>
              <h3>Install</h3>
              <p>Windows: Run <code>install.bat</code></p>
              <p>Linux/Mac: <code>pip install -r requirements.txt</code></p>
            </div>
            <div className="quick-start-step">
              <div className="step-number">2</div>
              <h3>Create Project</h3>
              <p><code>python main.py create MyGame</code></p>
            </div>
            <div className="quick-start-step">
              <div className="step-number">3</div>
              <h3>Run Game</h3>
              <p><code>python main.py run MyGame</code></p>
            </div>
            <div className="quick-start-step">
              <div className="step-number">4</div>
              <h3>Build & Deploy</h3>
              <p><code>python main.py build MyGame</code></p>
            </div>
          </div>
          <div className="quick-start-link">
            <Link to="/get-started" className="btn btn-primary">
              Read Full Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Phases Section */}
      <section className="phases">
        <div className="container">
          <h2 className="section-title">Development Roadmap</h2>
          <div className="phases-grid">
            {phases.map((phase, idx) => (
              <div key={idx} className={`phase-card phase-${phase.num}`}>
                <div className="phase-header">
                  <span className="phase-number">Phase {phase.num}</span>
                  <span className="phase-status">{phase.status}</span>
                </div>
                <h3>{phase.title}</h3>
                <p>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Build Games?</h2>
          <p>Start with Pyngine today and create amazing 2D games</p>
          <Link to="/get-started" className="btn btn-primary btn-large">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}
