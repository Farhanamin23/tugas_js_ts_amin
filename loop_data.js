let data   = [{ nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 }
                
                ,{ nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 }
                

                ,{ nama: 'Harimau', makan: 'Daging', ukuran: 20 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 }];
    
    let arrayLength = data.length;

    for (let i = 0; i < arrayLength; i++) {
    console.log(data[i]);
}
    const send = dat =>
        new Promise(resolve =>
            setTimeout(() => resolve(dat), 4000)
        );

        const sendAlldata = async () => {
        for (dat of data) {
            const userInfo = await send (dat);
            console.log(`Mengambil data ${userInfo}`);
        }
        console.log('Data Sudah terkirim');
};
console.log(arrayLength)
sendAlldata()