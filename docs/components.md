# Components Reference

## Overview

Components are modular pieces of functionality that define what a GameObject does.

## Built-in Components (Phase 1)

### Transform

The Transform component is required on all GameObjects and handles position, rotation, and scale.

**Type**: `Transform`

**Properties**:
- `x` (float): X position
- `y` (float): Y position  
- `rotation` (float): Rotation in degrees (0-360)
- `scale_x` (float): X scale factor
- `scale_y` (float): Y scale factor

**Methods**:
- `set_position(x, y)`: Set position
- `get_position() -> (x, y)`: Get position tuple
- `move(dx, dy)`: Move relative to current position
- `set_rotation(angle)`: Set rotation in degrees
- `get_rotation() -> angle`: Get rotation
- `rotate(angle)`: Rotate relative
- `set_scale(sx, sy)`: Set scale
- `get_scale() -> (sx, sy)`: Get scale tuple

**Example**:
```python
from engine.components import Transform
from engine.entities import GameObject

obj = GameObject("Player")
transform = obj.get_component("Transform")
transform.set_position(100, 200)
transform.set_scale(1.5, 1.5)
transform.rotate(45)
```

## Planned Components (Future Phases)

### Phase 2: Rendering & Resources
- **SpriteRenderer**: Renders 2D sprites
- **AnimatedSprite**: Sprite sheet animation
- **ResourceManager**: Asset loading and caching

### Phase 3: Physics
- **Collider**: Collision detection (Rectangle, Circle)
- **RigidBody2D**: Physics simulation
- **Physics2D Manager**: Gravity, velocities

### Phase 4: Audio & UI
- **AudioSource**: Sound effect playback
- **AudioListener**: Sound positioning
- **UIText**: Text rendering
- **UIButton**: Interactive buttons
- **UIPanel**: UI container

### Phase 5: Scripting
- **Script**: Python script execution
- **Behavior**: Custom game logic

## Creating Custom Components

```python
from engine.components import Component

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
player.add_component(PlayerController())
```

## Component Lifecycle

### Events

Each component can override these methods:

```python
class MyComponent(Component):
    def start(self):
        # Called when component is first enabled
        pass
    
    def update(self, delta_time):
        # Called every frame
        pass
    
    def on_enable(self):
        # Called when component is enabled
        pass
    
    def on_disable(self):
        # Called when component is disabled
        pass
```

## Serialization

Components are serialized to JSON:

```python
# Save component data
data = component.to_dict()

# Load component from data
component = ComponentClass.from_dict(data)
```

## Component Best Practices

1. **Single Responsibility**: Each component should do one thing well
2. **Reusability**: Design components to work with any GameObject
3. **Composition**: Use multiple components instead of inheritance
4. **No Direct References**: Communicate through GameObjects and scenes
5. **Clean Serialization**: Ensure components save/load properly

## Next Steps

- Learn about [Game Objects](entities.md)
- Explore [Scenes](scenes.md)
- See [Examples](../examples/)
- Check [Phase 2 features](../docs/phases.md)
