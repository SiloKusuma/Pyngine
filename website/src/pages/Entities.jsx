import React from 'react'
import '../styles/pages/Documentation.css'

export default function Entities() {
  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Entities Documentation</h4>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#creating">Creating Objects</a></li>
              <li><a href="#components">Components</a></li>
              <li><a href="#lifecycle">Lifecycle</a></li>
              <li><a href="#example">Example</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Game Objects & Entities</h1>
            <p>Create and manage game objects with the component system</p>
          </div>

          <section id="overview">
            <h2>What is a GameObject?</h2>
            <p>A GameObject represents an entity in your game - players, enemies, platforms, UI elements, etc. Each GameObject is a container for components that define its behavior.</p>
          </section>

          <section id="creating">
            <h2>Creating GameObjects</h2>
            <div className="code-block">
              <pre><code>{`from engine.entities import GameObject

player = GameObject("Player")
enemy = GameObject("Enemy")
platform = GameObject("Platform")`}</code></pre>
            </div>

            <h3>Properties</h3>
            <p>Every GameObject has:</p>
            <ul>
              <li><strong>id</strong> - Unique identifier (auto-generated)</li>
              <li><strong>name</strong> - Human-readable name</li>
              <li><strong>active</strong> - Whether the object updates and renders</li>
              <li><strong>components</strong> - Attached components</li>
            </ul>
          </section>

          <section id="components">
            <h2>Working with Components</h2>

            <h3>Get a Component</h3>
            <div className="code-block">
              <pre><code>{`# All GameObjects have Transform by default
transform = player.get_component("Transform")`}</code></pre>
            </div>

            <h3>Add Components</h3>
            <div className="code-block">
              <pre><code>{`from engine.components import Transform

player.add_component(SpriteRenderer("player.png"))
player.add_component(Collider("box"))
player.add_component(RigidBody())`}</code></pre>
            </div>

            <h3>Check Components</h3>
            <div className="code-block">
              <pre><code>{`# Check if object has component
if player.has_component("SpriteRenderer"):
    print("Has sprite!")

components = player.get_components_list()`}</code></pre>
            </div>

            <h3>Remove Components</h3>
            <div className="code-block">
              <pre><code>{`# Remove a component (except Transform)
player.remove_component("Collider")`}</code></pre>
            </div>
          </section>

          <section id="lifecycle">
            <h2>GameObject Lifecycle</h2>

            <h3>Activation</h3>
            <div className="code-block">
              <pre><code>{`# Disable object (won't update or render)
player.active = False

player.active = True

# Disable individual component
component = player.get_component("Transform")
component.is_active = False`}</code></pre>
            </div>

            <h3>Updates</h3>
            <p>GameObjects update all their active components each frame:</p>
            <div className="code-block">
              <pre><code>{`# Called automatically by Scene
object.update(delta_time)`}</code></pre>
            </div>
          </section>

          <section id="example">
            <h2>Complete Example</h2>
            <div className="code-block">
              <pre><code>{`from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

scene = Scene("GameScene")

player = GameObject("Player")
player_transform = player.get_component("Transform")
player_transform.set_position(100, 200)
player_transform.set_scale(1.5, 1.5)

enemy = GameObject("Enemy")
enemy_transform = enemy.get_component("Transform")
enemy_transform.set_position(500, 200)

ground = GameObject("Ground")
ground_transform = ground.get_component("Transform")
ground_transform.set_position(320, 400)
ground_transform.set_scale(10, 1)

scene.add_object(player)
scene.add_object(enemy)
scene.add_object(ground)

scene.save("scenes/level.json")`}</code></pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
