function solution(myString, pat) {
    let str = "";
    let patLangth = pat.length;
    let answer = 0;

    for(let i = 0; i < myString.length; i++) {
        for(let j = i; j < patLangth; j++) {
            str += myString[j];
        }

        if(str === pat) answer++
		
        str = "";
        patLangth++;
    }

    return answer;
}