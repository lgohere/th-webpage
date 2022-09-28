new Vue({
  el: "#app",
  data: {
    cardapio: [
      {
        id: 1,
        name: "Coxinha de Frango",
        image: "./images/novas-imgs/coxinha-sm.jpg",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Coxinha recheada com frango",
        priceCongelado: 50,
      },
      {
        id: 2,
        name: "Bolinha de Queijo Tradicional",
        image: "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Bolinha frita recheada com queijo mussarela",
        priceCongelado: 50,
      },
      {
        id: 3,
        name: "Bolinha de Queijo c/ Alho Frito",
        image: "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Bolinha recheada com queijo mussarela e alho frito",
        priceCongelado: 50,
      },
      {
        id: 4,
        name: "Maravilha",
        image: "./images/novas-imgs/maravilha-sm.jpg",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Maravilha recheada com presunto e queijo mussarela",
        priceCongelado: 50,
      },
      {
        id: 5,
        name: "Risoles de Carne",
        image: "./images/novas-imgs/risoles-carne-sm.jpg",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheada com carne bovina",
        priceCongelado: 50,
      },
      {
        id: 6,
        name: "Risoles de Carne c/ Queijo",
        image: "./images/novas-imgs/risoles-carne-sm.jpg",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheado com carne bovina e queijo mussarela",
        priceCongelado: 50,
      },
      {
        id: 7,
        name: "Risoles de Calabresa",
        image: "./images/novas-imgs/risoles-calabresa-sm.png",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheado com calabresa",
        priceCongelado: 50,
      },
      {
        id: 8,
        name: "Risoles de Calabresa c/ Queijo",
        image: "./images/novas-imgs/risoles-calabresa-sm.png",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheado com calabresa e queijo mussarela",
        priceCongelado: 50,
      },
      {
        id: 9,
        name: "Croquete de Carne",
        image: "./images/novas-imgs/croquete-carne-sm.jpg",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Croquete de carne bovina",
        priceCongelado: 50,
      },
      {
        id: 10,
        name: "Croquete de Frango",
        image: "./images/novas-imgs/croquete-frango-sm.png",
        price: 58.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Croquete de frango",
        priceCongelado: 50,
      },
    ],
    carrinho: [],
    totalCarrinho: [],
    finalizacao: false,
    entrega: true,
    retirada: true,
    formData: {
      nome: "",
      mobile: "",
      delivery: [],
      endereco: "",
      dataPedido: new Date(),
      periodo: [],
    },
    pedido: [],
  },
  computed: {
    carrinhoMessage() {
      if (this.carrinho.length == 0 && this.totalDoCarrinho == 0) {
        return "Nenhum item no carrinho";
      } else {
        return "Itens no Carrinho";
      }
    },
    entregaOuRetirada() {
      if (this.entrega == true) {
        return "Endereço para Entrega:";
      } else {
        return "Endereço de Retirada:";
      }
    },
    totalDoCarrinho() {
      let total = 0;
      this.carrinho.forEach((item) => {
        total += item.subtotal + item.subtotalCongelado;
      });
      if (this.formData.delivery[0] == "P/ Entrega") {
        total += 20;
      }
      return total;
    },
  },

  methods: {
    adicionarAoCarrinho(salgado) {
      // procurar se ja tem no carrinho
      // se tiver no carrinho, somo qtd
      // senao faco push no carrinho
      let salgadoDoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );

      // nao encontrou
      if (!salgadoDoCarrinho) {
        salgadoDoCarrinho = salgado;
        this.carrinho.push(salgadoDoCarrinho);
        abrirModal();
      }

      salgadoDoCarrinho.qtd += 1;
      salgadoDoCarrinho.subtotal =
        salgadoDoCarrinho.price * salgadoDoCarrinho.qtd;
      abrirModal();

      // gamby para atualizar o carrinho!
      // this.carrinho.push(10);
      // this.carrinho.pop();
      this.salvarPedido()
    },

    alteraQtd(salgado, qtd) {
      // find do salgado
      let salgadoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );

      salgadoNoCarrinho.qtd += qtd
      salgadoNoCarrinho.subtotal =
      salgadoNoCarrinho.qtd * salgadoNoCarrinho.price;

      if (salgadoNoCarrinho.qtd == 0 && salgadoNoCarrinho.congelado == 0) {
        const index = this.carrinho.indexOf(salgadoNoCarrinho);
        if (index > -1) {
          this.carrinho.splice(index, 1);
        }
      }
    },

    somaQtdCongelado(salgado, qtd) {
      // find do salgado
      console.log('salgado', salgado)
      let congeladoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      console.log('congeladoNoCarrinho', congeladoNoCarrinho)
      congeladoNoCarrinho.congelado += 1;
      congeladoNoCarrinho.subtotalCongelado = congeladoNoCarrinho.priceCongelado * congeladoNoCarrinho.congelado;
      // if (congeladoNoCarrinho.qtd >= 0) {
      // }
    },

    subtraiQtdCongelado(salgado, qtd) {
      // find do salgado
      let congeladoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      if (congeladoNoCarrinho.congelado >= 1) {
        congeladoNoCarrinho.congelado -= 1;
        congeladoNoCarrinho.subtotalCongelado = congeladoNoCarrinho.priceCongelado * congeladoNoCarrinho.congelado;
      }

      if (congeladoNoCarrinho.qtd == 0 && congeladoNoCarrinho.congelado == 0) {
        const index = this.carrinho.indexOf(congeladoNoCarrinho);
        if (index > -1) {
          this.carrinho.splice(index, 1);
        }
      }
    },

    lixeiraCarrinho(salgado) {
      let salgadoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      salgadoNoCarrinho = salgado;
      const index = this.carrinho.indexOf(salgadoNoCarrinho);
      if (index > -1) {
        this.carrinho.splice(index, 1);
      }
      salgadoNoCarrinho.congelado = 0;
      salgadoNoCarrinho.priceCongelado = 0;
    },

    voltarCarrinho() {
      this.finalizacao = !this.finalizacao;
      this.formData.delivery = [];
    },

    fecharCarrinho() {
      fecharModal();
    },

    salvarPedido() {
      const data = {
        form:this.formData,
        carrinho: this.carrinho,
      }
      localStorage.setItem("data-user", JSON.stringify(data))
    },
    carregarPedido() {
      let data = localStorage.getItem("data-user")
      if (data) {
        console.log('achei dados para restaurar...')
        data = JSON.parse(data)
        console.log(data)
        this.formData = data.form
        //this.carrinho = data.carrinho
        for (let salgadoSalvo of data.carrinho) {
          let salgadoDoCardapio = this.cardapio.find(
            (item) => item.id == salgadoSalvo.id
          );
          salgadoDoCardapio.qtd = salgadoSalvo.qtd
          salgadoDoCardapio.congelado = salgadoSalvo.congelado
          salgadoDoCardapio.subtotal = salgadoSalvo.price * salgadoSalvo.qtd;
          salgadoDoCardapio.subtotalCongelado = salgadoSalvo.priceCongelado * salgadoSalvo.congelado;
          this.carrinho.push(salgadoDoCardapio)
        }

      }
    }
  },
  mounted() {
    this.carregarPedido()
  }
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
