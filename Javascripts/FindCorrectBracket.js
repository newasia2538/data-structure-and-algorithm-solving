function FindCorrectBracket(input){
    if(input.length < 1) return "input is empty";
    console.log(`${input}, ${input.length}`);
    let arr = [];
    let i = 0;
    while(i < input.length){
        if(input[i] == "{" || input[i] == "[" || input[i] == "("){
            arr.push(input[i]);
        }else if(input[i] == "}" || input[i] == "]" || input[i] == ")"){
            if(arr[arr.length-1] == "{" && input[i] == "}"){
                arr.pop();
            }else if(arr[arr.length-1] == "(" && input[i] == ")"){
                arr.pop();
            } else if(arr[arr.length-1] == "[" && input[i] == "]"){
                arr.pop();
            }else {
                return false;
            }
        }
        i++;
    }
    console.log(arr);

    return (arr.length <= 0);
}


console.log(FindCorrectBracket("{{{()[[]{}]}()}}"));
console.log(FindCorrectBracket("{{{()[[]{}]}())}}"));
console.log(FindCorrectBracket("{{{()[[]{}]}()}{}}"));
console.log(FindCorrectBracket("{{{()[[]{}]}()}}}"));
console.log(FindCorrectBracket("{{{()[[]{}]}(){}()}}"));
console.log(FindCorrectBracket("{{{()[[]{}]}(){}}}"));