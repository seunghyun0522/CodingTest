function solution(phone_number) {

    return    phone_number.slice(0,-4).replace(/[0-9]/gi,"*")+ phone_number.slice(-4,phone_number.length);
}