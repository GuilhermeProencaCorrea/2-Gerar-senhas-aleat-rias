let inputRange_size= document.querySelector("#size_senha_slider");
let size_senha = document.querySelector("#size");
size_senha.innerHTML = inputRange_size.value;

size_senha_slider.oninput = function() {
  size_senha.innerHTML = this.value;
}

let container_senhaGerada = document.querySelector("#senhaGerada");

function gerarCodigoAleatorio() {
  let tamanhoSenha = document.getElementById("size_senha_slider").value;
  let caracteres = '@#$%&*()}{][+=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';
  for (let i = 0; i < tamanhoSenha; i++) {
    let indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
  }
  document.getElementById("senhaGerada").innerHTML=codigo;
  container_senhaGerada.classList.remove("hide");
}