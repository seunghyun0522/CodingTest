function solution(myString, pat) {
    return [...myString].map(x => 
        x =='A'? 'B':'A'
    ).join('').includes(pat) ? 1 : 0;


}
