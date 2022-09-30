new Vue({
  el: "#app",
  data: {
    cardapio: [
      {
        id: 1,
        name: "Coxinha de Frango",
        image: "./images/novas-imgs/coxinha-sm.jpg",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Coxinha recheada com frango.",
        priceCongelado: 25,
      },
      {
        id: 2,
        name: "Bolinha de Queijo Tradicional",
        image: "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Bolinha frita recheada com queijo mussarela.",
        priceCongelado: 25,
      },
      {
        id: 3,
        name: "Bolinha de Queijo c/ Alho Frito",
        image: "./images/novas-imgs/bolinha-de-queijo-sm.jpg",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Bolinha recheada com queijo mussarela e alho frito.",
        priceCongelado: 25,
      },
      {
        id: 4,
        name: "Maravilha",
        image: "./images/novas-imgs/maravilha-sm.jpg ",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Maravilha recheada com presunto e queijo mussarela.",
        priceCongelado: 25,
      },
      {
        id: 5,
        name: "Risoles de Carne",
        image: "./images/novas-imgs/risoles-carne-sm.jpg",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheada com carne bovina.",
        priceCongelado: 25,
      },
      {
        id: 6,
        name: "Risoles de Carne c/ Queijo",
        image: "./images/novas-imgs/risoles-carne-sm.jpg",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheado com carne bovina e queijo mussarela.",
        priceCongelado: 25,
      },
      {
        id: 7,
        name: "Risoles de Calabresa",
        image: "./images/novas-imgs/risoles-calabresa-sm.png",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheado com calabresa.",
        priceCongelado: 25,
      },
      {
        id: 8,
        name: "Risoles de Calabresa c/ Queijo",
        image: "./images/novas-imgs/risoles-calabresa-sm.png",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Risoles recheado com calabresa e queijo mussarela.",
        priceCongelado: 25,
      },
      {
        id: 9,
        name: "Croquete de Carne",
        image: "./images/novas-imgs/croquete-carne-sm.jpg",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Croquete de carne bovina.",
        priceCongelado: 25,
      },
      {
        id: 10,
        name: "Croquete de Frango",
        image: "./images/novas-imgs/croquete-frango-sm.png",
        price: 29.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Croquete de frango.",
        priceCongelado: 25,
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
        return "Endereço para Retirada:";
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
      this.finalizacao = false;
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
      this.dadosPadrao();
      this.salvarPedido();
    },

    // esclarecer com professor.
    // alteraQtd(salgado, qtd) {
    //   let salgadoNoCarrinho = this.carrinho.find(
    //     (item) => salgado.id == item.id
    //   );

    //   if (salgadoNoCarrinho.qtd == 0) {
    //     salgadoNoCarrinho.qtd = 0;
    //   } else {
    //     salgadoNoCarrinho.qtd += qtd;
    //     salgadoNoCarrinho.subtotal =
    //       salgadoNoCarrinho.qtd * salgadoNoCarrinho.price;
    //   }

    //   if (salgadoNoCarrinho.qtd == 0 && salgadoNoCarrinho.congelado == 0) {
    //     const index = this.carrinho.indexOf(salgadoNoCarrinho);
    //     if (index > -1) {
    //       this.carrinho.splice(index, 1);
    //     }
    //   }
    //   this.dadosPadrao();
    //   this.salvarPedido();
    // },

    somaQtd(salgado, qtd) {
      // find do salgado
      let salgadoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      salgadoNoCarrinho.qtd += 1;
      salgadoNoCarrinho.subtotal =
        salgadoNoCarrinho.price * salgadoNoCarrinho.qtd;
      this.salvarPedido();
    },

    subtraiQtd(salgado, qtd) {
      // find do salgado
      let salgadoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      if (salgadoNoCarrinho.qtd >= 1) {
        salgadoNoCarrinho.qtd -= 1;
        salgadoNoCarrinho.subtotal =
          salgadoNoCarrinho.price * salgadoNoCarrinho.qtd;
      }
      this.salvarPedido();

      if (salgadoNoCarrinho.qtd == 0 && salgadoNoCarrinho.congelado == 0) {
        const index = this.carrinho.indexOf(salgadoNoCarrinho);
        if (index > -1) {
          this.carrinho.splice(index, 1);
        }
      }
      this.dadosPadrao();
      this.salvarPedido();
    },

    somaQtdCongelado(salgado, qtd) {
      // find do salgado
      console.log("salgado", salgado);
      let congeladoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      console.log("congeladoNoCarrinho", congeladoNoCarrinho);
      congeladoNoCarrinho.congelado += 1;
      congeladoNoCarrinho.subtotalCongelado =
        congeladoNoCarrinho.priceCongelado * congeladoNoCarrinho.congelado;
      this.salvarPedido();
    },

    subtraiQtdCongelado(salgado, qtd) {
      // find do salgado
      let congeladoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      if (congeladoNoCarrinho.congelado >= 1) {
        congeladoNoCarrinho.congelado -= 1;
        congeladoNoCarrinho.subtotalCongelado =
          congeladoNoCarrinho.priceCongelado * congeladoNoCarrinho.congelado;
      }
      this.salvarPedido();

      if (congeladoNoCarrinho.qtd == 0 && congeladoNoCarrinho.congelado == 0) {
        const index = this.carrinho.indexOf(congeladoNoCarrinho);
        if (index > -1) {
          this.carrinho.splice(index, 1);
        }
      }
      this.dadosPadrao();
      this.salvarPedido();
    },

    lixeiraCarrinho(salgado) {
      let salgadoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      salgadoNoCarrinho = salgado;
      salgadoNoCarrinho.qtd = 0;
      salgadoNoCarrinho.congelado = 0;
      const index = this.carrinho.indexOf(salgadoNoCarrinho);
      if (index > -1) {
        this.carrinho.splice(index, 1);
      }
      this.dadosPadrao();
      this.salvarPedido();
    },

    dadosPadrao() {
      this.retirada = true;
      this.entrega = true;
    },

    voltarCarrinho() {
      this.finalizacao = false;
      this.formData.delivery = [];
      this.totalCarrinho = this.totalCarrinho;
      this.dadosPadrao();
      this.salvarPedido();
    },

    fecharCarrinho() {
      this.dadosPadrao();
      fecharModal();
      this.formData.delivery = [];
      this.salvarPedido();
    },

    confirmarPedido() {
      this.dadosPadrao();
      this.finalizacao = true;
    },

    finalizarPedido() {
      this.salvarPedido();
      this.enviarMensagem();
    },
    salvarPedido() {
      const data = {
        form: this.formData,
        carrinho: this.carrinho,
      };
      localStorage.setItem("data-user", JSON.stringify(data));
    },
    carregarPedido() {
      this.dadosPadrao();
      let data = localStorage.getItem("data-user");
      if (data) {
        console.log("achei dados para restaurar...");
        data = JSON.parse(data);
        console.log(data);
        this.formData = data.form;
        //this.carrinho = data.carrinho
        for (let salgadoSalvo of data.carrinho) {
          let salgadoDoCardapio = this.cardapio.find(
            (item) => item.id == salgadoSalvo.id
          );
          salgadoDoCardapio.qtd = salgadoSalvo.qtd;
          salgadoDoCardapio.congelado = salgadoSalvo.congelado;
          salgadoDoCardapio.subtotal = salgadoSalvo.price * salgadoSalvo.qtd;
          salgadoDoCardapio.subtotalCongelado =
            salgadoSalvo.priceCongelado * salgadoSalvo.congelado;
          this.carrinho.push(salgadoDoCardapio);
        }
      }
    },

    enviarMensagem() {
      let msg = "```MTH / Web Pedidos:%0a";
      msg += `Cliente: ${this.formData.nome}, solicitou:%0a`;
      msg += "—————————————————————————```%0a%0a";
      for (item of this.carrinho) {
        msg += `*${item.name}*%0a`;
        msg += "```";
        msg += `Pronto: ${item.qtd} Congelado: ${item.congelado}%0a`;
        msg += "—————————————————————————```%0a%0a";
      }

      if (this.formData.delivery[0] == "P/ Entrega") {
        msg += "*Encomenda*: ```";
        msg += `${this.formData.delivery[0]}`;
        msg += "```%0a";
        msg += "*Endereço*: ```";
        msg += `${this.formData.endereco}`;
        msg += "```%0a";
        msg += "%0a*Data para Entrega*:```";
        msg += `${this.formData.dataPedido}`;
        msg += "```%0a";
        msg += "*Periodo*: ```";
        msg += `${this.formData.periodo}`;
        msg += "```%0a%0a";
      } else {
        msg += "*Encomenda*:```";
        msg += `${this.formData.delivery[0]}`;
        msg += "```%0a";
        msg +=
          "*Endereço*: ```Rua Pastor Alberto Augusto nº 126 , Santa Maria , Santos - SP.```%0a%0a";
        msg += "*Data para Entrega*:```";
        msg += `${this.formData.dataPedido}`;
        msg += "```%0a";
        msg += "*Periodo*:```";
        msg += `${this.formData.periodo}`;
        msg += "```%0a%0a";
      }

      msg += "*Total*:```";
      msg += `R$ ${this.totalDoCarrinho},00%0a`;
      msg += "(Pagamento PIX a confirmar)```";

      window.location.href = `https://wa.me/5513981942956?text=${msg}`;
    },
  },
  mounted() {
    this.carregarPedido();
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
