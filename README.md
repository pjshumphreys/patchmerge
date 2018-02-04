patchmerge
==========

An implementation of the JSON Merge Patch [RFC 7396](http://tools.ietf.org/html/rfc7396), with extensions to support merging of arrays of objects.

JSON Merge Patch [(RFC 7396)](http://tools.ietf.org/html/rfc7396) is a standard format that
allows you to update a JSON document by sending the changes rather than the whole document.
JSON Merge Patch plays well with the HTTP PATCH verb (method) and REST style programming.

patchmerge extends RFC 7396 in that if an array in the patch or the original object contains further objects, these fields are merged rather than replaced.


## Install

Install the current version (and save it as a dependency):

### npm

```sh
$ npm install patchmerge --save
```

## Usage

```js
patchMerge = require('patchmerge');

console.log(JSON.stringify(patchMerge(
  {
    "a": 1,
    "b": 3,
    "n": 14,
    "p": 15,
    "q": 16,
    "d": [1,2,3],
    "e": [
      [4,5,6],
      [{"k": 11, "m":13 }],
      "a",
      {
        "f":5
      },
      {},
      {
        "g":6
      }
    ],
    "i": {
      "j": 9
    }
  },
  {
    "a": 2,
    "c": 4,
    "n": null,
    "p": {},
    "q": [],
    "d": [4,5,6],
    "e": [
      [7,8,9],
      [{"k":12}],
      {},
      {},
      {
        "g": 7
      },
      null,
      {
        "h": 8
      }
    ],
    "i": {
      "j": 10
    }
  }
), null, 2));
/*
Logs this the the console:

{
  "a": 2,
  "b": 3,
  "p": 15,
  "q": [],
  "d": [
    4,
    5,
    6
  ],
  "e": [
    [
      7,
      8,
      9
    ],
    [
      {
        "k": 12,
        "m": 13
      }
    ],
    "a",
    {
      "f": 5
    },
    {
      "g": 7
    },
    null,
    {
      "h": 8
    }
  ],
  "i": {
    "j": 10
  },
  "c": 4
}
*/
```
