# Developer Guide - Extending Pyngine

## Adding New Components

Creating new components for GameObjects is straightforward:

```python
from engine.components import Component

class SpriteRenderer(Component):
    """Example component for rendering sprites"""
    
    def __init__(self, texture_path: str = None):
        super().__init__("SpriteRenderer")
        self.texture = None
        self.texture_path = texture_path
    
    def start(self):
        """Called when component is first enabled"""
        if self.texture_path:
            # Load texture here
            pass
    
    def update(self, delta_time):
        """Called every frame"""
        if self.is_active and self.texture:
            # Render logic here
            pass
    
    def to_dict(self):
        """For JSON serialization"""
        data = super().to_dict()
        data['texture_path'] = self.texture_path
        return data
    
    @staticmethod
    def from_dict(data):
        """For JSON deserialization"""
        return SpriteRenderer(data.get('texture_path'))


# Usage
from engine.entities import GameObject

player = GameObject("Player")
player.add_component(SpriteRenderer("assets/player.png"))
```

## Component Best Practices

### 1. Single Responsibility
Each component should handle one thing well:
```python
# ✓ Good - focused responsibility
class Collider(Component):
    """Handles collision detection only"""
    pass

class RigidBody(Component):
    """Handles physics only"""
    pass

# ✗ Bad - too many responsibilities
class PlayerPhysicsCollisionAnimationComponent(Component):
    """Does too much"""
    pass
```

### 2. No Hard Dependencies
Components should not directly depend on specific other components:

```python
# ✗ Bad - hard dependency
class Animator(Component):
    def __init__(self):
        super().__init__("Animator")
        self.sprite_renderer = None  # Looking for specific component
    
    def update(self, delta_time):
        if self.sprite_renderer:  # Assumes it exists
            pass

# ✓ Good - soft dependency through interface
class Animator(Component):
    def update(self, delta_time):
        sprite_renderer = self.game_object.get_component("SpriteRenderer")
        if sprite_renderer:
            # Use sprite renderer
            pass
```

### 3. Proper Serialization
Always implement to_dict and from_dict:

```python
class MyComponent(Component):
    def __init__(self, value: float = 0):
        super().__init__("MyComponent")
        self.value = value
    
    def to_dict(self):
        data = super().to_dict()
        data['value'] = self.value
        return data
    
    @staticmethod
    def from_dict(data):
        return MyComponent(data.get('value', 0))
```

## Module Organization

### Current Structure (Phase 1)
```
engine/
├── core/          - Engine loop, input, game management
├── rendering/     - Pygame rendering
├── scene/         - Scene management
├── entities/      - GameObjects
├── components/    - Component system
└── utils/         - Helper functions
```

### Adding Phase 2: Sprites & Resources

```python
# engine/resources/resource_manager.py
class ResourceManager:
    def __init__(self):
        self.textures = {}
        self.sounds = {}
    
    def load_texture(self, path):
        if path not in self.textures:
            # Load from disk
            self.textures[path] = load_image(path)
        return self.textures[path]
    
    def load_sound(self, path):
        if path not in self.sounds:
            self.sounds[path] = load_sound(path)
        return self.sounds[path]

# engine/components/sprite_renderer.py
class SpriteRenderer(Component):
    def __init__(self, resource_manager, texture_path):
        super().__init__("SpriteRenderer")
        self.resource_manager = resource_manager
        self.texture = resource_manager.load_texture(texture_path)
```

## Logging Best Practices

Use the logging module for debugging:

```python
import logging

logger = logging.getLogger(__name__)

# In your component/module
logger.debug("Detailed debug info")
logger.info("Important event")
logger.warning("Something unexpected")
logger.error("Error occurred", exc_info=True)
```

## Type Hints

Always use type hints for clarity:

```python
from typing import Optional, List, Dict, Tuple

def find_objects(self, name: str) -> List['GameObject']:
    """Find all objects with matching name"""
    pass

def get_position(self) -> Tuple[float, float]:
    """Return x, y position"""
    pass

def load_resource(self, path: str) -> Optional[Resource]:
    """Load resource, return None if not found"""
    pass
```

## Creating Example Projects

```python
# examples/my_example/main.py
#!/usr/bin/env python3
"""
My Example Game
Demonstrates specific Pyngine features
"""

import sys
from pathlib import Path

# Add parent to path
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

from engine.core.engine import Engine
from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

def main():
    # Create engine
    engine = Engine(
        width=800,
        height=600,
        title="My Example",
        fps=60
    )
    
    # Create scene
    scene = Scene("ExampleScene")
    
    # Add objects
    obj = GameObject("Example")
    obj.get_component("Transform").set_position(400, 300)
    scene.add_object(obj)
    
    # Run
    engine.load_scene(scene)
    engine.run()

if __name__ == "__main__":
    main()
```

## Unit Testing Components

```python
# tests/test_my_component.py
import pytest
from engine.components import MyComponent
from engine.entities import GameObject

def test_my_component_creation():
    comp = MyComponent(value=42)
    assert comp.value == 42

def test_my_component_on_game_object():
    obj = GameObject("Test")
    comp = MyComponent()
    obj.add_component(comp)
    assert obj.get_component("MyComponent") == comp

def test_my_component_serialization():
    comp = MyComponent(value=100)
    data = comp.to_dict()
    assert data['value'] == 100
    
    loaded = MyComponent.from_dict(data)
    assert loaded.value == 100

# Run: pytest tests/test_my_component.py
```

## Performance Considerations

### Caching
```python
class ResourceManager:
    def load_texture(self, path):
        # Only load once
        if path not in self.cache:
            self.cache[path] = expensive_load(path)
        return self.cache[path]
```

### Avoid in Update
```python
# ✗ Bad - expensive operation every frame
class MyComponent(Component):
    def update(self, delta_time):
        obj = scene.find_object("Player")  # Don't do this!

# ✓ Good - cache reference
class MyComponent(Component):
    def start(self):
        self.player = self.game_object.scene.find_object("Player")
    
    def update(self, delta_time):
        if self.player:
            # Use cached reference
            pass
```

## Contributing Guidelines

1. **Follow existing patterns** - Match the code style
2. **Add tests** - Test your components
3. **Document** - Add docstrings and comments
4. **Type hints** - Use type annotations
5. **Modular** - Keep components focused
6. **Serialize** - Implement to_dict/from_dict

## File Size Guidelines

- Keep files under 300 lines when possible
- Split complex modules into submodules
- Each file should have a clear purpose

## Common Pitfalls

1. **Accessing deleted objects** - Check if object still exists
2. **Infinite loops** - Be careful with scene operations during update
3. **Memory leaks** - Clean up resources in shutdown
4. **Hard-coded paths** - Use project-relative paths
5. **Blocking the loop** - Don't do long operations in update

## Next Phase Checklist

For each new feature:
- [ ] Create component classes
- [ ] Add to appropriate engine module
- [ ] Implement to_dict/from_dict
- [ ] Add unit tests
- [ ] Create example usage
- [ ] Document in docs/
- [ ] Update README.md

---

Ready to extend Pyngine? Start with a simple component and work from there!
