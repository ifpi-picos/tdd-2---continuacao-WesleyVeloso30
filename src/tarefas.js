class Tarefas {
    constructor() {
      this.lista = [];
    }
  
    adicionar(descricao) {
      this.lista.push({descricao, concluida: false});
      return;
    }
  
    remover(indice) {
      if(indice > this.lista.length || indice < 0){
        return `A lista atual vai de 0 à ${this.lista.length} elementos.`
      }
      this.lista.splice(indice, 1);
      return;
    }
  
    todas() {
      return this.lista;
    }
  
    marcarConcluida(indice) {
      if(indice > this.lista.length || indice < 0){
        return `A lista atual vai de 0 à ${this.lista.length} elementos.`
      }
      this.lista[indice].concluida = true;
      return;
    }
  }
  
module.exports = Tarefas;
  