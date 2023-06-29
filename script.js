function gerarCodigoAleatorio() {
    //pega do input o tamanho da senha
    let tamanhoSenha = document.getElementById("tamanho").value;
    //base de caracteres, simbulos e números usado na senha
    let caracteres = '@#$%&*()}{][+=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    //constroi a senha com base no tamanho
    for (let i = 0; i < tamanhoSenha; i++) {
      let indice = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indice);
    }
    document.getElementById("senhaGerada").innerHTML=codigo
}