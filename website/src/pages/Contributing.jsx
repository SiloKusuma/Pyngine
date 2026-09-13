import React from 'react'
import '../styles/pages/Documentation.css'

export default function Contributing() {
  return (
    <div className="documentation-page">
      <div className="container">
        <aside className="doc-sidebar">
          <nav className="doc-nav">
            <h4>Contributing</h4>
            <ul>
              <li><a href="#guidelines">Guidelines</a></li>
              <li><a href="#components">Add Components</a></li>
              <li><a href="#testing">Testing</a></li>
              <li><a href="#documentation">Documentation</a></li>
            </ul>
          </nav>
        </aside>

        <main className="doc-content">
          <div className="doc-header">
            <h1>Contributing to Pyngine</h1>
            <p>Help improve Pyngine! Here's how to contribute.</p>
          </div>

          <section id="guidelines">
            <h2>Contributing Guidelines</h2>
            
            <h3>Code Style</h3>
            <ul>
              <li>Use type hints for all functions</li>
              <li>Write docstrings for public APIs</li>
              <li>Follow PEP 8 style guide</li>
              <li>Keep functions and methods focused</li>
              <li>Use meaningful variable names</li>
            </ul>

            <h3>Development Rules</h3>
            <ul>
              <li>✓ Write modular, reusable code</li>
              <li>✓ Add tests for new features</li>
              <li>✓ Update documentation</li>
              <li>✓ Keep components focused</li>
              <li>✗ No hardcoded paths</li>
              <li>✗ No infinite loops</li>
              <li>✗ No blocking operations</li>
            </ul>
          </section>

          <section id="components">
            <h2>Adding New Components</h2>

            <h3>Component Template</h3>
            <div className="code-block">
              <pre><code>{`from engine.components import Component

class MyComponent(Component):
    """Description of what this component does"""
    
    def __init__(self, param1=None):
        super().__init__("MyComponent")
        self.param1 = param1
    
    def start(self):
        """Called when component is first enabled"""
        pass
    
    def update(self, delta_time):
        """Called every frame"""
        if self.is_active and self.game_object:
            pass
    
    def to_dict(self):
        """For JSON serialization"""
        data = super().to_dict()
        data["param1"] = self.param1
        return data
    
    @staticmethod
    def from_dict(data):
        """For JSON deserialization"""
        return MyComponent(data.get("param1"))`}</code></pre>
            </div>

            <h3>Best Practices</h3>
            <ul>
              <li>Each component should have a single responsibility</li>
              <li>Don't depend on specific other components</li>
              <li>Use <code>get_component()</code> to find other components</li>
              <li>Always implement serialization</li>
              <li>Add logging for debugging</li>
            </ul>
          </section>

          <section id="testing">
            <h2>Testing</h2>

            <h3>Running Tests</h3>
            <div className="code-block">
              <pre><code>{`pytest tests/
pytest tests/test_core.py          # Specific test file
pytest tests/ -v                   # Verbose output`}</code></pre>
            </div>

            <h3>Writing Tests</h3>
            <div className="code-block">
              <pre><code>{`import pytest
from engine.components import Transform
from engine.entities import GameObject

def test_transform_creation():
    """Test Transform component creation"""
    transform = Transform(x=100, y=200)
    assert transform.x == 100
    assert transform.y == 200

def test_game_object_add_component():
    """Test adding components to GameObject"""
    obj = GameObject("Test")
    assert obj.get_component("Transform") is not None`}</code></pre>
            </div>
          </section>

          <section id="documentation">
            <h2>Documentation</h2>

            <h3>Documentation Structure</h3>
            <ul>
              <li><code>README.md</code> - Project overview</li>
              <li><code>QUICKSTART.md</code> - Quick start guide</li>
              <li><code>DEVELOPER_GUIDE.md</code> - Developer guide</li>
              <li><code>docs/</code> - Detailed documentation</li>
              <li><code>web/</code> - Website documentation</li>
            </ul>

            <h3>Documentation Guidelines</h3>
            <ul>
              <li>Include code examples for all features</li>
              <li>Explain the "why" not just the "what"</li>
              <li>Update docs when adding features</li>
              <li>Keep documentation up to date</li>
              <li>Use clear, simple language</li>
            </ul>

            <h3>Website Documentation</h3>
            <p>This website is built with Vite + React. To update documentation:</p>
            <div className="code-block">
              <pre><code>{`cd web

# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build`}</code></pre>
            </div>
          </section>

          <section>
            <h2>File Organization</h2>
            <p>Keep files organized and focused:</p>
            <div className="code-block">
              <pre><code>{`engine/
├── core/              # Engine core
├── rendering/         # Rendering system
├── scene/            # Scene management
├── entities/         # GameObjects
├── components/       # Component system
├── physics/          # Physics (Phase 3)
├── input/            # Input management
├── audio/            # Audio (Phase 4)
├── camera/           # Camera (Phase 2)
├── ui/               # UI (Phase 4)
├── resources/        # Resources (Phase 2)
├── scripting/        # Scripting (Phase 5)
└── utils/            # Utilities`}</code></pre>
            </div>

            <h3>Guidelines</h3>
            <ul>
              <li>Keep files under 300 lines when possible</li>
              <li>One main class per file</li>
              <li>Use <code>__init__.py</code> to expose APIs</li>
              <li>Put tests in <code>tests/</code> folder</li>
            </ul>
          </section>

          <section className="info-box">
            <p><strong>Thank you for contributing!</strong> Your help makes Pyngine better for everyone.</p>
          </section>
        </main>
      </div>
    </div>
  )
}
