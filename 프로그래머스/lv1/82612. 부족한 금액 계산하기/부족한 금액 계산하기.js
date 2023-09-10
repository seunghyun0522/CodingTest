function solution(price, money, count) {
    let result =0;
    let increase =price;
    while(count--){
        result += price;
        price += increase;
        console.log(result)
    }
    if(result < money) return 0;
    return result - money;
}