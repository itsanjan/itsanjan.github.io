@echo off
SETLOCAL
where npm >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  echo Error: npm is required to run this script. Install Node.js and npm first.
  exit /b 1
)

echo Installing dependencies...
npm install

echo Building project...
npm run build

echo Build complete. Preview with npm run preview:build or scripts\preview.bat
