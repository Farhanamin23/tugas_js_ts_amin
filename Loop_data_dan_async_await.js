let user = [
    { name: 'John',age: 20, job: 'writer' },
    { name: 'Doe', age: 22, job: 'writer' },
    { name: 'Don', age: 21, job: 'Coder' }];

let arrayylength = user.length;
for (i = 0; i < user.length; i++){
    console.log(i + "name: " + user[i].name,"age: "+user[i].age,"Job: "+user[i].job );
}

const send = usee =>
    new Promise(resolve =>
        setTimeout(() => resolve(usee), 4000)
    );

    const sendAlluser = async () => {
    for (usee of user) {
        const userInfo = await send (usee);
        console.log(`Mengambil data.. name:${userInfo.name} age:${userInfo.age} Job:${userInfo.job}`);
    }
    console.log('Data Sudah terkirim');
};
console.log(arrayylength)

sendAlluser()