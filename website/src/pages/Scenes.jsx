import React from 'react'
import '../styles/pages/Documentation.css'

export default function Scenes() {
  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Scenes Documentation</h4>
            <ul>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#creating">Creating Scenes</a></li>
              <li><a href="#managing">Managing Objects</a></li>
              <li><a href="#serialization">Serialization</a></li>
              <li><a href="#example">Example</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Scenes</h1>
            <p>Organize your game with the Scene system</p>
          </div>

          <section id="overview">
            <h2>What is a Scene?</h2>
            <p>A Scene is a container for all game objects in a level or game state. Think of it as a level in your game where you place the player, enemies, platforms, and other objects.</p>
          </section>

          <section id="creating">
            <h3>Creating a Scene</h3>
            <div className="code-block">
              <pre><code>{`from engine.scene import Scene

# Create a new scene
scene = Scene("MainScene")`}</code></pre>
            </div>
          </section>

          <section id="managing">
            <h2>Managing Objects</h2>
            
            <h3>Adding Objects</h3>
            <div className="code-block">
              <pre><code>{`from engine.entities import GameObject

player = GameObject("Player")
scene.add_object(player)`}</code></pre>
            </div>

            <h3>Finding Objects</h3>
            <div className="code-block">
              <pre><code>{`# Find by name
player = scene.find_object("Player")

# Find all with same name
enemies = scene.find_objects_by_name("Enemy")

# Get all objects
all_objects = scene.get_objects()`}</code></pre>
            </div>

            <h3>Removing Objects</h3>
            <div className="code-block">
              <pre><code>{`scene.remove_object(player)

# Clear all objects
scene.clear()`}</code></pre>
            </div>
          </section>

          <section id="serialization">
            <h2>Saving and Loading</h2>
            
            <h3>Save Scene</h3>
            <div className="code-block">
              <pre><code>{`scene.save("scenes/main.json")`}</code></pre>
            </div>

            <h3>Load Scene</h3>
            <div className="code-block">
              <pre><code>{`scene = Scene.load("scenes/main.json")`}</code></pre>
            </div>

            <p>Scenes are saved as JSON files with the following format:</p>
            <div className="code-block">
              <pre><code>{`{
  "name": "MainScene",
  "objects": [
    {
      "id": 1,
      "name": "Player",
      "active": true,
      "components": {
        "Transform": {
          "name": "Transform",
          "x": 100,
          "y": 200,
          "rotation": 0,
          "scale_x": 1.0,
          "scale_y": 1.0
        }
      }
    }
  ]
}`}</code></pre>
            </div>
          </section>

          <section id="example">
            <h2>Complete Example</h2>
            <div className="code-block">
              <pre><code>{`from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

# Create scene
scene = Scene("Level1")

# Create player
player = GameObject("Player")
player.get_component("Transform").set_position(64, 64)

# Create ground
ground = GameObject("Ground")
ground.get_component("Transform").set_position(320, 500)

# Add to scene
scene.add_object(player)
scene.add_object(ground)

# Save
scene.save("scenes/level1.json")

# Later, load and use
loaded_scene = Scene.load("scenes/level1.json")`}</code></pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
