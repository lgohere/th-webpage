new Vue({
  el: "#app",
  data: {
    cardapio: [
      {
        id: 1,
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
        tipo: "fritos",
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
      {
        id: 11,
        tipo: "assados",
        name: "Esfiha de Carne",
        image: "./images/novas-imgs/esfihacarne.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Esfiha recheada com carne bovina.",
        priceCongelado: 30,
      },
      {
        id: 12,
        tipo: "assados",
        name: "Esfiha de Carne c/ Catupiry",
        image: "./images/novas-imgs/esfihacarne.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Esfiha recheada com carne bovina e catupiry.",
        priceCongelado: 30,
      },
      {
        id: 13,
        tipo: "assados",
        name: "Esfiha de Frango",
        image: "./images/novas-imgs/esfihafrango.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Esfiha recheada com frango.",
        priceCongelado: 30,
      },
      {
        id: 14,
        tipo: "assados",
        name: "Esfiha de Frango c/ Catupiry",
        image: "./images/novas-imgs/esfihafrango.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Esfiha recheada com frango e catupiry.",
        priceCongelado: 30,
      },
      {
        id: 15,
        tipo: "assados",
        name: "Esfiha de Calabresa",
        image: "./images/novas-imgs/esfihacalabresa.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Esfiha recheada com carne suína.",
        priceCongelado: 30,
      },
      {
        id: 16,
        tipo: "assados",
        name: "Esfiha de Calabresa c/ Catupiry",
        image: "./images/novas-imgs/esfihacalabresa.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Esfiha recheada com carne suína e catupiry.",
        priceCongelado: 30,
      },
      {
        id: 17,
        tipo: "assados",
        name: "Mistinho de Presunto e Queijo",
        image: "./images/novas-imgs/mistinho.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Mistinho recheado com presunto e queijo.",
        priceCongelado: 30,
      },
      {
        id: 18,
        tipo: "assados",
        name: "Enroladinho de Salsicha",
        image: "./images/novas-imgs/enrroladinho.png",
        price: 40.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "",
        priceCongelado: 30,
      },
      {
        id: 19,
        tipo: "assados",
        name: "Empadinha de Frango",
        image: "./images/novas-imgs/emp-frango.png",
        price: 45.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Empadinha recheada com frango.",
        priceCongelado: 35,
      },
      {
        id: 20,
        tipo: "assados",
        name: "Empadinha de Frango c/ Catupiry",
        image: "./images/novas-imgs/emp-frangocatupiry.png",
        price: 45.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Empadinha recheada com frango e catupiry.",
        priceCongelado: 35,
      },
      {
        id: 21,
        tipo: "assados",
        name: "Empadinha de Palmito",
        image: "./images/novas-imgs/emp-palmito.png",
        price: 45.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Empadinha recheada com palmito.",
        priceCongelado: 35,
      },
      {
        id: 22,
        tipo: "assados",
        name: "Empadinha de Brócolis c/ Bacon",
        image: "./images/novas-imgs/emp-brocolis.png",
        price: 45.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Empadinha recheada brócolis e bacon.",
        priceCongelado: 35,
      },
      {
        id: 23,
        tipo: "assados",
        name: "Empadinha de Brócolis c/ Catupiry",
        image: "./images/novas-imgs/emp-brocoliscatupiry.png",
        price: 45.0,
        qtd: 0,
        congelado: 0,
        subtotalCongelado: 0,
        subtotal: 0,
        desc: "Empadinha recheada brócolis e catupiry.",
        priceCongelado: 35,
      },
    ],
    bolos: {
      image: {
        redondo: "./images/novas-imgs/roundedcake.png",
        retangular: "./images/novas-imgs/squarecake.png",
      },
      formato: [
        "Redondo (20cm / 2kg / 20-25 fatias)",
        "Redondo (25cm / 3kg / 35-37 fatias)",
        "Retangular (25x35cm / peso / 45 fatias)",
        "Retangular (30x40cm / peso / 60 fatias)",
      ],
      massa: ["Pão de Ló Branca", "Chocolate"],
      tipoRecheio: [
        "Tradicional (01 recheio)",
        "Dois Recheios",
        "Tradicional c/ Frutas (01 recheio + 01 fruta)",
        "Dois Recheios c/ Frutas (02 recheios + 01 fruta)",
      ],
      recheio: {
        tradicional: [
          "Leite Ninho",
          "Brigadeiro",
          "Beijinho",
          "Doce de leite",
          "Doce de Leite c/ Ameixa",
          "Paçoca",
          "Creme Belga Tradicional",
          "Creme Belga de Chocolate Trufado",
          "Sensação",
          "Mousse de Maracujá",
          "Mousse de Chocolate",
          "Mousse de Morango",
          "Mousse de Limão",
        ],
        frutas: ["Abacaxi", "Ameixa", "Côco", "Maracujá", "Morango", "Pêssego"],
      },
      qtd: 0,
      subtotal: 0,
    },
    carrinho: [],
    totalCarrinho: [],
    finalizacao: false,
    delivery: {
      sim: "Incluir Entrega (R$ 20,00)",
      nao: "Retirar no Local",
    },
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
    boloPedido: {
      id: 50,
      image: "",
      formato: "",
      massa: "",
      tipoRecheio: "",
      recheio: "",
      recheioPlus: "",
      recheioFruta: "",
      price: 50,
      subtotal: 0,
      qtd: 0,
    },

    listaSalgados: true,
    listaBolos: false,
    listaFritos: true,
    listaAssados: false,
  },
  computed: {
    fritos() {
      return this.cardapio.filter((item) => item.tipo == "fritos");
    },
    assados() {
      return this.cardapio.filter((item) => item.tipo == "assados");
    },
    carrinhoMessage() {
      if (this.carrinho.length == 0 && this.totalDoCarrinho == 0) {
        return "Nenhum item no carrinho";
      } else {
        return "Itens no Carrinho";
      }
    },
    entregaOuRetirada() {
      if (this.formData.delivery == this.delivery.sim) {
        return "Endereço para Entrega:";
      } else if (this.formData.delivery == this.delivery.nao) {
        return "Endereço para Retirada:";
      } else {
        return "";
      }
    },
    totalDoCarrinho() {
      let total = 0;
      this.carrinho.forEach((item) => {
        total += item.subtotal + item.subtotalCongelado;
      });
      if (this.formData.delivery == this.delivery.sim) {
        total += 20;
      }
      return total;
    },
  },

  methods: {
    abrirSalgados() {
      (this.listaSalgados = true),
        (this.listaBolos = false),
        (this.listaFritos = true),
        (this.listaAssados = false);
    },

    abrirBolos() {
      (this.listaSalgados = false),
        (this.listaBolos = true),
        (this.listaFritos = false),
        (this.listaAssados = false);
    },

    abrirFritos() {
      (this.listaSalgados = true),
        (this.listaBolos = false),
        (this.listaFritos = true),
        (this.listaAssados = false);
    },

    abrirAssados() {
      (this.listaSalgados = true),
        (this.listaBolos = false),
        (this.listaFritos = false),
        (this.listaAssados = true);
    },

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

    boloImagem() {
      if (
        this.boloPedido.formato == "Redondo (20cm / 2kg / 20-25 fatias)" ||
        this.boloPedido.formato == "Redondo (25cm / 3kg / 35-37 fatias)"
      ) {
        this.boloPedido.image = this.bolos.image.redondo;
      } else {
        this.boloPedido.image = this.bolos.image.retangular;
      }
    },

    adicionarBoloAoCarrinho() {
      this.boloImagem();
      let pedidoBolo = {
        id: this.boloPedido.id++,
        image: this.boloPedido.image,
        formato: this.boloPedido.formato,
        massa: this.boloPedido.massa,
        tipoRecheio: this.boloPedido.tipoRecheio,
        recheio: this.boloPedido.recheio,
        recheioPlus: this.boloPedido.recheioPlus,
        recheioFruta: this.boloPedido.recheioFruta,
        subtotal: this.boloPedido.price,
        qtd: this.boloPedido.qtd + 1,
        price: this.boloPedido.price,
        subtotalCongelado: 0,
      };
      this.carrinho.push(pedidoBolo);
      this.boloPedido.image = "";
      this.boloPedido.formato = "";
      this.boloPedido.massa = "";
      this.boloPedido.tipoRecheio = "";
      this.boloPedido.recheio = "";
      this.boloPedido.recheioPlus = "";
      this.boloPedido.recheioFruta = "";
      console.log(this.carrinho);
      abrirModal();
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
        for (let salgadoSalvo of data.carrinho) {
          let salgadoFrito = this.cardapio.find(
            (item) => item.id == salgadoSalvo.id
          );
          salgadoFrito.qtd = salgadoSalvo.qtd;
          salgadoFrito.congelado = salgadoSalvo.congelado;
          salgadoFrito.subtotal = salgadoSalvo.price * salgadoSalvo.qtd;
          salgadoFrito.subtotalCongelado =
            salgadoSalvo.priceCongelado * salgadoSalvo.congelado;
          this.carrinho.push(salgadoFrito);
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

      if (this.formData.delivery == this.delivery.sim) {
        msg += "*Encomenda*: ```";
        msg += `${this.formData.delivery}`;
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
        msg += `${this.delivery.nao}`;
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

      window.location.href = `https://wa.me/5513981258187?text=${msg}`;
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
