class Trabalhador{
    Nome: string;
    Salario: number;
    constructor(nome: string, salario: number){
        this.Nome = nome;
        if (salario > 3000){
            this.Salario = salario;
        }
        else{
            this.Salario = 3000
            console.log("QuEm tA DEoxAnDo SIr Pobr4e!!!!!! AgORa toMa 3000🤤")
        }
    }
    getNome(): string{
        return this.Nome;
}
    getSalario(): Number{
        return this.Salario;
    }
    setSalario(S: number){
        if (S > 3000){
            this.Salario = S
        }
        else{
            this.Salario = 3000
        }
    }
}
class funcionario extends Trabalhador{
    DT: number;
    Ferias: number;
    constructor(nome:string, salario: number, dt: number){
        super(nome,salario)
        this.Ferias = 30;
        if (dt > 5000){
            this.DT = dt;
        }
        else{
            this.DT = salario*12+3000
            console.log("Elaine Acidente!!!!!")
        }
    }
}
class atendente extends funcionario{}
class gerente extends funcionario{}
class listafuncionario{
    private Lista: funcionario[] = []
    adicionar(novomano: funcionario){
        this.Lista.push(novomano)
    }
    imprimefuncionario(){
        let mar: number;
        mar = 0 
        let len = this.Lista.length
        while (mar < len){
            console.log(this.Lista[mar])
            mar++
        }
    }
}
let listadefuncionarios : listafuncionario
listadefuncionarios = new listafuncionario()
let loooeandroo: gerente;
loooeandroo = new gerente('LOOO-leandro...', 5000, 50000)
let juliaajuda: funcionario;
juliaajuda = new funcionario('julia ajuda', 8000, 50000)
let socorro: funcionario;
socorro = new funcionario('Renata Socorro', 3000, 50000)
let conceicao: funcionario
conceicao = new funcionario('Sabrina Carpenter Conceição', 10000, 50000)


listadefuncionarios.adicionar(loooeandroo)
listadefuncionarios.adicionar(juliaajuda)
listadefuncionarios.adicionar(socorro)
listadefuncionarios.adicionar(conceicao)