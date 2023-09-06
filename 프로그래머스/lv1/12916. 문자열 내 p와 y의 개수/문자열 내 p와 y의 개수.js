function solution(s){
    s= s.toLowerCase();
    let Ycount =0;
    let Pcount = 0;
    for(let x of s){
        if(x==='p') Pcount ++;
        if(x==='y') Ycount++;
    }
    console.log(Pcount,Ycount);

    if(Pcount ===0 && Ycount ===0) return true;
    return Pcount===Ycount ;
}