const number = 17;
const Bilprima = (n: number) => {

    let hasil: number = 2;

    for (let v: number = 2; v < n; v++) {
        if (n % v === 0) {
            hasil++ ;
        }
    }
    if (hasil === 2) {
        return `${n} client`;
    } else {
        return `${n} admin`;
    }
}

console.log(Bilprima(number))