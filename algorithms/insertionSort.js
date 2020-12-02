function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    debugger;
    let value = items[i]
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value
  }

  return list
}

const list = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionSort(list)) // [ 17, 20, 26, 31, 44, 54, 55, 77, 93 ]




function insertionSort (array) {
  // Loop through each element
  for (let i = 0; i < array.length; i++){
  // store the current item value so it can be placed correctly
  // in the sorted portion of the array
    const value = array[i];
  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with
    for (let j = i - 1; j > -1 && array[j] > value; j--){
  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)
      array[j + 1] = array[j]
  // We can now insert the item in its sorted location   
  }
  array[j + 1] = value
  // Remember to return the list!
  }
  return list;
}


function insertionSort (items) {
  for (var i = 0; i < items.length; i++) {
    let value = items[i]
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j]
    }
    items[j + 1] = value
  }
  return items;
}


function insertionSort (array) {
  for (let i = 0; i < array.length; i++){
    let value = array[i]

    let j = i - 1;
    while((j > -1) && (array[j] > value)) {
      array[j + 1] = array[j];
      j--
    }
    array[j + 1] = value;
  }
  return array;
}