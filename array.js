// let arr = [1,2,3,4,567,7];
// console.log(Array.isArray(arr));

// arr.push(3);
// arr.pop();
// arr.shift();
// arr.unshift(1);

// arr.slice(1);
// console.log(arr);

// let msec = Date.parse("march 25, 2002");
// let date = new Date(msec);
// let msec = Date.parse("march 25, 2002");
// let date = new Date(234567866677);
// // console.log(date.getUTCFullYear());
// let date = new Date();
// console.log(date.getTimezoneOffset()); // returns the time zone differencce in minutes

// MAP
const map = new Map([
    ["apple",500],
    ["banana",299],
    ["orange",11]
]);

map.set("apple",200);
map.set("kiwi", 100);

console.log(map.get("apple")); // 200
console.log(map.has("banana")); // true
console.log(map);//return all the key and value pairs
map.delete("kiwi");
console.log(map.size); // 3
// map.clear(); // removes all the key and value pairs
map.has("kiwi"); // false

// Iterate through the map
map.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});

map.forEach((value,key)=>{
    console.log(`Key: ${key}, value: ${value}`);
});

for(const x of map.values()) {
    console.log(x);

}
for(const x of map.entries()){
    console.log(x); // returns an array of key and value pairs
}