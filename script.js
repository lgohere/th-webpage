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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Bolinha recheada com queijo mussarela e alho frito",
        priceCongelado: 50,
      },
      {
        id: 4,
        name: "Maravilha",
        image: "./images/novas-imgs/maravilha-sm.jpg ",
        price: 58.0,
        qtd: 0,
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
        meioCento: 0,
        priceMeioCento: 29,
        priceMeioCentoCongelado: 25,
        meioCentoCongelado: 0,
        subtotalMeioCento: 0,
        subtotalMeioCentoCongelado: 0,
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
    ativarMeioCento: false,
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
        total +=
          item.subtotal +
          item.subtotalCongelado +
          item.subtotalMeioCento +
          item.subtotalMeioCentoCongelado;
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

      if (this.ativarMeioCento == false) {
        salgadoDoCarrinho.qtd += 1;
        salgadoDoCarrinho.subtotal =
          salgadoDoCarrinho.price * salgadoDoCarrinho.qtd;
      } else {
        salgadoDoCarrinho.meioCento += 1;
        salgadoDoCarrinho.subtotalMeioCento =
          salgadoDoCarrinho.priceMeioCento * salgadoDoCarrinho.meioCento;
      }
      abrirModal();

      // gamby para atualizar o carrinho!
      // this.carrinho.push(10);
      // this.carrinho.pop();
      this.dadosPadrao();
      this.salvarPedido();
    },

    // ver com o professor

    // alteraQtd(salgado, qtd) {
    //   // find do salgado
    //   let salgadoNoCarrinho = this.carrinho.find(
    //     (item) => salgado.id == item.id
    //   );

    //   if (salgadoNoCarrinho.qtd >= 0) {
    //     salgadoNoCarrinho.qtd += qtd;
    //     salgadoNoCarrinho.subtotal =
    //       salgadoNoCarrinho.qtd * salgadoNoCarrinho.price;
    //   }

    //   if (
    //     salgadoNoCarrinho.subtotal == 0 &&
    //     salgadoNoCarrinho.subtotalCongelado == 0 &&
    //     salgadoNoCarrinho.subtotalMeioCento == 0 &&
    //     salgadoNoCarrinho.subtotalMeioCentoCongelado == 0
    //   ) {
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

      if (salgadoNoCarrinho.qtd >= 0 && salgadoNoCarrinho.qtd >= 1) {
        salgadoNoCarrinho.qtd -= 1;
        salgadoNoCarrinho.subtotal =
          salgadoNoCarrinho.price * salgadoNoCarrinho.qtd;
      }

      if (
        salgadoNoCarrinho.subtotal == 0 &&
        salgadoNoCarrinho.subtotalCongelado == 0 &&
        salgadoNoCarrinho.subtotalMeioCento == 0 &&
        salgadoNoCarrinho.subtotalMeioCentoCongelado == 0
      ) {
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
      let congeladoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
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

      if (
        congeladoNoCarrinho.congelado >= 0 &&
        congeladoNoCarrinho.congelado >= 1
      ) {
        congeladoNoCarrinho.congelado -= 1;
        congeladoNoCarrinho.subtotalCongelado =
          congeladoNoCarrinho.priceCongelado * congeladoNoCarrinho.congelado;
      }

      if (
        congeladoNoCarrinho.subtotal == 0 &&
        congeladoNoCarrinho.subtotalCongelado == 0 &&
        congeladoNoCarrinho.subtotalMeioCento == 0 &&
        congeladoNoCarrinho.subtotalMeioCentoCongelado == 0
      ) {
        const index = this.carrinho.indexOf(congeladoNoCarrinho);
        if (index > -1) {
          this.carrinho.splice(index, 1);
        }
      }
      this.dadosPadrao();
      this.salvarPedido();
    },

    somaQtdMeioCento(salgado, qtd) {
      let meioCentoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );

      meioCentoNoCarrinho.meioCento += 1;
      meioCentoNoCarrinho.subtotalMeioCento =
        meioCentoNoCarrinho.meioCento * meioCentoNoCarrinho.priceMeioCento;

      this.dadosPadrao();
      this.salvarPedido();
    },

    subtraiQtdMeioCento(salgado, qtd) {
      // find do salgado
      let meioCentoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );

      if (meioCentoNoCarrinho.meioCento >= 1) {
        meioCentoNoCarrinho.meioCento -= 1;
        meioCentoNoCarrinho.subtotalMeioCento =
          meioCentoNoCarrinho.priceMeioCento * meioCentoNoCarrinho.meioCento;
      }
      this.salvarPedido();

      if (
        meioCentoNoCarrinho.subtotalMeioCento == 0 &&
        meioCentoNoCarrinho.subtotal == 0 &&
        meioCentoNoCarrinho.subtotalMeioCentoCongelado == 0 &&
        meioCentoNoCarrinho.subtotalCongelado == 0
      ) {
        const index = this.carrinho.indexOf(meioCentoNoCarrinho);
        if (index > -1) {
          this.carrinho.splice(index, 1);
        }
      }
      this.dadosPadrao();
      this.salvarPedido();
    },

    somaQtdMeioCentoCongelado(salgado, qtd) {
      let meioCentoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );

      meioCentoNoCarrinho.meioCentoCongelado += 1;
      meioCentoNoCarrinho.subtotalMeioCentoCongelado =
        meioCentoNoCarrinho.meioCentoCongelado *
        meioCentoNoCarrinho.priceMeioCentoCongelado;

      this.dadosPadrao();
      this.salvarPedido();
    },

    subtraiQtdMeioCentoCongelado(salgado, qtd) {
      // find do salgado
      let meioCentoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );

      if (meioCentoNoCarrinho.meioCentoCongelado >= 1) {
        meioCentoNoCarrinho.meioCentoCongelado -= 1;
        meioCentoNoCarrinho.subtotalMeioCentoCongelado =
          meioCentoNoCarrinho.priceMeioCentoCongelado *
          meioCentoNoCarrinho.meioCentoCongelado;
      }
      this.salvarPedido();

      if (
        meioCentoNoCarrinho.subtotalMeioCento == 0 &&
        meioCentoNoCarrinho.subtotal == 0 &&
        meioCentoNoCarrinho.subtotalMeioCentoCongelado == 0 &&
        meioCentoNoCarrinho.subtotalCongelado == 0
      ) {
        const index = this.carrinho.indexOf(meioCentoNoCarrinho);
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
      salgadoNoCarrinho.meioCento = 0;
      salgadoNoCarrinho.meioCentoCongelado = 0;
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
        for (let salgadoSalvo of data.carrinho) {
          let salgadoDoCardapio = this.cardapio.find(
            (item) => item.id == salgadoSalvo.id
          );
          salgadoDoCardapio.qtd = salgadoSalvo.qtd;
          salgadoDoCardapio.congelado = salgadoSalvo.congelado;
          salgadoDoCardapio.meioCento = salgadoSalvo.meioCento;
          salgadoDoCardapio.meioCentoCongelado =
            salgadoSalvo.meioCentoCongelado;
          salgadoDoCardapio.subtotal = salgadoSalvo.price * salgadoSalvo.qtd;
          salgadoDoCardapio.subtotalCongelado =
            salgadoSalvo.priceCongelado * salgadoSalvo.congelado;
          salgadoDoCardapio.subtotalMeioCento =
            salgadoSalvo.priceMeioCento * salgadoSalvo.meioCento;
          salgadoDoCardapio.subtotalMeioCentoCongelado =
            salgadoSalvo.priceMeioCentoCongelado *
            salgadoSalvo.meioCentoCongelado;
          this.carrinho.push(salgadoDoCardapio);
        }
      }
    },

    enviarMensagem() {
      let msg = `*MTH / Web Pedidos*:%0a`;
      msg += `Cliente: *${this.formData.nome}*, solicitou:%0a%0a`;
      for (item of this.carrinho) {
        msg += "*```CENTO```:* %0a";
        msg += `_*${item.name}* (Pronto: *${item.qtd}*/ Congelado: *${item.congelado})_*%0a`;
      }
      for (item of this.carrinho) {
        if (item.meioCento > 0 || item.meioCentoCongelado > 0) {
          msg += "*```MEIO CENTO```:* %0a";
          msg += `_*${item.name}* (Pronto: *${item.meioCento}*/ Congelado: *${item.meioCentoCongelado})_*%0a`;
        }
      }

      msg += `%0a*Encomenda*: ${this.formData.delivery}%0a`;
      if (this.formData.delivery[0] == "P/ Entrega") {
        msg += `*Endereço*: ${this.formData.endereco}%0a`;
        msg += `*Data para Entrega*: ${this.formData.dataPedido}%0a`;
        msg += `*Periodo*: ${this.formData.periodo}%0a`;
      } else {
        msg += `*Endereço*: Rua Pastor Alberto Augusto 126, Santa Maria, Santos - SP %0a`;
        msg += `*Data para Retirada*: ${this.formData.dataPedido}%0a`;
        msg += `*Periodo*: ${this.formData.periodo}%0a`;
      }
      msg += `%0a*Total*: R$${this.totalDoCarrinho},00 %0a _(Pagamento PIX a confirmar)_ `;

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
