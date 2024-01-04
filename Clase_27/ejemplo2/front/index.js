function peticion() {
  fetch("http:://localhost:8080/test")
    .then((result) => result.json())
    .then((json) => console.log(json));
}
