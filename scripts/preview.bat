@echo off
SETLOCAL
where npm >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
  echo Error: npm is required to run this script. Install Node.js and npm first.
  exit /b 1
)

echo Installing dependencies...
npm install

echo Starting preview...
npm run preview
