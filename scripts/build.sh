#!/usr/bin/env bash
set -e

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is required to run this script. Install Node.js and npm first."
  exit 1
fi

echo "Installing dependencies..."
npm install

echo "Building project..."
npm run build

echo "Build complete. Preview with npm run preview:build or scripts/preview.sh"
