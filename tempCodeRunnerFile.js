function merge_sort(left_half, right_half) {
    var i = 0;
    var j = 0;
    var sorted_arr = [];

    while (i < left_half.length || j < right_half.length) {
        if (i === left_half.length) {
            sorted_arr.push(right_half[j]);
            j++;
        }
        else if (j === right_half.length || left_half[i] <= right_half[j]) {
            sorted_arr.push(left_half[i]);
            i++;
        } else {
            sorted_arr.push(right_half[j]);
            j++;
        }
    }
    return sorted_arr;
}

let arr1 = [3, 2, 6, 8];
let arr2 = [7, 1, 5, 9];
console.log("\nBefore : " + arr1 +","+ arr2);
let sorted_arr = merge_sort(arr1, arr2);
console.log("After: " + sorted_arr + "\n");
