const seleciona = (elemento) => document.querySelector(elemento);

// modalCarrinho nav-bar

const abrirModal = () => {
  seleciona("#modalCarrinho").style.opacity = 0;
  seleciona("#modalCarrinho").style.display = "block";
  setTimeout(() => {
    seleciona("#modalCarrinho").style.opacity = 1;
  }, 150);
};

const fecharModal = () => {
  seleciona("#modalCarrinho").style.opacity = 0;
  setTimeout(() => {
    seleciona("#modalCarrinho").style.display = "none";
  }, 500);
};

let modal = seleciona("#modalCarrinho");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

seleciona("#modalCarrinhoBtn").addEventListener("click", abrirModal);
seleciona(".closeModalCarrinho").addEventListener("click", fecharModal);

const cardapio = [
  {
    id: 1,
    name: "Coxinha de Frango",
    image: "./images/novas-imgs/coxinha-sm.jpg",
    price: 58.0,
    desc: "Coxinha recheada com frango",
  },
  {
    id: 2,
    name: "Bolinha de Queijo Tradicional",
    image: "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
    price: 58.0,
    desc: "Bolinha frita recheada com queijo mussarela",
  },
  {
    id: 3,
    name: "Bolinha de Queijo c/ Alho Frito",
    image: "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
    price: 58.0,
    desc: "Bolinha recheada com queijo mussarela e alho frito",
  },
  {
    id: 4,
    name: "Maravilha",
    image: "./images/novas-imgs/maravilha-sm.jpg",
    price: 58.0,
    desc: "Maravilha recheada com presunto e queijo mussarela",
  },
  {
    id: 5,
    name: "Risoles de Carne",
    image: "./images/novas-imgs/risoles-carne-sm.jpg",
    price: 58.0,
    desc: "Risoles recheada com carne bovina",
  },
  {
    id: 6,
    name: "Risoles de Carne c/ Queijo",
    image: "./images/novas-imgs/risoles-carne-sm.jpg",
    price: 58.0,
    desc: "Risoles recheado com carne bovina e queijo mussarela",
  },
  {
    id: 7,
    name: "Risoles de Calabresa",
    image: "./images/novas-imgs/risoles-calabresa-sm.png",
    price: 58.0,
    desc: "Risoles recheado com calabresa",
  },
  {
    id: 8,
    name: "Risoles de Calabresa c/ Queijo",
    image: "./images/novas-imgs/risoles-calabresa-sm.png",
    price: 58.0,
    desc: "Risoles recheado com calabresa e queijo mussarela",
  },
  {
    id: 9,
    name: "Croquete de Carne",
    image: "./images/novas-imgs/croquete-carne-sm.jpg",
    price: 58.0,
    desc: "Croquete de carne bovina",
  },
  {
    id: 10,
    name: "Croquete de Frango",
    image: "./images/novas-imgs/croquete-frango-sm.png",
    price: 58.0,
    desc: "Croquete de frango",
  },
];

const $cardapio = document.getElementById("salgados");

const adicionarNoCarrinho = () => {
  const novoItemCarrinho = `
      <div class="row shadow-item" style="border: solid rgba(0, 0, 0, 0.075) 1px">
        <div class="col-4 pt-3 d-flex flex-column align-items-center" id="carrinhoItemImg" >
          <img src="" class="img-fluid border border-success"/>
          <div id="carrinhoItemName"><p class="text-center mt-3" style="line-height: 20px"></p>
          </div>
        </div>
        <div class="col-4 text-center pt-3 card-text">
          <strong>Quantidade</strong>
          <div id="carrinhoItemQtd"
          class="col-12 d-inline-flex align-items-center justify-content-center mt-2"
        >
          <button id="btnMenosModalCarrinho">-</button>
          <h3 id="carrinhoItemQuantidade" class="mx-3">-</h3>
          <button id="btnMaisModalCarrinho">+</button>
        </div>
      </div>
        <div class="col-4 text-center pt-3" id="carrinho_item_subtotal">
          <strong>Subtotal</strong>
          <p class="pt-2" id="carrinhoItemSubtotal"></p>
          <i id="carrinhoRemoverItem"
          class="pt-4 bi bi-trash3-fill"
          style="font-size: 20px"></i>
        </div>
      </div>
      <div class="row">
        <div id="carrinhoTotal" class="col-12 pt-3 d-flex justify-content-end font-weight-bold"
        style="font-size: 20px">Total: R$58.00</div>
      </div>
      `;

  let $itensAdicionados = document.getElementById("itensAdicionados");
  let $novoItemCarrinho = document.createElement("div");
  $novoItemCarrinho.innerHTML = novoItemCarrinho;

  $itensAdicionados.appendChild($novoItemCarrinho);
};

for (item of cardapio) {
  const itemHtml = `
  <div class="row border" style="color: black">
    <div
    class="col-5 pt-3 d-flex flex-column align-items-center justify-content-center"
  >
    <img
      src="${item.image}"
      class="img-fluid"
    />
    <span class="text-center">100 Unidades (cento)</span>
    <div class="select-dropdown mt-3 mb-3">
      <select>
        <option data-key="0" value="coxinha-frita">Pronto</option>
        <option data-key="1" value="coxinha-congelada">
          Congelado
        </option>
      </select>
    </div>
    </div>
    <div class="col-7 pt-3 d-flex justify-content-around flex-column">
    <h3 id="salgado-item--name" style="text-align: start">
      <strong>${item.name}</strong>
    </h3>
    <p id="salgado-item--desc" style="text-align: start">
      ${item.desc}
    </p>
    <p
      id="salgado-item--price"
      class="d-flex flex-row-reverse"
      style="font-size: 18pt"
    >
      <strong>R$${item.price},00</strong>
    </p>
    <div id="adicionarAoCarrinho" class="mb-3">
      <button
        id="btnCarrinho_${item.id}"
        class="btn-block m-auto p-2 botao-carrinho"
      >
        Adicionar ao Carrinho <i class="bi bi-cart-plus"></i>
      </button>
      </div>
    </div>
    `;

  let novoItem = document.createElement("div");
  novoItem.innerHTML = itemHtml;
  $cardapio.appendChild(novoItem);

  const $btnCarrinho = document.getElementById(`btnCarrinho_${item.id}`);
  $btnCarrinho.addEventListener("click", () => {
    abrirModal();
    adicionarCarrinhoIcon();
    adicionarNoCarrinho();
    console.log("Adicionou no carrinho o " + item.name);
  });
}

// define o elemento no html que será meio para acionar a função adicionar.
//const $btnMais = document.getElementById(`btnMais_${item.id}`);
// define o elemento no html que será meio para acionar a função subtrair.
//const $btnMenos = document.getElementById(`btnMenos_${item.id}`);
//$btnMais.addEventListener("click", adicionar); //ao clicar aciona a função adicionar
//$btnMenos.addEventListener("click", subtrair); // ao clicar aciona a função subtrair

let itens = 0;
let carrinhoQtd = [];
carrinho = [];

// função que atualiza a quantidade de itens no icon do carrinho na nav-bar.
function atualizaItens(total) {
  const $qtd = document.getElementById("carrinhoBtnQtd");
  $qtd.textContent = total;
}

// função que adiciona um item (um cento) ao carrinhoIcon.
function adicionarCarrinhoIcon(event) {
  let item = cardapio.filter((i) => i.id);
  carrinhoQtd.push(item);
  itens += 1;
  atualizaItens(itens);
}
// incrementa o valor da div com id="quantidade_${item.id}".
function adicionar(event) {
  let itemId = parseInt(event.srcElement.id.replace("btnMais_", ""));
  const $qtd = document.getElementById(`quantidade_${itemId}`);
  let qtd = parseInt($qtd.textContent);
  qtd += 1;
  $qtd.textContent = qtd;
}
function subtrair(event) {
  let itemId = parseInt(event.srcElement.id.replace("btnMenos_", ""));
  const $qtd = document.getElementById(`quantidade_${itemId}`);
  let qtd = parseInt($qtd.textContent);
  if (qtd > 0) {
    qtd -= 1;
    $qtd.textContent = qtd;
  }
}

//Segunda parte

/*
Tasks:
 
1. Criar um if para que se o cento de determinado salgadinho ja tenha
sido adicionado ele NÃO SEJA COMPUTADO ao icon do carrinho na nav-bar, 
mas sim ao modal do carrinho (task 2).
 
2. Adicionar o item selecionado ao modal do carrinho.
- com isso habilitar a calculadora do valor SUBTOTAL de cada item
e do valor TOTAL do pedido.

// ao clicar no botao adicionar ao carrinho.
 
3. Habilitar o botao de remover item do modal do carrinho.
- ao acionar o botão remove todo o item do modal do carrinho.
 
4. Habilitar o botao ˜finalizar pedido˜.
 
Nesse momento inicia uma nova section no modal do carrinho.
Por favor, para procedermos com seu pedido, nos informe:
- nome
- whatsapp (cel p/ contato)
- endereço de entrega
- data para entrega
- período esperado (manhã/ tarde/ noite)
- observações: aqui pode ser incluida as especificações
de quantidade de salgadinhos fritos / congelados.

+ abaixo constará a explicação do redirecionamento para o aplicativo whatsapp.
+ politica de confirmacao do pedido via envio do comprovante do pix.


* Data de entrega - o sistema deve calcular com base na data atual.
- programar a data de entrega ser projetada com base na quantidade de itens.



5. Habilitar o botao "enviar pedido"
 
6. Formatar o pedido ao modelo de mensagem do whatsapp.
 
*/

// MSG WHATSAPP - KITS PROMOCIONAIS

function enviarMensagem(kitmsg) {
  let celular = "5513981942956";

  let kit1Msg =
    "Olá T&H! Gostaria de encomendar o KIT 1 da promoção disponível no website. Como podemos prosseguir?";

  kit1Msg = window.encodeURIComponent(kit1Msg);

  window.open(
    "https://api.whatsapp.com/send?phone=" + celular + "&text=" + kit1Msg,
    "_blank"
  );
}

const $kit1Msg = seleciona("#kit01").addEventListener("click", enviarMensagem);
