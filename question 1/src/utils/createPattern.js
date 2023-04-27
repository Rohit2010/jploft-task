export function createPattern(name) {
    const l = name.length;
    let startIndex = 0;
    let pattern = '';
    for(let i=1; i<l; i++){
        pattern = pattern + name.substr(startIndex, i) + '\n';
        startIndex += i;
        if(startIndex>l){
            break;
        }
    }
    return pattern
 }