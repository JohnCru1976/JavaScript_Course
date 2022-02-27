/* 
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order..
*/

function diffArray(arr1, arr2) {
    const newArr = [];
    const tempArr = arr1.concat(arr2);
  
    tempArr.forEach(element =>{
      const nElements = tempArr.filter(elemBis => 
                        elemBis === element).length;
      if (nElements == 1) {newArr.push(element);} 
    });
  
    return newArr.sort();
  }
  
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
