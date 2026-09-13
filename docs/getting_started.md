# Pyngine - Getting Started

## Installation

### Windows (Recommended - Automatic)
```bash
# Run the automatic installer
install.bat
```

This will:
- Check if Python 3.12+ is installed
- Download and install Python if needed
- Create a virtual environment
- Install all dependencies
- Verify the installation

### Manual Installation

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate.bat  # Windows
source venv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt
```

## Create Your First Project

```bash
python main.py create MyGame
```

This creates a project structure:
```
MyGame/
├── project.json
├── scenes/
│   └── main.json
├── assets/
├── scripts/
└── build/
```

## Run Your Project

```bash
python main.py run MyGame
```

## Project Files

### project.json
Main project configuration file:

```json
{
  "name": "MyGame",
  "engine_version": "0.1.0",
  "window": {
    "width": 1280,
    "height": 720,
    "title": "MyGame",
    "fps": 60,
    "vsync": true
  },
  "main_scene": "scenes/main.json",
  "debug": false
}
```

### scenes/main.json
Your game scene file (scene format):

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

## Example: Create a Simple Scene Programmatically

```python
from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

# Create scene
scene = Scene("MyScene")

# Create game object
player = GameObject("Player")
transform = player.get_component("Transform")
transform.set_position(100, 200)

# Add to scene
scene.add_object(player)

# Save scene
scene.save("scenes/mymap.json")
```

## Example: Run a Game

```python
from engine.core.game import Game
from engine.core.project import Project

# Load project
project = Project.load("MyGame")

# Create and run game
game = Game(project)
game.run()
```

## Project Structure

```
Pyngine/
├── engine/                 # Core engine code
│   ├── core/              # Engine core (game loop, project, input)
│   ├── rendering/         # Rendering system (pygame)
│   ├── scene/            # Scene management
│   ├── entities/         # GameObject
│   ├── components/       # Components (Transform, etc)
│   ├── physics/          # Physics (Phase 3)
│   ├── input/            # Input management
│   ├── audio/            # Audio (Phase 4)
│   ├── camera/           # Camera (Phase 2)
│   ├── ui/               # UI Framework (Phase 4)
│   ├── resources/        # Resource Manager (Phase 2)
│   └── scripting/        # Python Scripting (Phase 5)
│
├── editor/                # Editor GUI (Phase 5)
├── examples/              # Example projects
├── tests/                 # Unit tests
├── docs/                  # Documentation
├── main.py                # CLI entry point
├── requirements.txt       # Python dependencies
├── install.bat            # Windows installer
└── README.md              # Project README
```

## Architecture Overview

Pyngine uses a component-based architecture:

1. **Engine**: Core game loop and rendering
2. **Scene**: Container for game objects
3. **GameObject**: Base entity with components
4. **Component**: Modular functionality (Transform, Sprite, Collider, etc)

### Game Loop

```
Initialize
  ↓
Event Processing → Input Update → Scene Update → Physics Update → Render → Display
  ↓
FPS Management / Delta Time
  ↓
Shutdown
```

## Next Steps

- Learn about [Scenes and Objects](scenes.md)
- Understand [Components](components.md)
- Read about [Scripting](scripting.md) (Phase 5)
- Check [Examples](../examples/)

## Troubleshooting

### Python not found
Make sure Python 3.12+ is installed and added to PATH.

### Import errors
Make sure you're using the virtual environment:
```bash
venv\Scripts\activate.bat  # Windows
```

### pygame-ce not found
Install dependencies:
```bash
pip install -r requirements.txt
```

## More Help

- Check the [README.md](../README.md) for project overview
- Run examples: `python examples/hello_world/main.py`
- Run tests: `pytest tests/`
