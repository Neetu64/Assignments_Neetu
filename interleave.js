
function interleave (arr1, arr2, arr3) {
    let newArr = [];
   
    let maxLength = Math.max(arr1.length, arr2.length, arr3.length);
    
    for (let i = 0; i < maxLength; i++) {
        if(i < arr1.length){
            newArr.push(arr1[i]);
        }
        if(i< arr2.length){
            newArr.push(arr2[i]);
        }
        if(i< arr3.length){
            newArr.push(arr3[i]);
        }
    }
        return newArr;
    }

    console.log(interleave([1, 2, 3], [4, 5, 6], ["a", "b", "c"]));
    console.log(interleave([1, 2, 3], [4, 5], []));
