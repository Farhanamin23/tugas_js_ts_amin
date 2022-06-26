//        Metod POST API
//fetch("https://reqres.in/api/users/1", {
//  method:'post',
//  headers:{
//      'Content-Type':'aplication/json'
//  },
//  body: JSON.stringify({
//    name:'sholeh',
//    job:'guru'
//  })
//})
//  .then((hasil) => hasil.json())
//  .then((res)=>console.log(res))

//fetch("https://reqres.in/api/users/1")
//  .then((response) => {
//    if (response.ok) {
//      console.log('Ada Data')
//    } else {
//      console.log('Tidak Ada');
//    }
//})

         //Method Catch
fetch("https://reqres.in/api/users/1")
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      return Promise.reject({
        status:response.status
      })
    }
  })
  .then((json) => console.log(json))
  .catch((error) => {
    if (error.status ==404) {
      console.log('Ada Data Yang Tidak Sesuai')
    }
  })