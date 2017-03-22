# MimeType-parser

## Synopsis

A key-value parser of Mime Type's

## Motivation

The mimetype-parser library has been created to facilitate the parsing of mimetypes easily.

## Code Example

```
MimeTypeParser.parseMime('application/json'); // --> Return "json"
```

## Installation

`bower install --save mimetype-parser`

## API Reference

MimeTypeParser.parseMime('application/json'); // --> Return "json"

MimeTypeParser.parseMimeWithDot('application/json'); // --> Return ".json"

MimeTypeParser.parseMime('json'); // --> Return "application/json"

MimeTypeParser.parseMimeWithDot('.json'); // --> Return "application/json"

## License

MIT License

Copyright (c) 2017 Jesús López Morales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
