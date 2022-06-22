const Personn = ['name:John age:20 job:Writer', 'name:Doe age:22 job:Writer', 'name:Don age:21 job:Coder'];
const send = person =>

    new Promise(resolve =>
        setTimeout(() => resolve(person), 1000)
    );
    const sendAllPersonn = async () => {
    for (person of Personn) {
        const personInfo = await send(person);
        console.log(`Mengirim Data ${personInfo}`);
    }
    console.log('Data Sudah Terkirim');
    };
sendAllPersonn();