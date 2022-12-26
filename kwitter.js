
function addUser() {
//definindo a variavel userName para guardar o login inserido na caixa de texto
  userName = document.getElementById("userName").value;
//armazenamento local do login
  localStorage.setItem("userName", userName);
  //redirecionando para outra pagina
    window.location = "kwitterRoom.html";
}

