# bazaardb

BazaarDB is a quick key-value store focusing on simplicity and adaptability.

![npm bundle size](https://img.shields.io/bundlephobia/min/bazaardb?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/astroorbis/bazaardb?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/bazaardb?style=for-the-badge)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/bazaardb?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/astroorbis/bazaardb?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/astroorbis/bazaardb?style=for-the-badge)

## Usage

```js
const BazaarDB = require('bazaardb');
const db = new BazaarDB.DB();
db.add('message', 'Hello World!');
console.log(db.get('message'));
```

## Available commands

- `db.add(key, value)` - Adds a key-value pair to the database
- `db.edit(key, value)` - Edits a key-value pair in the database
- `db.get(key)` - Gets a key-value pair from the database based on input
- `db.remove(key)` - Removes a key-value pair from the database
- `db.dump(consolelog)` - Returns the database as JSON - `consolelog` is optional and will also log the output to the console (useful for testing!)
- `db.load(json)` - Loads a JSON file into the database
- `db.export()` - Exports the database to database.bzdb
- `db.clear()` - Clears the database

## License

Copyright 2022 Astro Orbis ("Astro") & Samuel A. Roizen ("Sam")

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
