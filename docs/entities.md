# Game Objects and Components

## Component System

Pyngine uses a **component-based architecture**. Components are modular pieces of functionality that can be attached to GameObjects.

### Base Component

All components inherit from `Component`:

```python
from engine.components import Component

class MyComponent(Component):
    def __init__(self):
        super().__init__("MyComponent")
    
    def update(self, delta_time):
        # Called every frame
        pass
```

### Adding Components to GameObjects

```python
from engine.entities import GameObject
from engine.components import Transform

player = GameObject("Player")

# Transform is added automatically
# Add other components here
```

### Getting Components

```python
# Get specific component
transform = player.get_component("Transform")

# Check if object has component
if player.has_component("Transform"):
    print("Has Transform")

# Get all component names
components = player.get_components_list()
```

### Removing Components

```python
# Note: Transform cannot be removed
player.remove_component("SpriteRenderer")
```

## Transform Component

The **Transform** component handles position, rotation, and scale.

### Creating a Transform

```python
from engine.components import Transform

# Create with values
transform = Transform(x=100, y=200, rotation=45, scale_x=2, scale_y=2)

# Or create empty
transform = Transform()
```

### Position

```python
# Set position
transform.set_position(100, 200)

# Get position
x, y = transform.get_position()

# Move relative
transform.move(10, 20)  # Add 10 to x, 20 to y
```

### Rotation

```python
# Set rotation in degrees
transform.set_rotation(90)

# Get rotation
angle = transform.get_rotation()

# Rotate relative
transform.rotate(45)  # Add 45 degrees
```

### Scale

```python
# Set scale
transform.set_scale(2.0, 2.0)

# Get scale
scale_x, scale_y = transform.get_scale()
```

### Direct Access

```python
# Direct property access
transform.x = 100
transform.y = 200
transform.rotation = 45
transform.scale_x = 2.0
transform.scale_y = 2.0
```

## GameObject Lifecycle

### Creation

```python
obj = GameObject("MyObject")
```

### Adding to Scene

```python
scene.add_object(obj)
```

### Update

```python
# Manual update (called by scene)
obj.update(delta_time)
```

### Removal

```python
scene.remove_object(obj)
```

## Example: Complete GameObject Setup

```python
from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

# Create scene
scene = Scene("GameScene")

# Create player
player = GameObject("Player")
transform = player.get_component("Transform")
transform.set_position(64, 64)
transform.set_scale(1.5, 1.5)

# Create ground platform
ground = GameObject("Ground")
ground_transform = ground.get_component("Transform")
ground_transform.set_position(320, 500)
ground_transform.set_scale(10, 1)

# Create enemy
enemy = GameObject("Enemy")
enemy_transform = enemy.get_component("Transform")
enemy_transform.set_position(500, 200)

# Add all to scene
scene.add_object(player)
scene.add_object(ground)
scene.add_object(enemy)

# Save
scene.save("scenes/level.json")

# Load and print
loaded_scene = Scene.load("scenes/level.json")
for obj in loaded_scene.get_objects():
    transform = obj.get_component("Transform")
    print(f"{obj.name}: pos={transform.get_position()}, scale={transform.get_scale()}")
```

## Object IDs

Each GameObject has a unique ID:

```python
print(obj.id)  # Unique auto-generated ID
```

## Activating/Deactivating Objects

```python
# Disable object (won't update or render)
obj.active = False

# Enable object
obj.active = True

# Disable a component
component = obj.get_component("Transform")
component.is_active = False
```

## Next Steps

- Learn about [Rendering and Sprites](sprites.md) (Phase 2)
- Understand [Physics Components](physics.md) (Phase 3)
- Explore [Scripting System](scripting.md) (Phase 5)
- Check out [Examples](../examples/)
