const arr = [6, 1, 2, 3, 4, 5]; // defining arr

const bubble_sort = (arr) => {
  for (let i = 0; i < arr.length + 1; i++) {
    //took 1 on first loop
    // arr.length + 1 is 7 if i is smaller then 7 the loop will run
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // took 1 on first loop
      // arr.length-1-i
      //  is arr.length-1- (i=on which number the i is on (array number))
      // meaning it if i is on 1 it will be arr.length - 1 - 1 which will be 7-1-1 = 5
      //j array will run 5 times
      if (arr[j] > arr[j + 1]) {
        // 1 < 2 if 1 is smaller then 2 then it will switch their spaces
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(temp);
        console.log(j);
      }
    }
  }
  return arr;
};
console.log(bubble_sort(arr));
