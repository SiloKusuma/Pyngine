# Scenes and Objects

## Understanding Scenes

A **Scene** is a container that holds all the game objects in a level or game state.

### Creating a Scene

```python
from engine.scene import Scene

scene = Scene("MainScene")
```

### Adding Objects to a Scene

```python
from engine.entities import GameObject

# Create object
player = GameObject("Player")

# Add to scene
scene.add_object(player)
```

### Finding Objects

```python
# Find by name
player = scene.find_object("Player")

# Find all with name
enemies = scene.find_objects_by_name("Enemy")

# Get all objects
all_objects = scene.get_objects()
```

### Removing Objects

```python
scene.remove_object(player)
```

### Clearing a Scene

```python
scene.clear()  # Removes all objects
```

## Scene Serialization

Scenes are saved as JSON files.

### Saving a Scene

```python
scene.save("scenes/main.json")
```

### Loading a Scene

```python
scene = Scene.load("scenes/main.json")
```

### Scene File Format

```json
{
  "name": "MainScene",
  "objects": [
    {
      "id": 1,
      "name": "Player",
      "active": true,
      "components": {
        "Transform": {
          "name": "Transform",
          "active": true,
          "x": 100,
          "y": 200,
          "rotation": 0,
          "scale_x": 1.0,
          "scale_y": 1.0
        }
      }
    }
  ]
}
```

## GameObject Basics

A **GameObject** represents an entity in your game (player, enemy, platform, etc).

### Creating a GameObject

```python
from engine.entities import GameObject

player = GameObject("Player")
```

### Getting the Transform

Every GameObject has a Transform component by default:

```python
transform = player.get_component("Transform")
transform.set_position(100, 200)
```

### Checking if Active

```python
if player.active:
    player.update(delta_time)
```

### Setting Active/Inactive

```python
player.active = False  # Disable
player.active = True   # Enable
```

## Full Example

```python
from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

# Create a scene
scene = Scene("Level1")

# Create player
player = GameObject("Player")
player_transform = player.get_component("Transform")
player_transform.set_position(64, 64)

# Create enemy
enemy = GameObject("Enemy")
enemy_transform = enemy.get_component("Transform")
enemy_transform.set_position(320, 200)

# Add to scene
scene.add_object(player)
scene.add_object(enemy)

# Save scene
scene.save("scenes/level1.json")

# Later, load and run the scene
loaded_scene = Scene.load("scenes/level1.json")
for obj in loaded_scene.get_objects():
    print(f"Object: {obj.name}")
```

## Next Steps

- Learn about [Components](components.md)
- Understand [Transform Component](components.md#transform)
- Learn [Game Objects and Components](entities.md)
