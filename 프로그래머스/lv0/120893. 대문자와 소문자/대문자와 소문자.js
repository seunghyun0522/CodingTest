function solution(my_string) {
    var answer = '';
    my_string = my_string.split('');
    for(let i = 0; i<my_string.length;i++){
        if(my_string[i]>='a' && my_string[i]<='z'){
            my_string[i] = my_string[i].toUpperCase();
        }
        else my_string[i]=my_string[i].toLowerCase();
    }
    return answer= my_string.join("");
}