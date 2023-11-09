// Build a function called keysMatch() which will be given two objects and an array of strings.

// It will use the strings to look up the key-value pair in each object and compare the values. If all the values are explicitly equal to each other, return true, otherwise return false.

// We can start with the following function definition:

const keysMatch = function(obj1, obj2, keys) {
  // loop all the key of keys
  // check if both objs have the key
  // if not return false
  // check if key in obj1 === obj2
  // if not return false
  // return true

  for(const key of keys) {
    // if(!Object.keys(obj1).includes(key) || !Object.keys(obj2).includes(key)){
    //   return false;
    // }
    if (!obj1.hasOwnProperty(key) || !obj2.hasOwnProperty(key)) {
      return false;
    }
    if(obj1[key] !== obj2[key]){
      return false
    }
  }
  return true;
};