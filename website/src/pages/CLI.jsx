import React from 'react'
import '../styles/pages/Documentation.css'

export default function CLI() {
  const commands = [
    {
      cmd: 'python main.py version',
      desc: 'Show Pyngine version',
      example: '$ python main.py version\nPyngine v0.1.0'
    },
    {
      cmd: 'python main.py create <name>',
      desc: 'Create a new project',
      example: '$ python main.py create MyGame\nProject created at: ./MyGame'
    },
    {
      cmd: 'python main.py run <project>',
      desc: 'Run a project',
      example: '$ python main.py run MyGame\nLoading project...\nRunning game...'
    },
    {
      cmd: 'python main.py editor <project>',
      desc: 'Open editor (Phase 5)',
      example: '$ python main.py editor MyGame\nOpening editor...'
    },
    {
      cmd: 'python main.py build <project>',
      desc: 'Build/export project (Phase 6)',
      example: '$ python main.py build MyGame\nBuilding project...'
    }
  ]

  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>CLI Commands</h4>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#commands">Commands</a></li>
              <li><a href="#examples">Examples</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Command Line Interface</h1>
            <p>Manage your Pyngine projects from the command line</p>
          </div>

          <section id="overview">
            <h2>Overview</h2>
            <p>Pyngine provides a command-line interface for project management. All commands start with <code>python main.py</code>.</p>
          </section>

          <section id="commands">
            <h2>Available Commands</h2>
            {commands.map((item, idx) => (
              <div key={idx} className="api-method">
                <div className="api-method-name">{item.cmd}</div>
                <div className="api-method-desc">{item.desc}</div>
                <div className="code-block">
                  <pre><code>{item.example}</code></pre>
                </div>
              </div>
            ))}
          </section>

          <section id="examples">
            <h2>Usage Examples</h2>

            <h3>Create and Run Your First Game</h3>
            <div className="code-block">
              <pre><code>{`# Step 1: Create a new project
python main.py create MyFirstGame

# Step 2: Navigate to the project (optional)
cd MyFirstGame

# Step 3: Run the game
python main.py run MyFirstGame

# Game window will open!`}</code></pre>
            </div>

            <h3>Manage Multiple Projects</h3>
            <div className="code-block">
              <pre><code>{`# Create multiple games
python main.py create Platformer
python main.py create TopDownShooter
python main.py create PuzzleGame

# Run any of them
python main.py run Platformer
python main.py run TopDownShooter
python main.py run PuzzleGame`}</code></pre>
            </div>

            <h3>Project Structure</h3>
            <p>When you create a project with <code>python main.py create MyGame</code>, the following structure is created:</p>
            <div className="code-block">
              <pre><code>{`MyGame/
├── project.json        # Project configuration
├── scenes/
│   └── main.json       # Default scene
├── assets/             # Images, sounds, fonts
├── scripts/            # Python scripts
└── build/              # Build output`}</code></pre>
            </div>
          </section>

          <section>
            <h2>Tips & Tricks</h2>
            <ul>
              <li>You can run commands from anywhere - just specify the project path</li>
              <li>Project names can contain spaces if quoted: <code>python main.py create "My Game"</code></li>
              <li>Use relative or absolute paths: <code>python main.py run ./projects/MyGame</code></li>
              <li>Check <code>python main.py --help</code> for more options</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
