function swap(arr, index_i, index_j) {
    let temp = arr[index_i];
    arr[index_i] = arr[index_j];
    arr[index_j] = temp;
}
function bubble_sort(arr){

    let len = arr.length;
    let i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}
let arr = [9,3,5,1,6,8];
console.log("\nBefore Bubble Sort: " + arr);
bubble_sort(arr);
console.log("After Bubble Sort: " + arr + "\n");
