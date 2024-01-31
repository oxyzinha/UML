// Função para armazenar dados localmente
function storeDataLocally() {
    // Obtenha os valores dos campos
    var emailPhoneValue = document.getElementById('emailPhone').value;
    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var gradeValue = document.getElementById('grade').value;

    // Armazenar dados localmente
    localStorage.setItem('emailPhone', emailPhoneValue);
    localStorage.setItem('firstName', firstNameValue);
    localStorage.setItem('lastName', lastNameValue);
    localStorage.setItem('grade', gradeValue);

    // Exibir mensagem no console (pode ser removido em produção)
    console.log('Dados armazenados localmente:', localStorage);
}

// Função para enviar formulário
function submitForm() {
    // Chame a função para armazenar dados localmente
    storeDataLocally();

    // Adicione aqui qualquer lógica adicional para enviar o formulário ou navegar para a próxima página
}

