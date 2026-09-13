import React from 'react'
import '../styles/pages/Documentation.css'

export default function Input() {
  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Input Documentation</h4>
            <ul>
              <li><a href="#keyboard">Keyboard Input</a></li>
              <li><a href="#mouse">Mouse Input</a></li>
              <li><a href="#actions">Action Mapping</a></li>
              <li><a href="#example">Example</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Input System</h1>
            <p>Handle keyboard and mouse input in your games</p>
          </div>

          <section id="keyboard">
            <h2>Keyboard Input</h2>
            <div className="code-block">
              <pre><code>{`from engine.core.input_manager import InputManager

# Check if key is held
if input_manager.is_key_down(pygame.K_a):
    player_x -= speed * delta_time

# Check if key was just pressed
if input_manager.is_key_pressed(pygame.K_SPACE):
    player.jump()

# Check if key was just released
if input_manager.is_key_released(pygame.K_SPACE):
    player.stop_jump()`}</code></pre>
            </div>

            <h3>Key Names</h3>
            <p>Use pygame key constants: <code>pygame.K_a</code>, <code>pygame.K_SPACE</code>, <code>pygame.K_UP</code>, etc.</p>
          </section>

          <section id="mouse">
            <h2>Mouse Input</h2>
            <div className="code-block">
              <pre><code>{`# Mouse buttons
if input_manager.is_mouse_button_down(1):  # Left click
    print("Left mouse held")

if input_manager.is_mouse_button_pressed(1):  # Just clicked
    handle_click()

# Mouse position
x, y = input_manager.get_mouse_position()

# Mouse movement
dx, dy = input_manager.get_mouse_delta()`}</code></pre>
            </div>
          </section>

          <section id="actions">
            <h2>Action Mapping</h2>
            <p>Map actions to keys for easier game logic:</p>
            <div className="code-block">
              <pre><code>{`# Default actions
if input_manager.is_action_down("move_left"):
    player.move_left(delta_time)

if input_manager.is_action_down("move_right"):
    player.move_right(delta_time)

if input_manager.is_action_pressed("jump"):
    player.jump()

# Add custom actions
import pygame
input_manager.add_action("dash", [pygame.K_LSHIFT])
if input_manager.is_action_pressed("dash"):
    player.dash()`}</code></pre>
            </div>

            <h3>Default Actions</h3>
            <ul>
              <li><code>move_left</code> - A or LEFT</li>
              <li><code>move_right</code> - D or RIGHT</li>
              <li><code>move_up</code> - W or UP</li>
              <li><code>move_down</code> - S or DOWN</li>
              <li><code>jump</code> - SPACE</li>
              <li><code>interact</code> - E</li>
              <li><code>pause</code> - ESC</li>
            </ul>
          </section>

          <section id="example">
            <h2>Complete Example</h2>
            <div className="code-block">
              <pre><code>{`class PlayerController(Component):
    def __init__(self, input_manager):
        super().__init__("PlayerController")
        self.input_manager = input_manager
        self.speed = 200
    
    def update(self, delta_time):
        transform = self.game_object.get_component("Transform")
        
        # Handle movement
        if self.input_manager.is_action_down("move_left"):
            transform.move(-self.speed * delta_time, 0)
        
        if self.input_manager.is_action_down("move_right"):
            transform.move(self.speed * delta_time, 0)
        
        if self.input_manager.is_action_down("move_up"):
            transform.move(0, -self.speed * delta_time)
        
        if self.input_manager.is_action_down("move_down"):
            transform.move(0, self.speed * delta_time)
        
        # Handle jump
        if self.input_manager.is_action_pressed("jump"):
            self.jump()
    
    def jump(self):
        print("Jump!")`}</code></pre>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
