import React from 'react'
import '../styles/pages/Documentation.css'

export default function Physics() {
  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Physics (Phase 3)</h4>
            <ul>
              <li><a href="#coming">Coming Soon</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Physics System</h1>
            <p>2D physics simulation for your games</p>
          </div>

          <section id="coming">
            <h2>Coming in Phase 3</h2>
            <p>The physics system is currently under development. It will include:</p>
            <ul>
              <li>Gravity simulation</li>
              <li>Velocity and acceleration</li>
              <li>Collision detection (Rectangle, Circle)</li>
              <li>Collision response</li>
              <li>Static and dynamic bodies</li>
              <li>Trigger volumes</li>
              <li>Physics callbacks</li>
            </ul>
            
            <div className="info-box">
              <p><strong>Phase 1:</strong> ✓ Core engine, scenes, objects</p>
              <p><strong>Phase 2:</strong> → Sprites, resources, camera</p>
              <p><strong>Phase 3:</strong> ⏳ Physics (You are here)</p>
              <p><strong>Phase 4:</strong> ⏳ Audio &amp; UI</p>
              <p><strong>Phase 5:</strong> ⏳ Scripting &amp; Editor</p>
            </div>

            <h3>Expected API Preview</h3>
            <div className="code-block">
              <pre><code>{`# Future usage (Phase 3)
player.add_component(RigidBody2D(
    mass=1.0,
    gravity=9.8,
    friction=0.1
))

player.add_component(Collider(type="box", width=32, height=64))

# Physics callbacks
def on_collision(collider):
    print(f"Hit {collider.game_object.name}")

player.get_component("Collider").on_collision = on_collision`}</code></pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
