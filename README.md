# Pyngine - 2D Game Engine for Python

A lightweight, modular Python 2D game engine built with pygame-ce.

## Features

### Phase 1 (Core)
- ✓ Project system (create, load, save projects)
- ✓ Game loop with delta time
- ✓ Renderer (pygame-based)
- ✓ GameObject and Entity system
- ✓ Transform component
- ✓ Scene management and JSON serialization

### Phase 2 (In Progress)
- Sprite system
- Resource manager with caching
- Input management
- Camera2D

### Future Phases
- Physics 2D (collision, rigidbody, gravity)
- Animation system
- Audio management
- UI framework
- Scripting system
- Editor GUI
- Build/export system

## Requirements

- Python 3.12+
- pygame-ce 2.5.1+

## Installation

### Windows (Recommended)
```bash
install.bat
```

### Manual Installation
```bash
python -m venv venv
venv\Scripts\activate.bat

pip install -r requirements.txt
```

### Linux/Mac
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Getting Started

### Create a New Project
```bash
python main.py create MyGame
```

### Run a Project
```bash
python main.py run MyGame
```

### Editor (Later phases)
```bash
python main.py editor MyGame
```

## Project Structure

```
Pyngine/
├── engine/
│   ├── core/              # Core engine functionality
│   ├── rendering/         # Rendering system
│   ├── scene/            # Scene management
│   ├── entities/         # GameObject/Entity
│   ├── components/       # Components (Transform, etc)
│   ├── physics/          # Physics (later)
│   ├── input/            # Input management
│   ├── audio/            # Audio (later)
│   ├── camera/           # Camera system (later)
│   ├── ui/               # UI framework (later)
│   ├── resources/        # Resource management
│   ├── scripting/        # Scripting (later)
│   └── utils/            # Utilities
├── editor/               # Editor GUI (Phase 5)
├── examples/             # Example projects
│   ├── hello_world/
│   └── platformer/
├── tests/                # Unit tests
├── docs/                 # Documentation
├── main.py               # CLI entry point
├── requirements.txt      # Python dependencies
├── install.bat           # Windows installer
└── README.md
```

## Architecture

Pyngine uses a component-based architecture:

1. **Scene**: Contains GameObjects
2. **GameObject**: Has Transform and other components
3. **Component**: Transform, Sprite, Collider, etc.
4. **Game Loop**: Update → Physics → Render

## Example: Create and Run a Game

```python
from engine.scene import Scene
from engine.entities import GameObject
from engine.components import Transform

# Create scene
scene = Scene("MainScene")

# Create game object
player = GameObject("Player")
player.add_component(Transform(x=100, y=100))

scene.add_object(player)

# Save scene
scene.save("scenes/main.json")

# Game loop will load and run it
```

## Documentation

See `docs/` folder for detailed guides:
- Getting Started
- Project Structure
- Scenes and Objects
- Components
- Game Loop
- Physics
- Input
- Scripting (later)

## License

MIT License

## Credit

SiloKusuma
