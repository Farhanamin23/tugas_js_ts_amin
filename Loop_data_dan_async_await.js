let user = [
    { name: 'John', age: 20, job: 'writer' },
    { name: 'Doe', age: 22, job: 'writer' },
    { name: 'Don', age: 21, job: 'Coder' }];

for (i = 0; i < user.length; i++){
    console.log(i + "Data User" + user[i] );
}
const send = usee =>
    new Promise(resolve =>
        setTimeout(() => resolve(usee), 1000)
    );

    const sendAlluser = async () => {
    for (usee of user) {
        const userInfo = await send (usee);
        console.log(`Mengambil data ${userInfo}`);
    }
    console.log('Data Sudah terkirim');
};
console.log(user)
sendAlluser()