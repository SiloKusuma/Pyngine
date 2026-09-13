#!/usr/bin/env python3
"""
Pyngine - 2D Game Engine for Python
Main CLI entry point
"""

import argparse
import sys
import logging
from pathlib import Path

from engine.core.project import Project
from engine.core.game import Game

logging.basicConfig(
    level=logging.INFO,
    format='[%(levelname)s] %(message)s'
)
logger = logging.getLogger(__name__)


def cmd_version(args):
    """Show version information"""
    print("Pyngine v0.1.0")
    print("2D Game Engine for Python")


def cmd_create(args):
    """Create a new project"""
    project_name = args.name
    
    try:
        project = Project.create(project_name)
        logger.info(f"Project '{project_name}' created successfully at: {project.root_path}")
        logger.info(f"Run 'python main.py run {project_name}' to start the game")
    except Exception as e:
        logger.error(f"Failed to create project: {e}")
        sys.exit(1)


def cmd_run(args):
    """Run a project"""
    project_path = args.project
    
    try:
        project = Project.load(project_path)
        logger.info(f"Loading project: {project.name}")
        
        game = Game(project)
        game.run()
        
    except FileNotFoundError as e:
        logger.error(f"Project not found: {project_path}")
        sys.exit(1)
    except Exception as e:
        logger.error(f"Failed to run project: {e}")
        sys.exit(1)


def cmd_editor(args):
    """Open project in editor (Phase 5)"""
    logger.warning("Editor is not yet implemented (Phase 5)")
    logger.info("Use 'python main.py run <project>' to test your game instead")


def cmd_build(args):
    """Build/export a project (Phase 6)"""
    logger.warning("Build system is not yet implemented (Phase 6)")


def main():
    parser = argparse.ArgumentParser(
        description='Pyngine - 2D Game Engine for Python',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python main.py version
  python main.py create MyGame
  python main.py run MyGame
  python main.py editor MyGame
  python main.py build MyGame
        """
    )
    
    subparsers = parser.add_subparsers(dest='command', help='Command to execute')
    
    subparsers.add_parser('version', help='Show version information')
    
    create_parser = subparsers.add_parser('create', help='Create a new project')
    create_parser.add_argument('name', help='Project name')
    
    run_parser = subparsers.add_parser('run', help='Run a project')
    run_parser.add_argument('project', help='Project path or name')
    run_parser.add_argument('--debug', action='store_true', help='Enable debug mode')
    
    editor_parser = subparsers.add_parser('editor', help='Open editor')
    editor_parser.add_argument('project', help='Project path or name')
    
    build_parser = subparsers.add_parser('build', help='Build project')
    build_parser.add_argument('project', help='Project path or name')
    build_parser.add_argument('--target', default='windows', help='Target platform')
    
    args = parser.parse_args()
    
    if not args.command or args.command == 'version':
        cmd_version(args)
    elif args.command == 'create':
        cmd_create(args)
    elif args.command == 'run':
        cmd_run(args)
    elif args.command == 'editor':
        cmd_editor(args)
    elif args.command == 'build':
        cmd_build(args)
    else:
        parser.print_help()


if __name__ == '__main__':
    main()
