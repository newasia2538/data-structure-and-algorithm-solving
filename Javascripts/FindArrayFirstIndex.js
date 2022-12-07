function FindArrayFirstIndex(array, value){
	if(array[0] == null) {
  	console.log("Array is empty.");
  	return 0;
  }
	let count = 1;
  let lastIndex = count - 1;
  
  while(array[lastIndex] != null){
      if(array[lastIndex] == value){
        console.log(`index of ${value} is ${lastIndex}`);
        return;
     }

      count = count*2;
      lastIndex = count - 1;
      
      if(array[lastIndex] > value){
        count= count/2;
        console.log(`count : ${count}, lastIndex : ${lastIndex} `);
        BinarySearch(array, count, lastIndex, value);
        return;
     }else if(array[lastIndex] == null){
      console.log(`Array does not contain with ${value}`);
     }
  }
}

function BinarySearch(array, start, end, value){
  if(array[start] == value) {
    console.log(`index of ${value} is ${start}`);
    return;
  }
  let midIndex = Math.floor((end+start)/2);
  if(array[midIndex-1] > value){
    BinarySearch(array, start, midIndex-1, value);
  }else if(array[midIndex-1] < value){
      BinarySearch(array, midIndex, end, value);
  } else if(array[midIndex-1] == value){
    console.log(`index of ${value} is ${midIndex-1}`);
    return;
  } else console.log(`Array does not contain with ${value}`);
}



console.log(FindArrayFirstIndex([1], 1));
console.log(FindArrayFirstIndex([1,2], 2));
console.log(FindArrayFirstIndex([3,6,7,9,18,55,140,5000], 55));
console.log(FindArrayFirstIndex([1,5,6,7,8], 9));
console.log(FindArrayFirstIndex([1,5,6,7,8,9,10,11,12,13], 10));
console.log(FindArrayFirstIndex([3,6,7,9,30,45,55,76,80,83,86,97,99,100,180,500,700,800,1000], 100));