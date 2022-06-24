let user = [
    { name: 'John', age: 20, job: 'writer' },
    { name: 'Doe', age: 22, job: 'writer' },
    { name: 'Don', age: 21, job: 'Coder' }];

let arrayLength = user.length;

for (let i = 0; i < arrayLength; i++) {
    console.log(user[i]);
}
const send = usee =>
    new Promise(resolve =>
        setTimeout(() => resolve(usee), 4000)
    );

    const sendAlluser = async () => {
    for (usee of user) {
        const userInfo = await send (usee);
        console.log(`Mengambil data ${userInfo}`);
    }
    console.log('Data Sudah terkirim');
};
console.log(arrayLength)

sendAlluser()