patchMerge = require('./index.js');

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
