/*
You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.
Note: You have to use the arguments object.
*/

function destroyer(arr, ...args) {
    let tempArray = [];
    args.forEach(elemArgs => {    
      arr.forEach(elemArr =>{
        if (elemArr != elemArgs){tempArray.push(elemArr);}
      });
      arr = tempArray.slice();
      tempArray = tempArray.splice();
    });
    
    return arr;
  }
  
  console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, 
  "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", 
  "hotdog", "grandma", "bugati", "trojan"));