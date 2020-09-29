function camelCase(str){
    var res = str.charAt(0);
    for(var i=1; i<str.length; i++){
        if(str[i] == str[i].toUpperCase()){
            res = res  + " " + str[i];
        }else{
            res = res + str[i];
        }
    }
    return res;
}
console.log(camelCase("camelCase"));
console.log(camelCase("CamelCase"));
console.log(camelCase("camelCasePrg"));