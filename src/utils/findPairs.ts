function findPairs(list: Array<number>, target: number){
    const hash = new Map();
    const output = [];
    for(let i = 0; i < list.length; i++){
        if(hash.has(target - list[i])){
            output.push([list[hash.get(target - list[i])], list[i]])
        }
        hash.set(list[i], i)
    }
    return output;
}

export default findPairs;