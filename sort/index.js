/**insertion algotithm
 * 
 */
function insertionSort(array) {
    for (var index = 1; index < array.length; index++) {
        var element = array[index];
        var beforeIndex = index - 1
        while(beforeIndex > -1 && array[beforeIndex] > element) {
            array[beforeIndex + 1] = array[beforeIndex]
            beforeIndex--
        }
        array[beforeIndex + 1] = element
    }
}
function bubbleSort(array) {
    let isSorting = true;
    for (let index = 0; index < array.length && isSorting; index++) {
        isSorting = false;
        for (let j = array.length - 2; j >= index; j--) {
           if(array[j]> array[j+1]) {
               // 前一位比后一位大，交换位置
               const temp = array[j];
               array[j] = array[j+1];
               array[j+1] = temp;
               isSorting = true;
           }
        }
    }
}
function bubbleSort1(array){
    for (let index = 0; index < array.length; index++) {
        for (let j = index + 1; j < array.length; j++) {
            if(array[index] > array[j]){
                const temp = array[index];
                array[index] = array[j];
                array[j] = temp;
            }
        }
    }
    return array
}

console.log(bubbleSort1([9,8,7,6,5,4,3]))