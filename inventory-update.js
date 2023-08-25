/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item. */

function updateInventory(arr1, arr2) {

  const arr1Names = [];
  const arr2Names = [];
  const newNames = [];

  arr2.forEach(item => { arr2Names.push(item[1]) });
  arr1.forEach(item => { arr1Names.push(item[1]) });

  arr2Names.forEach((name) => {
    if (!arr1Names.includes(name)) {
      newNames.push(name);
    }
  })

  arr2.forEach((item2) => {
    if (newNames.includes(item2[1])) {
      arr1.push(item2);
    }
    else{
      arr1.forEach((item1) => {
        if (item2[1] === item1[1]) {
          item1[0] += item2[0];
        }
      })
    }
  })

  arr1.sort((currItem, nextItem) => {currItem[1] > nextItem[1] ? 1 : -1; });

  return arr1;
}

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));