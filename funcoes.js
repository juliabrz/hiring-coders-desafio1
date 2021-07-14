window.addEventListener("load", function() {
    let chave = document.getElementById("txtNome");
    let valor = document.getElementById("txtEmail");
    let salvar = document.getElementById("btnSalvar");

    salvar.addEventListener("click", function() {
      let input2=valor.value
      let input1=chave.value
      localStorage.setItem(input2,input1);;
    });

});
