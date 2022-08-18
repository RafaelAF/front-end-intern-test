// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário


  //Expressão regular de email
 
  const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  // Função que valida email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
          reg
        );
  };
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function(e) {
    // A propriedade "value" contém o valor atual de um input ou textarea
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;


    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    const nameLength = nameValue.length;
    const emailLength = emailValue.length;
    const messageLength = messageValue.length;

    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.


    if((nameLength <= 2 || nameValue == null || nameValue == undefined)){
      window.alert(`Por favor preencha seu nome`);
    }else if((emailLength <= 2 || emailValue == null || emailValue == undefined)){
      window.alert(`Por favor digite um  email`);

    }else if(!(validateEmail(emailValue))){
      window.alert('Digite um email valido')
    }else if(messageLength < 20){
      window.alert(`Insira pelo menos 20 caracteres na sua mensagem`);
    }

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();
