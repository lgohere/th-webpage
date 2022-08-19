
const cardapio = [
    {
        "id": 1,
        "name": "Coxinha de Frango",
        "image": "./images/novas-imgs/coxinha-sm.jpg",
        "price": 58.00,
        "desc": "Coxinha recheada com frango",
    },
    {
        "id": 2,
        "name": "Bolinha de Queijo Tradicional",
        "image": "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
        "price": 58.00,
        "desc": "Bolinha frita recheada com queijo mussarela",
    },
    {
        "id": 3,
        "name": "Bolinha de Queijo c/ Alho Frito",
        "image": "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
        "price": 58.00,
        "desc": "Bolinha recheada com queijo mussarela e alho frito",
    },
    {
        "id": 4,
        "name": "Maravilha",
        "image": "./images/novas-imgs/maravilha-sm.jpg",
        "price": 58.00,
        "desc": "Maravilha recheada com presunto e queijo mussarela",
    },
    {
        "id": 5,
        "name": "Risoles de Carne",
        "image": "./images/novas-imgs/risoles-carne-sm.jpg",
        "price": 58.00,
        "desc": "Risoles recheada com carne bovina",
    },
    {
        "id": 6,
        "name": "Risoles de Carne c/ Queijo",
        "image": "./images/novas-imgs/risoles-carne-sm.jpg",
        "price": 58.00,
        "desc": "Risoles recheado com carne bovina e queijo mussarela",
    },
    {
        "id": 7,
        "name": "Risoles de Calabresa",
        "image": "./images/novas-imgs/risoles-calabresa-sm.png",
        "price": 58.00,
        "desc": "Risoles recheado com calabresa",
    },
    {
        "id": 8,
        "name": "Risoles de Calabresa c/ Queijo",
        "image": "./images/novas-imgs/risoles-calabresa-sm.png",
        "price": 58.00,
        "desc": "Risoles recheado com calabresa e queijo mussarela",
    },
    {
        "id": 9,
        "name": "Croquete de Carne",
        "image": "./images/novas-imgs/croquete-carne-sm.jpg",
        "price": 58.00,
        "desc": "Croquete de carne bovina",
    },
    {
        "id": 10,
        "name": "Croquete de Frango",
        "image": "./images/novas-imgs/croquete-frango-sm.png",
        "price": 58.00,
        "desc": "Croquete de frango",
    }
] 

let itens = 0
let carrinho = []

const $cardapio = document.getElementById("salgados")


function atualizaItens(total) {
    const $qtd = document.getElementById("carrinho_itens")
    $qtd.textContent = total
}





// SEGUNDA PARTE
for (item of cardapio) {
    const itemHtml = `
    <td id="salgado-item--img">
      <img
        src="${item.image}"
        width="100"
        style="display: flex"
      />
      <span>100 Unidades (cento) </span>
      <div
        class="d-flex flex-row justify-content-center mt-3"
        style="
          background-color: rgba(198, 190, 207, 0.158);
          border-radius: 4px;
        "
      >
        <button id="btnMenos_${item.id}">-</button>
        <div class="px-3" id="quantidade_${item.id}">0</div>
        <button id="btnMais_${item.id}">+</button>
    
      </div>
      <div class="select-dropdown mt-3">
        <select id="salgado-item--options " class="frito-congelado">
          <option
            id="salgado-item--option"
            data-key="0"
            value="coxinha-frita"
          >
            Pronto
          </option>
          <option
            id="salgado-item--option"
            data-key="1"
            value="coxinha-congelada"
          >
            Congelado
          </option>
        </select>
      </div>
    </td>
    <td>
      <h3 id="salgado-item--name" style="text-align: start">
        <strong>${item.name}</strong>
      </h3>
      <p id="salgado-item--desc" style="text-align: start">${item.desc}</p>
      <p
        id="salgado-item--price"
        class="mx-2"
        style="float: right; font-size: 18pt">
        <strong>R$58,00</strong>
      </p>
      <div id="salgado-item--add" class="col-12">
        <button id="btnCarrinho_${item.id}" class="btn-block m-auto p-2 botao-carrinho">
          Adicionar ao Carrinho
        </button>
      </div>
    </td>
    `
    let newTr = document.createElement('tr')
    newTr.innerHTML = itemHtml
    $cardapio.appendChild(newTr)

    const $btnMais = document.getElementById(`btnMais_${item.id}`)
    const $btnMenos = document.getElementById(`btnMenos_${item.id}`)
    const $btnCarrinho = document.getElementById(`btnCarrinho_${item.id}`)

    $btnMais.addEventListener('click', adicionar)
    $btnMenos.addEventListener('click', remover)
    $btnCarrinho.addEventListener('click', adicionarCarrinho )


}

function adicionar(event) {
    let itemId = parseInt(event.srcElement.id.replace('btnMais_', ''))
    const $qtd = document.getElementById(`quantidade_${itemId}`)
    let qtd = parseInt($qtd.textContent)
    qtd += 1
    $qtd.textContent = qtd
}

function remover(event) {
    let itemId = parseInt(event.srcElement.id.replace('btnMenos_', ''))
    const $qtd = document.getElementById(`quantidade_${itemId}`)
    let qtd = parseInt($qtd.textContent)
    if (qtd > 0) {
        qtd -= 1
        $qtd.textContent = qtd
    }
}


function adicionarCarrinho(event) {
    let itemId = parseInt(event.srcElement.id.replace('btnCarrinho_', ''))
    const $qtd = document.getElementById(`quantidade_${itemId}`)
    let qtd = parseInt($qtd.textContent)
    if (qtd == 0) {
        return
    }

    let item = cardapio.filter((i) => (i.id == itemId))
    item.total = qtd * item.price

    carrinho.push(item)
    itens += 1
    atualizaItens(itens)
    console.log(carrinho)
}


// MODAL CARRINHO

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalCarrinhoBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_carrinho")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}