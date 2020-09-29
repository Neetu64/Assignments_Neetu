function add(){
    var args = [...arguments];
    let total = args.reduce((total, value) => total + value)
    function addReturn(){
        var args1 = [...arguments]
        return add(...args, ...args1)
    }    
    addReturn.toValue = total;
    return addReturn;
}
console.log(add(2,3,1).toValue);
console.log(add(2,1)(3).toValue);
console.log(add(2)(3)(1).toValue);

