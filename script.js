new Vue({
  el: "#app",
  data: {
    cardapio: getCardapio(),
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
        total += item.subtotal + item.priceCongelado;
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
        salgadoDoCarrinho.qtd = 0;
        this.carrinho.push(salgadoDoCarrinho);
        abrirModal();
      }

      salgadoDoCarrinho.qtd += 1;
      salgadoDoCarrinho.subtotal =
        salgadoDoCarrinho.price * salgadoDoCarrinho.qtd;
      abrirModal();

      // gamby para atualizar o carrinho!
      this.carrinho.push(10);
      this.carrinho.pop();
    },

    somaQtd(salgado, qtd) {
      // find do salgado
      let salgadoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      salgadoNoCarrinho = salgado;
      salgadoNoCarrinho.qtd += 1;
      salgadoNoCarrinho.subtotal =
        salgadoNoCarrinho.qtd * salgadoNoCarrinho.price;
      this.carrinho.push(10);
      this.carrinho.pop();
    },

    subtraiQtd(salgado, qtd) {
      // find do salgado
      let salgadoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );

      if (salgadoNoCarrinho.qtd > 0) {
        salgadoNoCarrinho.qtd = salgado.qtd;
        salgadoNoCarrinho.qtd -= 1;
        salgadoNoCarrinho.subtotal =
          salgadoNoCarrinho.qtd * salgadoNoCarrinho.price;
        this.carrinho.push(10);
        this.carrinho.pop();
      }

      if (salgadoNoCarrinho.qtd == 0 && salgadoNoCarrinho.congelado == 0) {
        const index = this.carrinho.indexOf(salgadoNoCarrinho);
        if (index > -1) {
          this.carrinho.splice(index, 1);
        }
      }
    },

    somaQtdCongelado(salgado, qtd) {
      // find do salgado
      let congeladoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      if (congeladoNoCarrinho.qtd >= 0) {
        congeladoNoCarrinho.congelado += 1;
        congeladoNoCarrinho.priceCongelado = 50 * congeladoNoCarrinho.congelado;
      }
    },

    subtraiQtdCongelado(salgado, qtd) {
      // find do salgado
      let congeladoNoCarrinho = this.carrinho.find(
        (item) => salgado.id == item.id
      );
      if (congeladoNoCarrinho.congelado >= 1) {
        congeladoNoCarrinho.congelado -= 1;
        congeladoNoCarrinho.priceCongelado = 50 * congeladoNoCarrinho.congelado;
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
      localStorage.setItem("Nome:", this.formData.nome);
      localStorage.setItem("Celular:", this.formData.mobile);
      localStorage.setItem("Delivery:", this.formData.delivery[0]);
      localStorage.setItem("Endereço:", this.formData.endereco);
      localStorage.setItem("Data solicitada:", this.formData.dataPedido);
      localStorage.setItem("Periodo solicitado:", this.formData.periodo);
      localStorage.setItem("Valor:", this.totalDoCarrinho);

      for (i in this.carrinho) {
        let pedir =
          `${this.carrinho[i].name} : Quantidade: ${this.carrinho[i].qtd} / Congelado: ${this.carrinho[i].congelado}` +
          ``;
        this.pedido.push(pedir);
        localStorage.setItem("Pedido:", JSON.stringify(this.pedido));
      }
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
