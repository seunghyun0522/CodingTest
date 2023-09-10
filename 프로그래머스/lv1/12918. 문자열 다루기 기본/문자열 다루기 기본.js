function solution(s) {
    let re = /^[0-9]+$/;
    return ((s.length === 4 || s.length ===6) && re.test(s));

}