import React from 'react'
import '../styles/pages/Documentation.css'

export default function Examples() {
  const examples = [
    {
      title: 'Hello World',
      desc: 'Simple example showing engine initialization',
      path: 'examples/hello_world/main.py'
    },
    {
      title: 'Scene Management',
      desc: 'Learn how to create and manage scenes',
      path: 'Coming in Phase 2'
    },
    {
      title: 'Input Handling',
      desc: 'Handle keyboard and mouse input',
      path: 'Coming in Phase 2'
    },
    {
      title: 'Physics Demo',
      desc: 'Gravity, collisions, and dynamics',
      path: 'Coming in Phase 3'
    },
    {
      title: 'Animation System',
      desc: 'Sprite sheet animations',
      path: 'Coming in Phase 4'
    },
    {
      title: 'Complete Game',
      desc: 'Full game example with all features',
      path: 'Coming in Phase 7'
    }
  ]

  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Examples</h4>
            <ul>
              <li><a href="#available">Available Examples</a></li>
              <li><a href="#hello-world">Hello World</a></li>
              <li><a href="#structure">Project Structure</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Examples</h1>
            <p>Learn Pyngine by example</p>
          </div>

          <section id="available">
            <h2>Available Examples</h2>
            <div className="next-steps-grid">
              {examples.map((ex, idx) => (
                <div key={idx} className="next-step-card">
                  <h4>{ex.title}</h4>
                  <p>{ex.desc}</p>
                  <p style={{fontSize: '0.85rem', marginTop: '1rem', color: '#0066CC'}}>
                    {ex.path}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="hello-world">
            <h2>Hello World Example</h2>
            <p>The hello world example demonstrates basic engine initialization:</p>
            <div className="code-block">
              <pre><code>{`from engine.core.engine import Engine
from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

# Create engine
engine = Engine(width=800, height=600, title="Hello World", fps=60)

# Create scene
scene = Scene("HelloWorld")

# Create a game object
hello_obj = GameObject("HelloObject")
transform = hello_obj.get_component("Transform")
transform.set_position(400, 300)

# Add to scene
scene.add_object(hello_obj)

# Load and run
engine.load_scene(scene)
engine.run()`}</code></pre>
            </div>

            <h3>Running the Example</h3>
            <div className="code-block">
              <pre><code>{`cd examples/hello_world
python main.py`}</code></pre>
            </div>
          </section>

          <section id="structure">
            <h2>Example Project Structure</h2>
            <p>Each example follows this structure:</p>
            <div className="code-block">
              <pre><code>{`examples/
├── hello_world/
│   ├── main.py
│   ├── assets/
│   └── README.md
├── platformer/
│   ├── main.py
│   ├── assets/
│   └── README.md
└── ...`}</code></pre>
            </div>

            <h3>Creating Your Own Example</h3>
            <p>To create a new example:</p>
            <ol>
              <li>Create a new folder in <code>examples/</code></li>
              <li>Add a <code>main.py</code> file</li>
              <li>Add an <code>assets/</code> folder if needed</li>
              <li>Include a <code>README.md</code> explaining the example</li>
            </ol>
          </section>

          <section className="info-box warning">
            <p><strong>Note:</strong> More examples are coming in future phases as more features are implemented!</p>
          </section>
        </main>
      </div>
    </div>
  )
}
