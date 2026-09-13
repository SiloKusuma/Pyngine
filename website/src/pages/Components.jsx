import React from 'react'
import '../styles/pages/Documentation.css'

export default function Components() {
  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Components Reference</h4>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#transform">Transform</a></li>
              <li><a href="#lifecycle">Lifecycle</a></li>
              <li><a href="#custom">Custom Components</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Components</h1>
            <p>Modular functionality for your GameObjects</p>
          </div>

          <section id="overview">
            <h2>Component System</h2>
            <p>Pyngine uses a component-based architecture. Components are modular pieces of functionality that you attach to GameObjects.</p>
            <div className="info-box">
              <p><strong>Note:</strong> Every GameObject has a Transform component by default.</p>
            </div>
          </section>

          <section id="transform">
            <h2>Transform Component</h2>
            <p>The Transform component handles position, rotation, and scale. It's the foundation for all other components.</p>

            <h3>Creating a Transform</h3>
            <div className="code-block">
              <pre><code>{`from engine.components import Transform

transform = Transform(x=100, y=200, rotation=45, scale_x=2, scale_y=2)
`}</code></pre>
            </div>

            <h3>Position</h3>
            <div className="code-block">
              <pre><code>{`# Set position
transform.set_position(100, 200)

# Get position
x, y = transform.get_position()

# Move relative
transform.move(10, 20)

# Direct access
transform.x = 100
transform.y = 200`}</code></pre>
            </div>

            <h3>Rotation</h3>
            <div className="code-block">
              <pre><code>{`# Set rotation in degrees
transform.set_rotation(90)

# Get rotation
angle = transform.get_rotation()

# Rotate relative
transform.rotate(45)`}</code></pre>
            </div>

            <h3>Scale</h3>
            <div className="code-block">
              <pre><code>{`# Set scale
transform.set_scale(2.0, 2.0)

# Get scale
scale_x, scale_y = transform.get_scale()

# Direct access
transform.scale_x = 1.5
transform.scale_y = 1.5`}</code></pre>
            </div>
          </section>

          <section id="lifecycle">
            <h2>Component Lifecycle</h2>
            <p>Components can override these methods for custom behavior:</p>
            <div className="code-block">
              <pre><code>{`class MyComponent(Component):
    def start(self):
        # Called when component is enabled
        pass
    
    def update(self, delta_time):
        # Called every frame
        pass
    
    def on_enable(self):
        # Called when component is enabled
        pass
    
    def on_disable(self):
        # Called when component is disabled
        pass`}</code></pre>
            </div>
          </section>

          <section id="custom">
            <h2>Creating Custom Components</h2>
            <div className="code-block">
              <pre><code>{`from engine.components import Component

class PlayerController(Component):
    def __init__(self):
        super().__init__("PlayerController")
        self.speed = 100
    
    def update(self, delta_time):
        # Your update logic here
        if self.game_object:
            transform = self.game_object.get_component("Transform")
            # Update based on input, physics, etc.
    
    def to_dict(self):
        data = super().to_dict()
        data["speed"] = self.speed
        return data
    
    @staticmethod
    def from_dict(data):
        comp = PlayerController()
        comp.speed = data.get("speed", 100)
        return comp

# Use it
player = GameObject("Player")
player.add_component(PlayerController())`}</code></pre>
            </div>

            <h3>Serialization</h3>
            <p>Custom components should implement <code>to_dict()</code> and <code>from_dict()</code> for saving/loading:</p>
            <ul>
              <li><code>to_dict()</code> - Convert component to dictionary</li>
              <li><code>from_dict(data)</code> - Recreate component from dictionary</li>
            </ul>
          </section>

          <section>
            <h2>Built-in Components (Phase 1)</h2>
            <table>
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Purpose</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Transform</strong></td>
                  <td>Position, rotation, scale</td>
                  <td><span className="badge badge-success">✓ Done</span></td>
                </tr>
              </tbody>
            </table>

            <h3>Planned Components</h3>
            <table>
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Components</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Phase 2</strong></td>
                  <td>SpriteRenderer, Animator, ResourceManager</td>
                </tr>
                <tr>
                  <td><strong>Phase 3</strong></td>
                  <td>Collider, RigidBody2D, Physics2D</td>
                </tr>
                <tr>
                  <td><strong>Phase 4</strong></td>
                  <td>AudioSource, UIText, UIButton, UIPanel</td>
                </tr>
                <tr>
                  <td><strong>Phase 5</strong></td>
                  <td>Script, Behavior</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  )
}
