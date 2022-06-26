let Nama = [{ nama: 'farhan', umur: 24, bagian: 'Front End'         },
            { nama: 'Dimas',  umur: 24, bagian: 'Back End'          },
            { nama: 'Ilham',  umur: 24, bagian: 'UI / UX'           },
            { nama: 'Samuel', umur: 24, bagian: 'Data Analytic'     },
            { nama: 'Ilham',  umur: 24, bagian: 'Marketing '        },
            { nama: 'Samuel', umur: 24, bagian: 'Marketing Lapangan'},
            { nama: 'Ilham',  umur: 24, bagian: 'Front Office'      },
            { nama: 'Samuel', umur: 24, bagian: 'Data System'       },
            { nama: 'Ilham',  umur: 24, bagian: 'Pentester'         },
            { nama: 'Samuel', umur: 24, bagian: 'Arduino Enginner'  }];
    
let data = Nama.length;
for (i = 0; i < data; i++) {
  console.log(i + " Nama: "+ Nama[i].nama+" Umur: "+Nama[i].umur+" Kerjaan: "+ Nama[i].bagian);
}
const send = kirim => 
  new Promise(resolve =>
    setTimeout(() => resolve(kirim), 2000)
  );

  const kirimAllNama = async () => {
    for (kirim of Nama) {
      const DataInfo = await send(kirim);
      console.log(`Mengirim Data...  nama :${DataInfo.nama} Umur : ${DataInfo.umur} Kerjaan : ${DataInfo.bagian}`);
    }
    console.log(`Data Berhasil Dikirim Semua Masseh`);
  };
console.log(data);
kirimAllNama()

