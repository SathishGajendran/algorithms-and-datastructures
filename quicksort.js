// const array = [20, 22, 10, 6, 2, 9, 4, 31, 25, 3];
const array = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

const pivot = (arr)=>{
    const firstElement = arr[0];
    let pi = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < firstElement) {
            const temp = arr[pi + 1];
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

const quicksort = (array)=>{
    if (array.length < 2) {
        return array;
    }
    const {pi, arr} = pivot(array);
    return [...quicksort(arr.slice(0, pi)), arr[pi], ...quicksort(arr.slice(pi + 1))];
};

const result = quicksort(array);
console.log(array);
console.log(result);
