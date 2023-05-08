function solution(order) {
    let a= [];
    let cnt =0;
    a = order.toString().split('');
    return a.filter((x)=> x!=0 && x%3===0).length;
}