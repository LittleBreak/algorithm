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
