document.addEventListener('DOMContentLoaded', function () {
    // Supondo que você tenha um formulário com id 'loginForm'
    const loginForm = document.getElementById('loginForm');

    // Adicione um ouvinte de evento para o formulário
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtenha os valores dos campos
        const emailPhoneValue = document.getElementById('emailPhone').value;
        // Remova a linha abaixo, pois não há um campo de senha no seu formulário
        // const senhaValue = document.getElementById('senha').value;

        // Carrega os dados do JSON
        fetch('dados.json')
            .then(response => response.json())
            .then(data => {
                // Acesse a lista de usuários do JSON
                const usuarios = data.usuarios;

                // Verifique as credenciais
                const usuarioAutenticado = usuarios.find(user => user.email === emailPhoneValue);

                if (usuarioAutenticado) {
                    console.log("Login bem-sucedido!");
                    // Redirecione para a próxima página
                    window.location.href = "escolhaLivro.html";
                } else {
                    console.log("Credenciais inválidas.");
                }
            })
            .catch(error => console.error('Erro ao carregar dados:', error));
    });
});
