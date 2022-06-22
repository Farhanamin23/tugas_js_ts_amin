const inputNomor = 4;
const fibo: string[] = [];

const listfibo = (num: number) => {
    let n1 = 0,
        n2 = 1,
        nt;

    for (let i: number = 1; i < num; i++) {
        nt = n1 + n2;
        n1 = n2;
        n2 = nt;

        if (n1 % 2 === 0) {
            fibo.push(`${n1} client`);
        } else {
            fibo.push(`${n1} admin`);
        }
    }

    return fibo;
};

console.log(listfibo(inputNomor));
