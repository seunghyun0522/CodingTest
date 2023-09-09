function solution(s) {

    let key = Math.floor(s.length/2);

    return s.length % 2 ===0 ? s[key-1]+s[key] : s[key];


}