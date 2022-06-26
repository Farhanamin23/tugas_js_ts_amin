let hasil2 = 20;
const genap = (angka: number) => {
  for (let hasil2 = 1; hasil2 <= 20; hasil2++){
    if (hasil2 % 2 == 0) {
      return hasil2 +'genap'
    } else {
      return hasil2 + 'bukan genaps'
    }
  }
}
console.log(hasil2);


