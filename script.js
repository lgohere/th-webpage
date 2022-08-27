// modalCarrinho nav-bar
let modal = document.getElementById("modalCarrinho");
let modalBtn = document.getElementById("modalCarrinhoBtn");
let modalSpan = document.getElementsByClassName("closeModalCarrinho")[0];

modalBtn.onclick = function () {
  modal.style.display = "block";
};

modalSpan.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// objeto com todos os itens disponiveis no cardápio geral
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

// id da table - onde é projetada a parte de salgados, conforme o cardápio geral.
const $cardapio = document.getElementById("salgados");

// loop que inclui a td (item) no html tendo como orientação o objeto cardápio (cardapio geral).
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
    <div id="salgado-item--add" class="mb-3">
      <button
        id="btnCarrinho_${item.id}"
        class="btn-block m-auto p-2 botao-carrinho"
      >
        Adicionar ao Carrinho <i class="bi bi-cart-plus"></i>
      </button>
      </div>
    </div>
    `;
  let novoItem = document.createElement("div"); // cria o elemento newTr como parent do td programado acima.
  novoItem.innerHTML = itemHtml; // inclue o td "itemHtml" ao parent tr "newTr".
  $cardapio.appendChild(novoItem); // adiciona o "newTr" como child da table com id: $cardapio.

  // define o elemento no html que será meio para acionar a função adicionarCarrinhoIcon.
  const $btnCarrinho = document.getElementById(`btnCarrinho_${item.id}`);
  $btnCarrinho.addEventListener("click", adicionarCarrinhoIcon); //ao clicar aciona a função adicionarCarrinhoIcon.

  // define o elemento no html que será meio para acionar a função adicionar.
  //const $btnMais = document.getElementById(`btnMais_${item.id}`);
  // define o elemento no html que será meio para acionar a função subtrair.
  //const $btnMenos = document.getElementById(`btnMenos_${item.id}`);
  //$btnMais.addEventListener("click", adicionar); //ao clicar aciona a função adicionar
  //$btnMenos.addEventListener("click", subtrair); // ao clicar aciona a função subtrair
}

cardapio.map((item, index) => {
  //console.log(item);
});

//---------------- ADICIONA ITEM AO CARRINHO --------------------//

let itens = 0;
let carrinho = [];

// função que atualiza a quantidade de itens no icon do carrinho na nav-bar.
function atualizaItens(total) {
  const $qtd = document.getElementById("carrinhoBtnQtd");
  $qtd.textContent = total;
}

// função que adiciona um item (um cento) ao carrinhoIcon.
function adicionarCarrinhoIcon(event) {
  modal.style.display = "block";
  //  let item = cardapio.filter((i) => i.id == itemId);

  console.log(item.name);

  carrinho.push(item);
  itens += 1;
  atualizaItens(itens);

  // console.log(carrinho);

  // console.log(`Adicionou ${carrinho} ao carrinho`)
}

// função que habilita botão de mais (btnMais_{item.id}) e
// incrementa o valor da div com id="quantidade_${item.id}".
function adicionar(event) {
  let itemId = parseInt(event.srcElement.id.replace("btnMais_", ""));
  const $qtd = document.getElementById(`quantidade_${itemId}`);
  let qtd = parseInt($qtd.textContent);
  qtd += 1;
  $qtd.textContent = qtd;
}

// função que habilita botão de menos (btnMenos_{item.id}) e
// decrementa o valor da div com id="quantidade_${item.id}".
function subtrair(event) {
  let itemId = parseInt(event.srcElement.id.replace("btnMenos_", ""));
  const $qtd = document.getElementById(`quantidade_${itemId}`);
  let qtd = parseInt($qtd.textContent);
  if (qtd > 0) {
    qtd -= 1;
    $qtd.textContent = qtd;
  }
}

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
