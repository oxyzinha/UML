function submitForm() {
    // Obtenha os valores dos campos
    var emailPhoneValue = document.getElementById('emailPhone').value;
    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var gradeValue = document.getElementById('grade').value;

    // Faça o que precisar com esses valores, como enviar para um servidor, armazenar no localStorage, etc.
    console.log("Email/Telefone:", emailPhoneValue);
    console.log("Nome:", firstNameValue);
    console.log("Sobrenome:", lastNameValue);
    console.log("Ano de Escolaridade:", gradeValue);

    // Redirecione para a próxima página
    window.location.href = "escolhaLivro.html";
}
