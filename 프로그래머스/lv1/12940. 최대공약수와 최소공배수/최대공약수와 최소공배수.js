function solution(n, m) {
    var answer = [];
    let set;
    let GCD;
    let LCM;
    n > m ? set = n : set = m;
    
    for(let i=set; i>=1;i--){
        if(n % i ===0 && m%i ===0) {GCD = i ; break;}
    }
    
    LCM =  n * m/GCD;
    

    return [GCD,LCM];
}