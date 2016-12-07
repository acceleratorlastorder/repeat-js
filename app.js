//FONCTIONEL
const repeat = function(str, nb) {
    let result = "";
    for (let i = 0; i < nb; i++) {
        result += str;
    }/* for test only can be removed
    console.log("result:", result);
    console.log("str:", str);
    console.log("nb:", nb);*/
    return result;
}
console.log(repeat("abc", 3) === "abcabcabc");
console.log(repeat("bonjour", 2) === "bonjourbonjour");
console.log(repeat("hello", 0) === "");
