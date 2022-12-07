function FindArrayCount(array){
	if(array[0] == null) {
  	console.log("Array is empty.");
  	return 0;
  }
	let count = 1;
  let lastIndex = count - 1;
  
  while(array[lastIndex] != null){
      count = count*2;
      lastIndex = count - 1;
      if(array[lastIndex] == null){
        count= count/2;
      	BinarySearch(array, count, lastIndex);
     }
  }
}

function BinarySearch(array, start, end){
	if(end-start <= 1){
    console.log(array);
    console.log(`result : ${(array[end] == null) ? start : end}`);
  	return (array[end] == null) ? start : end;
  }
  
  let midIndex = Math.floor((end+start)/2);
  if(array[midIndex-1] == null){
    BinarySearch(array, start, midIndex-1);
  }else {
    BinarySearch(array, midIndex, end);
  }
}



console.log(FindArrayCount([1]));
console.log(FindArrayCount([1,2]));
console.log(FindArrayCount([3,6,7,9,3,78,55,14,50]));
console.log(FindArrayCount([1,5,5,6,7,8]));
console.log(FindArrayCount([1,5,5,6,7,8,9,10,11,12,13]));
console.log(FindArrayCount([3,6,7,9,3,78,55,14,50,3,6,7,9,3,78,55,14,50,100]));