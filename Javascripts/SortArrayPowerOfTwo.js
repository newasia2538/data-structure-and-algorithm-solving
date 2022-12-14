function newSortArray(array){
	if(array.length <= 0 || array == null) return [];

  let latestIndex = 0;
  let newArray = [];
  
  for(let index = 0; index < array.length; index++){
      let powerUp = Math.pow(array[index], 2);

      if(index==0){
          newArray.push(powerUp);
          latestIndex = 0;
          console.log(`index == 0 : ${latestIndex}, ${newArray}`);
          continue;
      }
      
      if(powerUp > newArray[latestIndex]){
          if(newArray.length > 1 && latestIndex < newArray.length-1){
              if(powerUp == newArray[latestIndex+1]){
              	console.log(`powerUp == newArray[latestIndex+1] : ${latestIndex}, ${newArray}`);
                newArray.splice(latestIndex+2, 0, powerUp);
                latestIndex++;
              } else {
              console.log(`powerUp != newArray[latestIndex+1] : ${latestIndex}, ${newArray}`);
                  newArray.splice(latestIndex+1, 0, powerUp);
              }
          } else {
          console.log(`newArray.length > 1 : ${latestIndex}, ${newArray}`);
              newArray.push(powerUp);
          }
          latestIndex++;
      }else if(powerUp < newArray[latestIndex]){
        newArray.unshift(powerUp);
        if(latestIndex > 0) latestIndex--;
        console.log(`powerUp < newArray[latestIndex] : ${latestIndex}, ${newArray}`);
      }
  }
  console.log(`result : ${newArray}`);
  return newArray;
}

//newSortArray([-1,0,1,2]);
newSortArray([-3,-2,-1,0,1,2,3,4]);
//newSortArray([-2,-1,0,1,2]);

//newSortArray([-3,-2,-1,0,1,2,3]);