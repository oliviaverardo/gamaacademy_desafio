document.getElementById("botaoenviar").addEventListener("click", validaFormulario )

function validaFormulario (){
  if(document.getElementById("nome").value != "" &&      document.getElementById("datanasc").value != "" && document.getElementById("endereco").value) != "" &&
  document.getElementById("bairro").value) != "" &&
  document.getElementById("cidade").value) != "" &&
  document.getElementById("identidade").value) != "" &&
  document.getElementById("cpf").value){
  alert("Você foi adicionado em nosso banco de talentos. Esperamos te ver em breve. Obrigado!")
  }else{
    alert("Por favor, preencha corretamente os campos de obrigatórios.")
  }
  }