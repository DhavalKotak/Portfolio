#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build folder
cd build

git init
git add -A
git commit -m "deploy"
git push -f https://github.com/DhavalKotak/portfolio.git master:gh-pages

cd ..

