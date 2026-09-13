@echo off

setlocal enabledelayedexpansion
cd /d "%~dp0"

echo.
echo  Pyngine Installation Script
echo.

net session >nul 2>&1
if %errorLevel% neq 0 (
    echo This script requires administrator privileges.
    echo Please right-click and select "Run as administrator"
    pause
    exit /b 1
)

echo [Step 1/5] Checking Python installation...
python --version >nul 2>&1

if %errorLevel% neq 0 (
    echo Python not found. Would you like to install Python 3.12?
    echo.
    set /p install_python="Install Python? (Y/N): "
    if /i not "!install_python!"=="Y" (
        echo Python is required. Installation cancelled.
        pause
        exit /b 1
    )
    
    echo.
    echo Downloading Python 3.12 installer...
    powershell -Command ^
        "try { ^
            $progressPreference = 'silentlyContinue'; ^
            Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.12.8/python-3.12.8-amd64.exe' -OutFile 'python-installer.exe'; ^
            Write-Host 'Download complete' ^
        } catch { ^
            Write-Host 'Download failed: $_' ^
        }"
    
    if exist "python-installer.exe" (
        echo Installing Python...
        python-installer.exe /quiet InstallAllUsers=0 PrependPath=1 ^
            DefaultJustForMeTargetDirectory="%USERPROFILE%\AppData\Local\Programs\Python\Python312"
        
        timeout /t 5 /nobreak
        
        for /f "usebackq tokens=2,*" %%A in (`reg query HKCU\Environment /v PATH`) do set PATH=%%B
        
        del python-installer.exe
        
        python --version >nul 2>&1
        if !errorLevel! neq 0 (
            echo.
            echo Warning: Python installation may have issues. Please install Python 3.12+ manually.
            echo Download from: https://www.python.org/downloads/
            pause
            exit /b 1
        )
    ) else (
        echo Failed to download Python.
        echo Please install Python 3.12+ manually from: https://www.python.org/downloads/
        pause
        exit /b 1
    )
) else (
    for /f "tokens=*" %%i in ('python --version') do set python_version=%%i
    echo !python_version! detected ✓
)

echo.

echo [Step 2/5] Creating Python virtual environment...

if exist "venv\" (
    echo Virtual environment already exists.
    set /p recreate_venv="Recreate it? (Y/N): "
    if /i "!recreate_venv!"=="Y" (
        rmdir /s /q venv
        python -m venv venv
    )
) else (
    python -m venv venv
)

echo Virtual environment ready ✓
echo.

echo [Step 3/5] Activating virtual environment and upgrading pip...

call venv\Scripts\activate.bat

python -m pip install --upgrade pip setuptools wheel >nul 2>&1
if %errorLevel% neq 0 (
    echo Warning: Failed to upgrade pip. Continuing...
)

echo Pip upgraded ✓
echo.

echo [Step 4/5] Installing project dependencies...

if exist "requirements.txt" (
    pip install -r requirements.txt
    if !errorLevel! neq 0 (
        echo.
        echo Error: Failed to install dependencies.
        echo Please check requirements.txt and try again.
        pause
        exit /b 1
    )
) else (
    echo requirements.txt not found. Creating default dependencies...
    (
        echo pygame-ce==2.5.1
        echo typing-extensions>=4.8.0
        echo pytest>=7.4.0
    ) > requirements.txt
    
    pip install -r requirements.txt
    if !errorLevel! neq 0 (
        echo.
        echo Error: Failed to install dependencies.
        pause
        exit /b 1
    )
)

echo Dependencies installed ✓
echo.

echo [Step 5/5] Verifying installation...

python -c "import pygame; print(f'pygame {pygame.version.ver} OK')" 2>nul
if !errorLevel! neq 0 (
    echo Warning: pygame not found or error occurred.
) else (
    echo pygame verified ✓
)

python --version
echo.
echo.
echo  Installation Complete! ✓
echo.
echo Virtual environment is ready at: %cd%\venv
echo.
echo Next steps:
echo   1. Run: venv\Scripts\activate.bat
echo   2. Run: python main.py create MyGame
echo   3. Run: python main.py editor MyGame
echo.
echo For more information, see README.md
echo.

pause
