const repeatglobal = function(x, nb) {
        if (Array.isArray(x)) {
            console.log("la valeur entré est un tableau: ");
            return repeatArray(x, nb);
        } else if (typeof x === 'string' || x instanceof String) {
            console.log("la valeur entré est un string: ");
            return repeatStr(x, nb);
        }
        else {
          console.log("merci d'entrer une valeur valide!");
        }
    }
    //Working
const repeatStr = function(str, nb) {
        let result = "";
        for (let i = 0; i < nb; i++) {
            result += str;
        }
        /*console.log("result:", result);console.log("str:", str);console.log("nb:", nb);*/
        return result;
    }
    //Working
const repeatArray = function(arr, nb) {
    let result = [];
    for (let i = 0; i < nb; i++) {
        result = result.concat(arr);
    } //for test only can be removed
    /*console.log("result:", result);console.log("arr:", arr);console.log("nb:", nb);*/
    return result;
}
