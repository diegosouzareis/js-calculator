function criaCalculadora() {
    return {

        display: document.querySelector(".display"),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.clickBotoes();
        },
        apagaUm(){
            this.display.value = this.display.value.slice(0,-1);
        },
        realizaConta() {
            let conta = this.display.value;
            try {
                //Danger!!!!
                conta = eval(conta);
                if(!conta) {
                    alert('Invalido')
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Invalido');
                return;
            }
        },
        clickBotoes() {
            document.addEventListener('click', function(e){
                const el = e.target;
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }
            }.bind(this));
        },
        clearDisplay(){
            this.display.value = '';
        },
        btnParaDisplay(valor){
            this.display.value += valor ;
        }
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();