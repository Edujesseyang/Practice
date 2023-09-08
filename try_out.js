let obj = {
    name: "yang",
    age: 30,
    family: ["luycky", "Chloe"],
    address: {
        state: "CA",
        city:"Sunnyvale"
    }
}

let string = JSON.stringify(obj);

console.log(string);

let object = JSON.parse(string);

console.log(object);