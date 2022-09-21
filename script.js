new Vue({
  el: "#app",
  data: {
    cardapio: [
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
    ],
    carrinho: [],
    totalCarrinho: [],
  },
  computed: {
    carrinhoMessage() {
      return this.carrinho.length == 0
        ? "Nenhum item no carrinho"
        : "Itens no Carrinho";
    },
  },

  methods: {
    adicionarAoCarrinho(salgado) {
      console.log("Funcionou o clique!", salgado);
      this.carrinho.push(salgado);
      this.totalCarrinho.push(salgado.price);
      console.log("Total do carrinho:", this.totalCarrinho);
      this.somarCarrinho();
    },
    somarCarrinho(totalCarrinho) {
      let sum = 0;
      this.totalCarrinho.forEach(function (item) {
        sum += item;
        console.log("Valor do carrinho é: " + sum);
      });
      return sum;
    },
    somarSubtotal() {},
    lixeiraCarrinho(salgado) {
      this.carrinho.pop(salgado);
      this.totalCarrinho;
    },
  },
});

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
