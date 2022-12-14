function spiralSequence(input){
    let result = [];
    let x = 0;
    let y = 0;

    while(result.length < input.length * input[0].length){
        if(x == 0){
            result = result.concat(input[x]);
            x++;
            y = input[x].length - 1; 
            continue;
        }
        if(x==1 && y == input[x].length -1){
            result.push(input[x][y]);
            result.push(input[x+1][y]);
            x += 2;
            continue;
        }
        if(x == input.length-1){
            let reverse = input[x].reverse();
            result = result.concat(reverse);
            x -= 1;
            y = 0;
            continue;
        }

        if(x < input.length && y == 0){
            result.push(input[x][y]);
            result.push(input[x-1][y]);
            x -= 1;
            y++;
            continue;
        }

        if(y == 1 && x > 0){
            result.push(input[x][y]);
            result.push(input[x][y+1]);
            x++;
            y++;
            continue;
        }
        if(y == 2){
            result.push(input[x][y]);
            result.push(input[x][y-1]);
        }
    }

    return result;
}

let input = [
    [1,2,3,4],
    [12,13,14,5],
    [11,16,15,6],
    [10,9,8,7]
];
console.log(spiralSequence(input));