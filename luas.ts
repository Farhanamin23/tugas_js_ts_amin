const Lingkar = (r: number): number => {
    let hasil = 3.14 *(r*r)
    return hasil
}
console.log(Lingkar(20))
//-----------------------------//
const Segitiga = (alas: number, tinggi: number): number => {
    let hasil2 = 1 / 2 * (alas * tinggi)
    return hasil2
}
console.log(Segitiga(20, 20))
//---------------------------------//
const kotak = (panjang: number, lebar: number, tinggi: number): number => {
    let hasil3 = (panjang * lebar * tinggi)
    return hasil3
}
console.log(kotak(20, 20, 20))
//-------------------------------------//
const kerucut = (r: number, t: number): number => {
    let hasil4 = (r * t)
    return hasil4
}
console.log(kerucut(14, 24))
//-----------------------------------------//
const jajargenjang = (a: number, b: number): number => {
    let hasil7 = 2 * (a + b)
    return hasil7
}
console.log(jajargenjang(10,17))