import React from 'react'
import '../styles/pages/Documentation.css'

export default function GetStarted() {
  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Getting Started</h4>
            <ul>
              <li><a href="#installation">Installation</a></li>
              <li><a href="#windows-installer">Windows Installer</a></li>
              <li><a href="#manual-setup">Manual Setup</a></li>
              <li><a href="#create-project">Create Project</a></li>
              <li><a href="#run-project">Run Project</a></li>
              <li><a href="#next-steps">Next Steps</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Getting Started with Pyngine</h1>
            <p>Learn how to install Pyngine and create your first game</p>
          </div>

          <section id="installation">
            <h2>Installation</h2>
            <p>Pyngine requires Python 3.12 or higher. Choose your platform:</p>
          </section>

          <section id="windows-installer">
            <h3>Windows (Easiest)</h3>
            <div className="code-block">
              <pre><code>1. Download the Pyngine folder
2. Double-click <strong>install.bat</strong>
3. Follow the prompts
4. Done! ✓</code></pre>
            </div>
            <p>The installer will:</p>
            <ul>
              <li>Check for Python 3.12+</li>
              <li>Download and install Python if needed</li>
              <li>Create a virtual environment</li>
              <li>Install all dependencies</li>
              <li>Verify the installation</li>
            </ul>
          </section>

          <section id="manual-setup">
            <h3>Manual Installation</h3>
            <div className="code-block">
              <pre><code>{`# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\\Scripts\\activate.bat  # Windows
source venv/bin/activate   # Linux/Mac

# Install dependencies
pip install -r requirements.txt`}</code></pre>
            </div>
          </section>

          <section id="create-project">
            <h2>Create Your First Project</h2>
            <div className="code-block">
              <pre><code>python main.py create MyFirstGame</code></pre>
            </div>
            <p>This creates a project structure:</p>
            <div className="code-block">
              <pre><code>{`MyFirstGame/
├── project.json        # Project configuration
├── scenes/
│   └── main.json       # Default scene
├── assets/             # Images, sounds, etc
├── scripts/            # Python scripts
└── build/              # Build output`}</code></pre>
            </div>
          </section>

          <section id="run-project">
            <h2>Run Your Project</h2>
            <div className="code-block">
              <pre><code>python main.py run MyFirstGame</code></pre>
            </div>
            <p>Your game window should open with an empty scene.</p>
          </section>

          <section id="next-steps">
            <h2>Next Steps</h2>
            <div className="next-steps-grid">
              <div className="next-step-card">
                <h4>🎮 Learn the Basics</h4>
                <p>Understand scenes, objects, and components</p>
              </div>
              <div className="next-step-card">
                <h4>🔨 Build Your Game</h4>
                <p>Create game objects and add components</p>
              </div>
              <div className="next-step-card">
                <h4>📖 Read Documentation</h4>
                <p>Explore scenes, entities, and components</p>
              </div>
              <div className="next-step-card">
                <h4>💡 Check Examples</h4>
                <p>See practical examples of Pyngine games</p>
              </div>
            </div>
          </section>

          <section className="troubleshooting">
            <h2>Troubleshooting</h2>
            
            <div className="trouble-item">
              <h4>Python not found</h4>
              <p>Make sure Python 3.12+ is installed. Download from <a href="https://www.python.org">python.org</a></p>
            </div>

            <div className="trouble-item">
              <h4>Import errors</h4>
              <p>Make sure you're using the virtual environment:</p>
              <div className="code-block">
                <pre><code>venv\Scripts\activate.bat  # Windows</code></pre>
              </div>
            </div>

            <div className="trouble-item">
              <h4>pygame-ce not found</h4>
              <p>Reinstall dependencies:</p>
              <div className="code-block">
                <pre><code>pip install -r requirements.txt</code></pre>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
