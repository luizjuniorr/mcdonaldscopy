const main = document.querySelector("main")
const nome = localStorage.getItem("nome")

main.innerHTML = `
    <div class="icon-container">
            <img src="../../assets/check.png" alt="Ícone de confirmação" class="icon-check">
        </div>

        <h1 class="title">Pedido Confirmado! 🎉</h1>

        <p class="greeting">Olá <strong>${nome}</strong>, seu pedido foi recebido com sucesso!</p>
        <p class="status-message">Estamos preparando para entregar em sua casa.</p>

        <div class="eta-box">
            <p>Tempo estimado: <span class="time-highlight">25-35 minutos</span></p>
        </div>
`

setTimeout(() => {
    window.location.href=`../../index.html`
}, 5000);