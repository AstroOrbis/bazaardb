# bazaardb

BazaarDB is a quick key-value store that focuses on simplicity.

![npm bundle size](https://img.shields.io/bundlephobia/min/bazaardb?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/astroorbis/bazaardb?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/bazaardb?style=for-the-badge)
![Lines of code](https://img.shields.io/tokei/lines/github/astroorbis/bazaardb?style=for-the-badge)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/bazaardb?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/astroorbis/bazaardb?style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/astroorbis/bazaardb)

## Usage

```js
const BazaarDB = require('bazaardb');
const db = new BazaarDB.DB();
db.construct()
db.add('message', 'Hello World!');
console.log(db.get('message'));
```

## Available commands

- `db.construct()` - Constructs the database (MUST BE RUN BEFORE ANY OTHER COMMAND)

- `db.add(key, value)` - Adds a key-value pair to the database
- `db.edit(key, value)` - Edits a key-value pair in the database
- `db.get(key)` - Gets a value from the database
- `db.remove(key)` - Removes a key-value pair from the database
- `db.dump(consolelog)` - Returns the database as JSON - `consolelog` is optional and will also log the output to the console (useful for testing!)
- `db.load(json)` - Loads a JSON file into the database
- `db.export()` - Exports the database to database.bzdb
- `db.clear()` - Clears the database

## License

Copyright 2022 Astro Orbis

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
