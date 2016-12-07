const namelong = ["Landry", "Sharon", "Emerson", "Roberto", "Ravana", "Odin", "Bahamut", "Ifrit"];
const namemedium = ["Landry", "Sharon"];
const nameshort = ["Landry"];
const test = ["salut"];





console.log(repeatglobal("lol", 7) === "lollollollollollollol");
console.log(repeatglobal(nameshort, 2).toString() === ["Landry", "Landry"].toString());
console.log(repeatglobal("lol", 2) === "lollol");
console.log(repeatglobal(namemedium, 8).toString() === ["Landry", "Sharon","Landry", "Sharon","Landry", "Sharon","Landry", "Sharon","Landry", "Sharon","Landry", "Sharon","Landry", "Sharon","Landry", "Sharon"].toString());
console.log(repeatglobal("lol", 14) === "lollollollollollollollollollollollollollol");
console.log(repeatglobal(namelong, 2).toString() === ["Landry", "Sharon", "Emerson", "Roberto", "Ravana", "Odin", "Bahamut", "Ifrit","Landry", "Sharon", "Emerson", "Roberto", "Ravana", "Odin", "Bahamut", "Ifrit"].toString());
console.log(repeatglobal("lol", 28) === "lollollollollollollollollollollollollollollollollollollollollollollollollollollollol");
console.log(repeatglobal(25555, 28));
