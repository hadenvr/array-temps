var test = ["Bob", "Bob", "Steve", "Sarah", "Sarah"];
var test2 = ["Jim", "Jose", "Jose", "Jackson", "James", "Jill", "Jill"];

// Option 1 with nested for loop

function removeDuplicatesFromArray1(arr) {
  var newArr = [];
  for (var x = 0; x < arr.length; x++) {
    var test = true;
    for (var i = 0; i < newArr.length; i++) {
      if (arr[x] === newArr[i]) {
        test = false;
      }
    }
    if (test === true) {
      newArr.push(arr[x]);
    }
  }
  return newArr;
}

// Option 2 using includes method

function removeDuplicatesFromArray2(arr) {
  var newArr = [];
  for (var x = 0; x < arr.length; x++) {
    if (newArr.includes(arr[x]) === false) {
      newArr.push(arr[x]);
    } else {
      console.log("duplicate found!");
    }
  }
  return newArr;
}

// Option 3 using set and es6 spread opperator

function removeDuplicatesFromArray3(arr) {
  var newArr = new Set(arr);
  return [...newArr];
}
