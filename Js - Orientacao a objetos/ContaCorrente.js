import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get saldo() {
        return this._saldo;
    }

    _saldo = 0;

   

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
                    /* depositar(valor) {
                    if(valor <= 0) return; ( outra maneira de escrita)
                    this._saldo += valor;
                    }*/
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
                    
     }
                    
}