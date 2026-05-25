const btodos = document.querySelector('.btodos')
const blanches = document.querySelector('.blanches')
const bcombos = document.querySelector('.bcombos')
const bacompanhamentos = document.querySelector('.bacompanhamentos')
const bbebidas = document.querySelector('.bbebidas')
const bmilkshakes = document.querySelector('.bmilkshakes')
const bofertas = document.querySelector('.bofertas')

const acompanhamentos = document.querySelectorAll('.acompanhamento')
const bebidas = document.querySelectorAll('.bebida')
const combo = document.querySelectorAll('.combo')
const lanche = document.querySelectorAll('.lanche')
const milkshake = document.querySelectorAll('.milkshake')
const oferta = document.querySelectorAll('.oferta')


btodos.addEventListener('click', () => {
    btodos.classList.add("pressionado")

    blanches.classList.remove("pressionado")
    bcombos.classList.remove("pressionado")
    bacompanhamentos.classList.remove("pressionado")
    bbebidas.classList.remove("pressionado")
    bmilkshakes.classList.remove("pressionado")
    bofertas.classList.remove("pressionado")

    acompanhamentos.forEach(el => el.classList.remove("ff"))
    bebidas.forEach(el => el.classList.remove("ff"))
    combo.forEach(el => el.classList.remove("ff"))
    lanche.forEach(el => el.classList.remove("ff"))
    milkshake.forEach(el => el.classList.remove("ff"))
    oferta.forEach(el => el.classList.remove("ff"))
})

blanches.addEventListener('click', () => {
    blanches.classList.add("pressionado")

    btodos.classList.remove("pressionado")
    bcombos.classList.remove("pressionado")
    bacompanhamentos.classList.remove("pressionado")
    bbebidas.classList.remove("pressionado")
    bmilkshakes.classList.remove("pressionado")
    bofertas.classList.remove("pressionado")

    acompanhamentos.forEach(el => el.classList.add("ff"))
    bebidas.forEach(el => el.classList.add("ff"))
    combo.forEach(el => el.classList.add("ff"))
    milkshake.forEach(el => el.classList.add("ff"))
    oferta.forEach(el => el.classList.add("ff"))

    lanche.forEach(el => el.classList.remove("ff"))
})


bcombos.addEventListener('click', () => {
    bcombos.classList.add("pressionado")

    btodos.classList.remove("pressionado")
    blanches.classList.remove("pressionado")
    bacompanhamentos.classList.remove("pressionado")
    bbebidas.classList.remove("pressionado")
    bmilkshakes.classList.remove("pressionado")
    bofertas.classList.remove("pressionado")

    acompanhamentos.forEach(el => el.classList.add("ff"))
    bebidas.forEach(el => el.classList.add("ff"))
    lanche.forEach(el => el.classList.add("ff"))
    milkshake.forEach(el => el.classList.add("ff"))
    oferta.forEach(el => el.classList.add("ff"))

    combo.forEach(el => el.classList.remove("ff"))
})

bacompanhamentos.addEventListener('click', () => {
    bacompanhamentos.classList.add("pressionado")

    btodos.classList.remove("pressionado")
    blanches.classList.remove("pressionado")
    bcombos.classList.remove("pressionado")
    bbebidas.classList.remove("pressionado")
    bmilkshakes.classList.remove("pressionado")
    bofertas.classList.remove("pressionado")

    bebidas.forEach(el => el.classList.add("ff"))
    combo.forEach(el => el.classList.add("ff"))
    lanche.forEach(el => el.classList.add("ff"))
    milkshake.forEach(el => el.classList.add("ff"))
    oferta.forEach(el => el.classList.add("ff"))

    acompanhamentos.forEach(el => el.classList.remove("ff"))
})

bbebidas.addEventListener('click', () => {
    bbebidas.classList.add("pressionado")

    btodos.classList.remove("pressionado")
    blanches.classList.remove("pressionado")
    bcombos.classList.remove("pressionado")
    bacompanhamentos.classList.remove("pressionado")
    bmilkshakes.classList.remove("pressionado")
    bofertas.classList.remove("pressionado")

    acompanhamentos.forEach(el => el.classList.add("ff"))
    combo.forEach(el => el.classList.add("ff"))
    lanche.forEach(el => el.classList.add("ff"))
    milkshake.forEach(el => el.classList.add("ff"))
    oferta.forEach(el => el.classList.add("ff"))

    bebidas.forEach(el => el.classList.remove("ff"))
})

bmilkshakes.addEventListener('click', () => {
    bmilkshakes.classList.add("pressionado")

    btodos.classList.remove("pressionado")
    blanches.classList.remove("pressionado")
    bcombos.classList.remove("pressionado")
    bacompanhamentos.classList.remove("pressionado")
    bbebidas.classList.remove("pressionado")
    bofertas.classList.remove("pressionado")

    acompanhamentos.forEach(el => el.classList.add("ff"))
    bebidas.forEach(el => el.classList.add("ff"))
    combo.forEach(el => el.classList.add("ff"))
    lanche.forEach(el => el.classList.add("ff"))
    oferta.forEach(el => el.classList.add("ff"))

    milkshake.forEach(el => el.classList.remove("ff"))
})


bofertas.addEventListener('click', () => {
    bofertas.classList.add("pressionado")

    btodos.classList.remove("pressionado")
    blanches.classList.remove("pressionado")
    bcombos.classList.remove("pressionado")
    bacompanhamentos.classList.remove("pressionado")
    bbebidas.classList.remove("pressionado")
    bmilkshakes.classList.remove("pressionado")

    acompanhamentos.forEach(el => el.classList.add("ff"))
    bebidas.forEach(el => el.classList.add("ff"))
    combo.forEach(el => el.classList.add("ff"))
    lanche.forEach(el => el.classList.add("ff"))
    milkshake.forEach(el => el.classList.add("ff"))

    oferta.forEach(el => el.classList.remove("ff"))
})

const botaoCarrinho = document.querySelector(".carrinho")

botaoCarrinho.addEventListener("click", () => {
    const right = document.querySelector(".right")
    const body = document.querySelector("body")
    const header = document.querySelector("header")

    body.classList.add("aberto")
    right.classList.add("aberto")
    header.classList.add("aberto")
})