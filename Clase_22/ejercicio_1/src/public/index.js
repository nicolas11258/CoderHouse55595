// let obj = {
//   email: "user@gmail.com",
//   password: "12345",
// };

// fetch("localhost:8080/login", {
//   method: "POST",
//   body: JSON.stringify(obj),
//   headers: {
//     "Content-type": "application/json",
//   },
// });


const form = document.getElementById('loginForm');

form.addEventListener('submit',e=>{
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value,key)=>obj[key]=value);
    console.log(obj)
    fetch('http://localhost:8080/login',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(result=>result.json()).then(json=>{
        localStorage.setItem('token',json.access_token)
    })
})