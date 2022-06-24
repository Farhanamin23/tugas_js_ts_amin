let data   = [{ nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 }
                
                ,{ nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 }
                

                ,{ nama: 'Harimau', makan: 'Daging', ukuran: 20 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 },
                { nama: 'Harimau', makan: 'Daging', ukuran: 21 }];
    
    let arraylength=data.length    
    for (i = 0; i < arraylength; i++){
    console.log(i + "nama :" + data[i].nama,"makanan :"+data[i].makan,"Ukuran :"+data[i].ukuran );
}
    const send = dat =>
        new Promise(resolve =>
            setTimeout(() => resolve(dat), 4000)
        );

        const sendAlldata = async () => {
        for (dat of data) {
            const userInfo = await send (dat);
            console.log(`Mengambil data... name:${userInfo.nama} makanan:${userInfo.makan} Ukuruan:${userInfo.ukuran}`);
        }
        console.log('Data Sudah terkirim');
};
console.log(arraylength)
sendAlldata()