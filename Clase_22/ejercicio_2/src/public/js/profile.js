fetch("/current", {
  method: "GET",
  headers: {
  },
})
  .then((response) => {
    if (response.status === 401) {
      window.location.replace("/login");
    } else {
      return response.json();
    }
  })
  .then((json) => {
    const paragraph = document.getElementById("result");
    paragraph.innerHTML = `Hola, tus datos son ${json.payload.user.email} y ${json.payload.user.password}`;
  });
