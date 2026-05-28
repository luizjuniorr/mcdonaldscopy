const nome = localStorage.getItem("nome")
const nomeusuario = document.querySelector(".titulofinalizarpedido")

nomeusuario.innerHTML += `
    <h2>Finalizar Pedido</h2>
    <p>Cliente: <strong>${nome}</strong></p>
`

const opcoesDeEntrega = document.querySelectorAll(".opcaodeentrega")

opcoesDeEntrega.forEach((opcao) => {
    opcao.addEventListener("click", () => {
        opcoesDeEntrega.forEach((item) => {
            item.classList.remove("pressionado")
        })

        opcao.classList.add("pressionado")

    })

})

const tipodepagamento = document.querySelectorAll(".tipodepagamento")

tipodepagamento.forEach((opcao) => {

    opcao.addEventListener("click", () => {

        tipodepagamento.forEach((item) => {
            item.classList.remove("pressionado")
        })

        opcao.classList.add("pressionado")

    })

})