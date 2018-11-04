// 本文展示的是es6中新增的数据结构Map的用法

// 1. Map的初始化
console.group('Map的初始化');
console.log('初始化一个空对象');
let map0 = new Map();

console.log(
  '通过一个数组初始化，数组里面的每个元素也是个数组，包含key和value两个值；key可以是任意数据类型，而Object中的key都会转化成string类型的'
);
let map = new Map([
  [1, 'number key'],
  ['index1', 'string key'],
  [{ name: 'map' }, 'object key'],
  [Symbol('111'), 'symbol key'],
  [null, 'null key'],
  [undefined, 'undefined key'],
  [true, 'boolean key'],
  [[1, 2], 'array key'],
  [() => {}, 'function key']
]);
console.groupEnd();

// 2. Map的 has、get、set、delete、clear方法
console.group('Map的 has、get、set、delete、clear方法');
console.log(map.get(1));
console.log(map.get('index1'));
console.groupEnd();

// 3. Map的遍历
console.group('Map的遍历');
console.groupCollapsed('forEach遍历');
map.forEach((value, key) => {
  console.log(value, key);
});
console.groupEnd();

console.groupCollapsed('遍历keys');
for (const key of map.keys()) {
  console.log(key);
}
console.groupEnd();

console.groupCollapsed('遍历values');
for (const value of map.values()) {
  console.log(value);
}
console.groupEnd();

console.groupCollapsed('遍历entries');
for (const [key, value] of map.entries()) {
  console.log(key, value);
}
console.groupEnd();
console.groupEnd();

// 4. Map和 Object、JSON、Array的相互转换
console.group('Map和 Object、JSON、Array的相互转换');

console.groupCollapsed('Map 和 Object的相互转换');
let map2 = new Map([['name', 'liuxiaoli'], ['age', 32]]);
function strMap2Object(strMap) {
  let obj = Object.create(null);
  for (const [key, value] of strMap) {
    obj[key] = value;
  }
  return obj;
}

function object2StrMap(obj) {
  let strMap = new Map();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      strMap.set(key, obj[key]);
    }
  }
  return strMap;
}
console.groupEnd();

console.groupCollapsed('Map 和 Array 的相互转换');
function map2Array(map) {
  let arr = [...map];
  return arr;
}

function array2Map(arr) {
  let map = new Map(arr);
  return map;
}
console.groupEnd();

console.groupCollapsed('Map 和 JSON 的相互转换');
console.groupCollapsed('Map 的 key 都是字符串，可以转换成对象JSON');
function strMap2Json(strMap) {
  return JSON.stringify(strMap2Object(strMap));
}
console.groupEnd();

console.groupCollapsed('JSON 的 key 都是字符串，可以转换成 key都是字符串的 Map');
function json2StrMap(jsonStr) {
  return object2StrMap(JSON.parse(jsonStr));
}
console.groupEnd();

console.groupCollapsed('Map 的 key包含非字符串，可以转换为数组JSON');
function map2ArrayJson(map) {}
console.groupEnd();

console.groupCollapsed('JSON是个数组，转换的 Map的 key包含非字符串');
function arrayJson2Map(arrayJson) {}
console.groupEnd();

console.groupEnd();
console.groupEnd();
