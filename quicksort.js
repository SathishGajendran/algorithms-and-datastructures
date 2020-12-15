// let array = [20, 22, 10, 6, 2, 9, 4, 31, 25, 3];
let array = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];

let pivot = (arr)=>{
    let pi = 0;
    let firstElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < firstElement) {
            let temp = arr[pi + 1];
            arr[pi + 1] = arr[i];
            arr[i] = temp;
            pi++;
        }
    }

    arr[0] = arr[pi];
    arr[pi] = firstElement;

    return {
        pi,
        arr
    };
}

let quicksort = (array)=>{
    if (array.length < 2)
        return array;
    let {pi, arr} = pivot(array);
    return [...quicksort(arr.slice(0, pi)), arr[pi], ...quicksort(arr.slice(pi + 1))];
}
;

let result = quicksort(array);
console.log(array);
console.log(result);
