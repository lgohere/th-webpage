let itens = 0;
let carrinhoQtd = [];
let carrinho = [];
let totalCarrinho = [];

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

const adicionarNoCarrinho = (produtoId) => {
  // to-do pesquisar sobre filter.
  // const produto = cardapio.filter((item) => item.id == produtoId)[0];
  const produto = cardapio.find((item) => item.id == produtoId); // achou o produto "ex.: coxinha de frango"
  let produtoNoCarrinho = carrinho.find((item) => item.id == produtoId); // agora procura no carrinho. Tem ele lá? se não add ele lá.
  if (!produtoNoCarrinho) {
    carrinho.push(produto);
    produto.qtd = 0;
    produtoNoCarrinho = produto;
  }
  produtoNoCarrinho.qtd += 1;
  produtoNoCarrinho.subtotal = produto.price * produto.qtd;

  totalCarrinho.push(produtoNoCarrinho.price);
  total = 0;
  function somarTotal() {
    for (i of totalCarrinho) {
      total += i;
    }
  }

  mostraCarrinho();
  somarTotal();
  mostrarTotal();

  console.log(
    `Quantidade de items no carrinho: ${carrinho.length}. Total: ${total}`
  );
};

/* 
CRIAR FUNCIONALIDADES DE INCREMENTO E DECREMENTO PARA CADA ITEM.
*/
function mostrarTotal() {
  const $total = document.getElementById("totalCarrinho");
  let $totalView = document.createElement("div");
  $totalView.innerText = `Total: R$ ${total},00`;
  $total.appendChild($totalView);
  $total.innerHTML = $totalView.innerHTML;
}

function mostraCarrinho() {
  let $carrinho = document.getElementById("itensAdicionados");
  let $itens = document.createElement("div");

  for (let item of carrinho) {
    const novoItem = `
    <div class="row shadow-item mb-2" style="border: solid rgba(0, 0, 0, 0.075) 1px">
      <div class="col-4 pt-3 d-flex flex-column align-items-center" id="carrinhoItemImg" >
        <img src="${item.image}" class="img-fluid border border-success"/>
        <div id="carrinhoItemName">
          <p class="text-center mt-3" style="line-height: 20px">${item.name}</p>
        </div>
      </div>
      <div class="col-4 text-center pt-3 card-text">
        <strong>Quantidade</strong>
        <div id="btnContadores"
        class="col-12 d-inline-flex align-items-center justify-content-center mt-2"
      >
        <button id="btnMenos_${item.id}" class="btnMinus">-</button>
        <h3 id="quantidade_${item.id}" class="mx-3">${item.qtd}</h3>
        <button id="btnMais_${item.id}" class="btnPlus">+</button>
      </div>
    </div>
      <div class="col-4 text-center pt-3" id="carrinho_item_subtotal">
        <strong>Subtotal</strong>
        <p class="pt-2" id="carrinhoItemSubtotal">R$ ${item.subtotal},00</p>
        <i id="carrinhoRemoverItem"
        class="pt-4 bi bi-trash3-fill"
        style="font-size: 20px"></i>
      </div>
    </div>
    `;

    let $novoItemCarrinho = document.createElement("div");
    $novoItemCarrinho.innerHTML = novoItem;
    $itens.appendChild($novoItemCarrinho);
  }
  $carrinho.innerHTML = $itens.innerHTML;
}

for (item of cardapio) {
  const itemHtml = `
    <div class="row border mb-2 box-items shadow">
      <div class="col-5 pt-3 d-flex flex-column align-items-center justify-content-center">
        <img
        src="${item.image}"
        class="img-fluid"/>
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
        style="font-size: 18pt">
        <strong>R$${item.price},00</strong>
        </p>
        <div id="adicionarAoCarrinho" class="mb-3">
          <button
            id="btnCarrinho_${item.id}"
            class="btn-block m-auto p-2 botao-carrinho"
            produtoId="${item.id}">
          Adicionar ao Carrinho <i class="bi bi-cart-plus"></i> </button>
        </div>
      </div>  
    </div>
    `;

  let novoItem = document.createElement("div");
  novoItem.innerHTML = itemHtml;
  $cardapio.appendChild(novoItem);

  const $btnCarrinho = document.getElementById(`btnCarrinho_${item.id}`);
  $btnCarrinho.addEventListener("click", (el) => {
    const produtoId = el.srcElement.getAttribute("produtoid");
    adicionarNoCarrinho(produtoId);
    abrirModal(produtoId);
    adicionarCarrinhoIcon();
    console.log("Adicionou no carrinho o " + produtoId);
  });
}

/*-------------------NAV-BAR CARRINHO --------------------------*/

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

/* 

function adicionar() {
  let elValor = document.querySelector(`quantidade_${item.id}`);
  let valor = produto.qtd;
  valor += 1;
}

let btn = document.querySelector(".btnPlus");
btn.addEventListener("click", adicionar);


*/

/*
------------ Tasks - MTH Bolos e Salgados ----------------

1 - acrescentar valor "pronto" ou "congelado" ao item adicionado ao carrinho.
2-  distinguir quantidade de prontos e de congelados (caso haja 2 tipos para um único item)

1 - ativar botoes de + e - para quantidade do item no carrinho
2 - multiplicar quantidade do item por preço do item e gerar subtotal.
3 - somar subtotais dos items no carrinho e gerar valor total.

1 - ativar botão da lixeira (remover) do item no carrinho.
2 - subtrair o valor removido do valor total do carrinho.

1 - criar botão 'finalizar pedido' abaixo do valor total.
2 - ao clicar em 'finalizar pedido' -> 
inicia-se a seção adicionar dados com:
#INPUTS:
- 'nome', 
- 'email',
- 'endereço para entrega',
- data e horario DESEJADO (a confirmar por whatsapp). 
- 'celular para contato'.

#BUTTONS:
- [Voltar] ->
- Volta para a seção de items no carrinho.

[Proximo]
* requisito para proximo = preencher todos os campos.


#FOOTER-REMINDER:
- forma de pagamento (pix).
- tempo minimo de entrega para quantidades 'x' de pedido.


1 - após preencher todos os dados -> proximo: 
aparece: 
- o pedido completo em formato de ul li c/ todos os valores e items.
- os dados do consumidor e da entrega.

#BUTTONS:
[Confirmar Pedido] -> 
- MENSAGEM: Obrigado por escolher a MTH! 
            Você está sendo encaminhado para o nosso whatsapp.
- O pedido é enviado ao cliente que confirma o recebimento.
- Avalia a disponibilidade da data e horarios DESEJADOS.
- Aguarda envio do comprovante de pegamento PIX e prossegue com encomenda.

[Editar] -> 
- Volta para a seção anterior de preenchimento dos dados.

[Cancelar] ->
- Pergunta se tem certeza que gostaria de cancelar o pedido?
  Sub-BUTTONS: [SIM] [NÃO]

*/
