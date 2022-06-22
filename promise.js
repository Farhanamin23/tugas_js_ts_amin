let hasil = true;

const janji = new Promise((resolve, reject) => {
	if(promise){
		resolve('promise sudah di simpan')
	}else{
        reject('promise belum di simpan')
	}
})

janji.then(res => console.log(`Ok ${res} !`)).catch(res => console.log(`ok ! ${res}`))