<script>
    // Função 1: Exibir alerta ao clicar no botão "Cadastrar"
    function cadastrarAlerta() {
        alert("Você clicou em Cadastrar! Em breve, teremos novidades.");
    }

    // Função 2: Alterar o texto do título principal
    function alterarTitulo() {
        document.querySelector(".interface-banner-texto h1").textContent = "Explore novos destinos com Jadoo!";
    }

    // A função será chamada automaticamente após 5 segundos
    setTimeout(alterarTitulo, 5000);
</script>
