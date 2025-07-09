class animal{
    public emitirSom(){
        console.log()
    }
}
class lobo extends animal{
    public emitirSom(): void {
        console.log("AUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU baby i'm preyeing you tonight")
    }
}
class gato extends animal{
    public emitirSom(): void {
        console.log("chin chen foin chin reuchaodieo")
    }
}


class Funcionario{
    public calcularBonus(){
    
    }
}
class Gerente extends Funcionario{
    public calcularBonus(): void {
        let bonus: number;
        let salario: number;
        salario = 4500
        bonus = salario * 0.25
     }
}
class assistente extends Funcionario{
    public calcularBonus(): void {
        let bonus: number;
        let salario: number;
        salario = 2000
        bonus = salario * 0.15
    }
}

class veiculo{
    public acelerar(){

    }
}
class moto extends veiculo{
    public acelerar(): void {
        let aceleracao: number 
        let VeloInicial: number
        let VeloFinal: number
        VeloInicial = 0
        aceleracao = 100
        VeloFinal = VeloInicial * aceleracao
    }
}
class carro extends veiculo{
    public acelerar(): void {
        let aceleracao: number 
        let VeloInicial: number
        let VeloFinal: number
        VeloInicial = 0
        aceleracao = 50
        VeloFinal = VeloInicial * aceleracao
    }
}

class ContaBancaria{
    public sacar(saldo: number, saque: number){

    }
}
class contaCorrente extends ContaBancaria{
    public sacar(saldo: number, saque: number): void {
    let taxa_saque: number
    taxa_saque = 5
    saldo -= saque + taxa_saque
    }
}
class contaPoupanca extends ContaBancaria{
    public sacar(saldo: number, saque: number): void {
    let taxa_saque: number
    taxa_saque = 3
    saldo -= saque + taxa_saque
    }
}

class Pessoa{
    public falar(){
    }
}
class aluno extends Pessoa{
    public falar(): void {
        console.log("Não aguento mais essa escola!!!!")
    }
}
class professor extends Pessoa{
    public falar(): void {
        console.log("A COROA PORTUGUESA....")
    }
}

class Produto{
    public calcularprecofinal(){

    }
}
class Produtofisico extends Produto{
    public calcularprecofinal(): void {
        let taxa
        let frete
        let ICMS
        let preco
        let precofinal
        frete = 89
        taxa = 100
        ICMS = 79
        preco = 49,90
        precofinal = taxa + frete + ICMS + preco
    }
}
class Produtodigital extends Produto{
        public calcularprecofinal(): void {
        let taxa
        let frete
        let ICMS
        let preco
        let precofinal
        frete = 13
        taxa = 15
        ICMS = 11
        preco = 29,99
        precofinal = taxa + frete + ICMS + preco
}}

class Funcionarios{
    public trabalhar(){

    }
}
class operario extends Funcionarios{
    public trabalhar(): void {
        
    }
}