function indexEqualsValue(arr){
    for (var i=0; i<arr.length; i++){
        if(arr[i] == i){
            return i;
        }
    }
    return -1;
}

console.log(indexEqualsValue([-8,0,2,5]));
console.log(indexEqualsValue([-1,0,3,6]));
console.log(indexEqualsValue([0,1,2,5]));
