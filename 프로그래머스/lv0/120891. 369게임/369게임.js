function solution(order) {
    let a= [];
    let cnt =0;
    a = order.toString().split('');
    for(let i=0;i<a.length;i++){
        if(a[i]!=0 && a[i]%3===0) cnt ++;
    }
    return cnt;
}